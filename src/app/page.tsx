import { FaRoad, FaClipboardList, FaBook, FaBlog } from "react-icons/fa";
import Link from "next/link";
import styles from "./page.module.css";

const templates = [
  {
    title: "Roadmap",
    icon: <FaRoad />,
    description: "View the project roadmap",
    link: "/template/roadmap",
  },
  {
    title: "Changelog",
    icon: <FaClipboardList />,
    description: "Check out the latest changes",
    link: "/template/changelog",
  },
  {
    title: "Docs",
    icon: <FaBook />,
    description: "Read the project documentation",
    link: "/template/docs",
  },
  {
    title: "Blog",
    icon: <FaBlog />,
    description: "Read our latest blog posts",
    link: "/template/blog",
  },
];

function Page() {
  // Shuffle the templates array and select the first 4 items
  const shuffledTemplates = templates
    .sort(() => 0.5 - Math.random())
    .slice(0, 4);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to Our Project</h1>
      <p className={styles.description}>
        Explore the different sections of our project using the links below:
      </p>
      <ul className={styles.gallery}>
        {shuffledTemplates.map((template, index) => (
          <li key={index} className={styles.card}>
            <Link href={template.link}>
              <div>
                {template.icon}
                <h2 className={styles.cardTitle}>{template.title}</h2>
                <p className={styles.cardDescription}>{template.description}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <p className={styles.footer}>
        If you want to add a template, you can open a pull request with the
        design or submit the template you want to add.
      </p>
    </div>
  );
}

export default Page;
