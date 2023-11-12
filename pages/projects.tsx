import styles from "../styles/Projects.module.css";
import { motion } from "framer-motion";
import MyCloseButton from "../components/CloseButton";
import { Flex, Title } from "@mantine/core";
import Link from "next/link";

import { projects } from "../common/config";
import { Shape1 } from "../components/Shape";

export default function projectPage() {
  return (
    <motion.div
      initial={{ height: "50%", width: "50%", right: 0, top: 0 }}
      animate={{ height: "100%", width: "100%" }}
      transition={{ duration: 0.5 }}
      className={styles.project}
    >
      <Title pl={10}>projects</Title>
      <MyCloseButton />
      <Flex wrap={"wrap"} justify={"space-around"}>
        {projects.map((project, id) => (
          <Link
            key={`project-${id}-${project.name}`}
            href={`/projects/${project.name}`}
          >
            <div className={styles.shapeContainer}>
              <Shape1 color={project.color} className={styles.shape} />
              <div className={styles.shapeText}>{project.name}</div>
            </div>
          </Link>
        ))}
      </Flex>
    </motion.div>
  );
}
