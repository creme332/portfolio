import { Flex } from "@mantine/core";
import styles from "../styles/Homepage.module.css";
import Link from "next/link";

export default function HomePage() {
  const sections = ["about", "projects", "blog", "contact"];

  return (
    <Flex className={styles.boxContainer}>
      <Link className={styles.box} href={{ pathname: "/about" }}>
        <Flex>
          <span>about</span>
        </Flex>
      </Link>

      <Link className={styles.box} href={{ pathname: "/projects" }}>
        <Flex>
          <span>projects</span>
        </Flex>
      </Link>

      <Link
        className={styles.box}
        href={{ pathname: "https://creme332.github.io/creamy-notes/" }}
      >
        <Flex>
          <span>blog</span>
        </Flex>
      </Link>

      <Link className={styles.box} href={{ pathname: "/contact" }}>
        <Flex>
          <span>contact</span>
        </Flex>
      </Link>
    </Flex>
  );
}
