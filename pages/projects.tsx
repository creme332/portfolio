import styles from "../styles/Projects.module.css";
import { motion } from "framer-motion";
import MyCloseButton from "../components/CloseButton";
import { Image, Flex, Title } from "@mantine/core";
import Link from "next/link";

export default function projectPage() {
  const projects = [
    "project1",
    "project1",
    "project1",
    "project1",
    "project1",
    "project1",
    "project1",
  ];

  return (
    <motion.div
      initial={{ height: "50%", width: "50%", right: 0, top: 0 }}
      animate={{ height: "100%", width: "100%" }}
      transition={{ duration: 0.5 }}
      className={styles.project}
    >
      <Title>projects</Title>
      <MyCloseButton />
      <Flex wrap={"wrap"} justify={"space-between"}>
        {projects.map((project, id) => (
          <Link key={`project-${id}-${project}`} href={`/projects/${project}`}>
            <div className={styles.shapeContainer}>
              <Image
                className={styles.shape}
                w={300}
                h={240}
                src={`/shape-${id}.svg`}
              />
              <div className={styles.shapeText}>{project}</div>
            </div>
          </Link>
        ))}
      </Flex>
    </motion.div>
  );
}
