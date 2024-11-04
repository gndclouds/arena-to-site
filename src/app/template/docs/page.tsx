"use client";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import styles from "./page.module.css";

export default function Changelog() {
  const [changelog, setChangelog] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchChangelog() {
      try {
        const response = await fetch("/api/arena?channel=ats-template-docs");
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
    <div className={styles.container}>
      <div className={styles.index}>
        <h2>Index</h2>
        <ul>
          {changelog.map((item) => (
            <li key={item.id}>
              <a href={`#note-${item.id}`}>{item.title}</a>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.content}>
        {changelog.map((item) => (
          <div className={styles.note} id={`note-${item.id}`} key={item.id}>
            <h2>{item.title}</h2>
            <ReactMarkdown>{item.content}</ReactMarkdown>
          </div>
        ))}
      </div>
    </div>
  );
}
