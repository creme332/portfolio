import styles from "../styles/About.module.css";
import { motion } from "framer-motion";
import {
  Flex,
  Text,
  TypographyStylesProvider,
  Title,
  Image,
} from "@mantine/core";
import closeButton from "../components/CloseButton";
export default function aboutPage() {
  return (
    <motion.div
      initial={{ height: "50%", width: "50%" }}
      animate={{ height: "100%", width: "100%" }}
      transition={{ duration: 0.5 }}
      className={styles.about}
    >
      <Flex className={styles.image}>
        <Image src="/profile.jpg" alt="Profile picture" />
      </Flex>
      <Flex className={styles.content}>
        {closeButton()}
        <TypographyStylesProvider>
          <Title fz={56} order={1}>
            creme332
          </Title>
          <Title mt={0} order={2}>
            student
          </Title>

          <Text mb={3} fw={400} fz="xl">
            github:{" "}
            <a className={styles.link} href="https://github.com/creme332">
              github.com/creme332
            </a>
          </Text>
          <Text fz="xl">
            contact:{" "}
            <a className={styles.link} href="mailto:c34560814@gmail.com">
              c34560814@gmail.com
            </a>
          </Text>

          <Text fz="xl">
            creme332 is ipsum dolor sit amet consectetur adipisicing elit.
            Nesciunt nulla quam aut sed corporis voluptates praesentium
            inventore, sapiente ex tempore sit consequatur debitis non! Illo cum
            ipsa reiciendis quidem facere, deserunt eos totam impedit. Vel ab,
            ipsum veniam aperiam odit molestiae incidunt minus, sint eos iusto
            earum quaerat vitae perspiciatis.
          </Text>

          {/* <List size="xs" spacing={0}>
            <List.Item>
              {" "}
              <Text fw={700} fz="md">
                languages: Python, TypeScript, Java
              </Text>
            </List.Item>
            <List.Item>
              {" "}
              <Text fw={700} fz="md">
                libraries: React, Express
              </Text>
            </List.Item>
            <List.Item>
              <Text fw={700} fz="md">
                databases: MongoDB, Firestore, MySQL
              </Text>{" "}
            </List.Item>
            <List.Item>
              <Text fw={700} fz="md">
                tools: Git, Github
              </Text>{" "}
            </List.Item>
          </List> */}
        </TypographyStylesProvider>
      </Flex>
    </motion.div>
  );
}