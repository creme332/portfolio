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
            about
          </Title>
          {/* <Title mt={0} order={2}>
            me
          </Title> */}

          <Text fz="xl">
            I am a computer science student with a keen interest in full-stack
            development.
          </Text>
          <Title mt={0} order={2}>
            site
          </Title>

          <Text fz="xl">
            This site was built with Next.js and React. The design was inspired
            by{" "}
            <Text
              className={styles.link}
              href="https://plant22.co/"
              component="a"
              fz="xl"
            >
              plant22.co
            </Text>
            .
          </Text>
          <Text fz="xl">
            The code is available on{" "}
            <Text
              className={styles.link}
              href="https://github.com/creme332/creme332.github.io"
              component="a"
              fz="xl"
            >
              Github
            </Text>{" "}
            under the MIT license.
          </Text>
        </TypographyStylesProvider>
      </motion.div>
    </motion.div>
  );
}
