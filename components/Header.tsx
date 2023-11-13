import { Flex } from "@mantine/core";
import styles from "../styles/Header.module.css";
import Link from "next/link";

export default function myHeader() {
  const links = [
    { name: "mail", url: "mailto:c34560814@gmail.com" },
    // { name: "resume", url: "/resume.pdf" },
    // { name: "linkedin", url: "https://www.linkedin.com/" },
    { name: "blog", url: "https://creme332.github.io/creamy-notes/" },
    { name: "github", url: "https://github.com/creme332" },
    { name: "monkeytype", url: "https://monkeytype.com/profile/creme69" },
    { name: "codewars", url: "https://www.codewars.com/users/creme332/" },
  ];
  const a = links.map((link) => (
    <Link key={`nav-key-${link.name}`} className={styles.link} href={link.url}>
      {link.name}
    </Link>
  ));
  return (
    <header className={styles.header}>
      <Flex className={styles.headerLeft}>
        <div className={styles.logo}>creme332</div>
      </Flex>
      <Flex className={styles.headerRight}>{a}</Flex>
    </header>
  );
}
