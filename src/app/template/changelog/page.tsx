"use client";
import { useEffect, useState } from "react";
import { parseISO, format } from "date-fns";

// Define a type for the changelog items
type ChangelogItem = {
  id: string;
  date?: string; // Assuming date might be optional
  title: string;
  version: string;
  content: string;
};

export default function Changelog({ channelName = "ats-template-changelog" }) {
  const [changelog, setChangelog] = useState<ChangelogItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchChangelog() {
      try {
        const response = await fetch(`/api/arena?channel=${channelName}`);
        const data = await response.json();
        setChangelog(data.contents);
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error occurred");
        }
      }
    }

    fetchChangelog();
  }, [channelName]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="changelog-container">
      <div className="timeline">
        {changelog.map((item) => {
          console.log("Date received:", item.date);
          return (
            <div key={item.id} className="timeline-item">
              <span className="timeline-date">
                {item.date
                  ? format(parseISO(item.date), "yyyy-MM-dd")
                  : "No Date Available"}
              </span>
            </div>
          );
        })}
      </div>
      <div className="content">
        <h1>Project Changelog</h1>
        <ul>
          {changelog.map((item) => (
            <li key={item.id}>
              <h2>
                <a href={`#note-${item.id}`}>{item.title}</a>{" "}
                <span className="version">v{item.version}</span>
              </h2>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
