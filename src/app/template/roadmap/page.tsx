"use client";
import { useEffect, useState } from "react";

export default function Changelog() {
  const [changelog, setChangelog] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchChangelog() {
      try {
        const response = await fetch("/api/arena");
        const data = await response.json();
        setChangelog(data.contents);
      } catch (err) {
        setError(err.message);
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
