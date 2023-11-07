import { Flex } from "@mantine/core";
import styles from "../styles/Header.module.css";

export default function myHeader() {
  return (
    <Flex className={styles.header}>
      <Flex className={styles.headerLeft}>logo</Flex>
      <Flex className={styles.headerRight}>additional info</Flex>
    </Flex>
  );
}
