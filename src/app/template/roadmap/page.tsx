"use client";
import { useEffect, useState } from "react";

// Define a type for the changelog items
type ChangelogItem = {
  id: string; // or number, depending on your data
  title: string;
  content: string;
};

export default function Changelog() {
  const [changelog, setChangelog] = useState<ChangelogItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchChangelog() {
      try {
        const response = await fetch("/api/arena");
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
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      <h1>Project Changelog</h1>
      <ul>
        {changelog.map((item) => (
          <li key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
