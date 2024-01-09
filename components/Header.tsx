import { Flex } from "@mantine/core";
import styles from "../styles/Header.module.css";
import Link from "next/link";
import { socialLinks } from "../common/config";

export default function myHeader() {
  const allLinks = socialLinks.map((link) => (
    <Link key={`nav-key-${link.name}`} className={styles.link} href={link.url}>
      <span className={styles.hoverUnderline}>{link.name}</span>
    </Link>
  ));
  return (
    <header className={styles.header}>
      <Flex className={styles.headerLeft}>
        <div className={styles.logo}>
          <Link href={"/"}>creme332</Link>
        </div>
      </Flex>
      <Flex className={styles.headerRight}>{allLinks}</Flex>
    </header>
  );
}
