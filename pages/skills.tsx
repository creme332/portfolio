import styles from "../styles/Skills.module.css";
import { motion } from "framer-motion";
import MyCloseButton from "../components/CloseButton";
import { Title, Container, Flex, Text } from "@mantine/core";
import { sections, skills } from "../common/config";

/**
 *
 * @returns Skills section
 */
export default function SkillsSection() {
  const currentSection = sections.filter((el) => el.name === "skills")[0];

  return (
    <motion.div
      initial={{ height: "50%", width: "50%", left: 0, bottom: 0 }}
      animate={{ height: "100%", width: "100%" }}
      transition={{ duration: 0.5 }}
      className={styles.container}
      style={{
        backgroundColor: currentSection.color,
      }}
    >
      <Title order={1} p={10}>
        skills
      </Title>
      <MyCloseButton />
      <Container pb={10}>
        <Flex
          mih={50}
          gap="xl"
          justify="flex-start"
          align="flex-start"
          direction="column"
          wrap="wrap"
        >
          {" "}
          {Object.entries(skills).map(([category, items]) => (
            <ul className={styles.mtable} key={category}>
              <li className={styles.mtitle}>
                <Title order={2}>{category}</Title>
              </li>
              {items.map((item) => (
                <li className={styles.mbox} key={item}>
                  <Text size="xl">{item}</Text>
                </li>
              ))}
            </ul>
          ))}
        </Flex>
      </Container>
    </motion.div>
  );
}
