import styles from "../styles/CloseButton.module.css";
import { CloseButton } from "@mantine/core";
import Link from "next/link";

export default function MyCloseButton({ link = "/" }) {
  return (
    <Link href={link}>
      <CloseButton
        className={styles.closeButton}
        variant="transparent"
        aria-label="Close about page"
        size="xl"
      />{" "}
    </Link>
  );
}
