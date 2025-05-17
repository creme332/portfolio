import twoColumnStyles from "../styles/TwoColumn.module.css";
import styles from "../styles/About.module.css"; // ! Must be imported after twoColumnStyles
import { motion } from "framer-motion";
import { Text, TypographyStylesProvider, Title, Image } from "@mantine/core";
import MyCloseButton from "../components/CloseButton";
import { sections } from "../common/config";

export default function AboutSection() {
  const currentSection = sections.filter((el) => el.name === "about")[0];

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
      style={{ backgroundColor: currentSection.color }}
    >
      <motion.div
        variants={item}
        className={`${twoColumnStyles.left} ${styles.left}`}
      >
        <Image
          className={styles.image}
          src="/profile.webp"
          alt="Profile picture"
          fallbackSrc="./placehold.webp"
        />
      </motion.div>

      <motion.div
        variants={item}
        className={`${twoColumnStyles.right} ${styles.right}`}
        style={{ backgroundColor: currentSection.color }}
      >
        <MyCloseButton />
        <TypographyStylesProvider pl={0}>
          <Title order={1} mt={0}>
            about
          </Title>

          <Text fz="xl">
            I am a computer science student based in Mauritius. With a keen
            interest in full-stack development, I am constantly looking for ways
            to improve my skills.
          </Text>

          <Text fz="xl">
            For encrypted correspondence, you can use{" "}
            <Text
              className={styles.link}
              href="https://keys.openpgp.org/search?q=c34560814@gmail.com"
              component="a"
              fz="xl"
            >
              my public key
            </Text>{" "}
            to send encrypted emails. You can reach me at: c34560814 [at] gmail
            [dot] com.
          </Text>

          <Title mt={0} order={2}>
            site
          </Title>

          <Text fz="xl">
            This site was built by myself with Next.js and React. The design was
            inspired by{" "}
            <Text
              className={styles.link}
              href="https://plant22.co/"
              component="a"
              fz="xl"
            >
              plant22.co
            </Text>
            . The source code is available on{" "}
            <Text
              className={styles.link}
              href="https://github.com/creme332/portfolio"
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
