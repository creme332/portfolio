import styles from "../styles/Projects.module.css";
import { motion } from "framer-motion";
import MyCloseButton from "../components/CloseButton";
import { Flex, Title } from "@mantine/core";
import Link from "next/link";

import { projects } from "../common/config";
import getShape from "../common/shape";

export default function ProjectList() {
  return (
    <motion.div
      initial={{ height: "50%", width: "50%", right: 0, top: 0 }}
      animate={{ height: "100%", width: "100%" }}
      transition={{ duration: 0.5 }}
      className={styles.project}
    >
      <Title order={1} fz={56} pl={10}>
        projects
      </Title>
      <MyCloseButton />
      <Flex className={styles.wrapper}>
        {projects.map((project, id) => (
          <Link
            key={`project-${id}-${project.name}`}
            href={`/projects/${project.name}`}
          >
            <div className={styles.shapeContainer}>
              {getShape(project.shape, project.color)}
              <div className={styles.shapeText}>{project.name}</div>
            </div>
          </Link>
        ))}
      </Flex>
    </motion.div>
  );
}
