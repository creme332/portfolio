import twoColumnStyles from "../styles/TwoColumn.module.css";
import styles from "../styles/About.module.css"; // ! Must be imported after twoColumnStyles
import { theme } from "../theme";
import { motion } from "framer-motion";
import {
  Flex,
  Text,
  TypographyStylesProvider,
  Title,
  Image,
} from "@mantine/core";
import MyCloseButton from "../components/CloseButton";
import Link from "next/link";

export default function aboutPage() {
  const variants = {
    visible: {
      height: "100%",
      width: "100%",
      transitionEnd: { backgroundColor: "#000000" },
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.5,
      },
    },
    hidden: {
      height: "50%",
      width: "50%",
      top: 0,
      left: 0,
    },
  };

  const item = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={variants}
      className={`${twoColumnStyles.container} ${styles.container}`}
    >
      <motion.div
        variants={item}
        className={`${twoColumnStyles.left} ${styles.left}`}
      >
        <Image
          className={styles.image}
          src="/profile.jpg"
          alt="Profile picture"
          fallbackSrc="./placehold.png"
        />
      </motion.div>

      <motion.div
        variants={item}
        className={`${twoColumnStyles.right} ${styles.right}`}
      >
        <MyCloseButton />
        <TypographyStylesProvider pl={0}>
          <Title fz={56} order={1} mt={0}>
            creme332
          </Title>
          <Title mt={0} order={2}>
            student
          </Title>

          <Text fz="xl">
            creme332 is ipsum dolor sit amet consectetur adipisicing elit.
            Nesciunt nulla quam aut sed corporis voluptates praesentium
            inventore, sapiente ex tempore sit consequatur debitis non! Illo cum
            ipsa reiciendis quidem facere, deserunt eos totam impedit. Vel ab,
            ipsum veniam aperiam odit molestiae incidunt minus, sint eos iusto
            earum quaerat vitae perspiciatis.
          </Text>
        </TypographyStylesProvider>
      </motion.div>
    </motion.div>
  );
}
