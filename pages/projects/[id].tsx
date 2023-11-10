import styles from "../../styles/Project.module.css";
import { motion } from "framer-motion";
import {
  Flex,
  List,
  Text,
  Button,
  TypographyStylesProvider,
  Title,
  Image,
} from "@mantine/core";
import MyCloseButton from "../../components/CloseButton";
import Link from "next/link";

import { IconExternalLink, IconCode } from "@tabler/icons-react";

const project = {
  name: "project1",
  description:
    "lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt nulla quam aut sed corporis voluptates praesentium inventore, sapiente ex tempore sit consequatur debitis non! Illo cum ipsa reiciendis quidem facere, deserunt eos totam impedit. Vel ab, ipsum veniam aperiam odit molestiae incidunt minus, sint eos iusto earum quaerat vitae perspiciatis.",
  color: "",
  image_url: null,
  repository: "/",
  live_url: "/",
  tools: [],
  screenshots: [],
};

export default function projectPage() {
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: "0%" }}
      transition={{ duration: 1 }}
      className={styles.container}
    >
      <motion.div className={styles.left}>
        {/* <Image
          src={project.image_url}
          alt="Project picture"
          fallbackSrc="https://placehold.co/600x400?text=Placeholder"
        /> */}
      </motion.div>

      <div className={styles.right}>
        <MyCloseButton />
        <TypographyStylesProvider pl={5}>
          <Title fz={56} mt={0} order={1}>
            {project.name}
          </Title>

          <Text fz="xl">{project.description}</Text>

          <Flex gap={"md"}>
            {project.repository ? (
              <Button
                component={Link}
                href={project.repository}
                rightSection={<IconCode />}
                className="myButton"
              >
                code
              </Button>
            ) : null}

            {project.live_url ? (
              <Button
                component={Link}
                href={project.live_url}
                rightSection={<IconExternalLink />}
                className="myButton"
              >
                live preview
              </Button>
            ) : null}
          </Flex>
        </TypographyStylesProvider>
      </div>
    </motion.div>
  );
}
