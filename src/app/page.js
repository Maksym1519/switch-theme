"use client";
import { useState } from "react";
import styles from "./page.module.scss";
import Button from "@/components/Button/Button";
import Title from "@/components/Title/Title";

export default function Home() {
  const [theme, setTheme] = useState("light");
  console.log(theme)

  const handleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className={`${styles.home} ${theme === "dark" ? styles.dark : ""}`}>
      <Button handleClick={handleTheme} className={theme === 'dark' ? 'dark' : ''}>Switch theme</Button>

      <main className={styles.main}>
        <Title as="h1" className={`${styles.mainTitle} ${theme === 'dark' ? styles.dark : ''}`}>
          Hello world !
        </Title>

        <p className={styles.mainText}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </main>
    </div>
  );
}
