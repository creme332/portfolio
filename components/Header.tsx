import { Flex } from "@mantine/core";
import styles from "../styles/Header.module.css";
import Link from "next/link";

export default function myHeader() {
  const links = [
    { name: "email", url: "" },
    { name: "resume", url: "/resume" },
    { name: "linkedin", url: "/linkedin" },
    { name: "github", url: "/github" },
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
