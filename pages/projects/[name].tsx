import carouselStyles from "../../styles/Carousel.module.css";
import modalStyles from "../../styles/Modal.module.css";
import twoColumnStyles from "../../styles/TwoColumn.module.css";
import styles from "../../styles/Project.module.css"; // ! Must be imported after twoColumnStyles

import { motion } from "framer-motion";
import {
  Flex,
  Text,
  Button,
  TypographyStylesProvider,
  rem,
  Title,
  Image,
  Modal,
} from "@mantine/core";
import MyCloseButton from "../../components/CloseButton";
import Link from "next/link";
import { Carousel } from "@mantine/carousel";
import {
  IconExternalLink,
  IconCode,
  IconChevronRight,
  IconChevronLeft,
} from "@tabler/icons-react";
import { Project } from "../../common/types";

import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from "next";
import { projects } from "../../common/config";
import { ParsedUrlQuery } from "querystring";
import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";

export const getStaticPaths = (async () => {
  const pathArray = projects.map((pro) => {
    return {
      params: {
        name: pro.name,
      },
    };
  });

  return {
    paths: pathArray,
    fallback: "blocking", // https://nextjs.org/docs/pages/api-reference/functions/get-static-paths#fallback-blocking
  };
}) satisfies GetStaticPaths;

type PropsType = {
  project: Project;
};
type ParamsType = ParsedUrlQuery & {
  params: { name: string };
};

export const getStaticProps = (async ({ params }) => {
  // Reference: https://stackoverflow.com/a/73692301/17627866
  const name = (params as ParsedUrlQuery).name;
  const project = projects.filter((e) => e.name == name)[0];

  // Handle `undefined` project
  if (!project) {
    return {
      notFound: true,
    };
  }

  return { props: { project } };
}) satisfies GetStaticProps<PropsType, ParamsType>;

export default function Project({
  project,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [opened, { close, open }] = useDisclosure(false);

  const [currentImg, setCurrentImg] = useState<string | null>(null);
  const images = project.screenshots.map((link) => (
    <Carousel.Slide key={`${project.name}-${link}`}>
      <Image
        onClick={() => {
          openFullSizeImage(link);
        }}
        className={styles.image}
        src={link}
        alt={`screenshot of ${project.name}`}
        fallbackSrc="/placehold.webp"
      />{" "}
    </Carousel.Slide>
  ));

  function openFullSizeImage(imgSrc: string) {
    setCurrentImg(imgSrc);
    open();
  }

  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: "0%" }}
      transition={{ duration: 1 }}
      className={twoColumnStyles.container}
    >
      <Modal
        classNames={modalStyles}
        opened={opened}
        onClose={close}
        size="auto"
        title="Full-size image"
        closeButtonProps={{ "aria-label": "Close full-size image" }}
      >
        <Image
          src={currentImg}
          alt="Currently opened project image"
          fallbackSrc="/placehold.webp"
        />{" "}
      </Modal>
      <div className={twoColumnStyles.left}>
        {" "}
        <Carousel
          classNames={carouselStyles}
          height="100%"
          style={{ flex: 1 }}
          withIndicators
          dragFree
          slideGap="md"
          align="start"
          nextControlIcon={<IconChevronRight />}
          previousControlIcon={<IconChevronLeft />}
          nextControlProps={{ "aria-label": "show next image" }}
          previousControlProps={{ "aria-label": "show previous image" }}
        >
          {images}
        </Carousel>
      </div>

      <div
        className={`${twoColumnStyles.right} ${styles.right}`}
        style={{ backgroundColor: project.color }}
      >
        <MyCloseButton link="/projects" />
        <TypographyStylesProvider pl={5}>
          <Title mt={0} order={1}>
            {project.name}
          </Title>

          <Text fz="xl">{project.description}</Text>
          <Text fz="xl" fw={700}>
            languages:{" "}
            <Text span fz="xl">
              {project.languages.join(", ")}
            </Text>
          </Text>
          <Text fz="xl" fw={700}>
            tools:{" "}
            <Text span fz="xl">
              {project.tools.join(", ")}
            </Text>
          </Text>
        </TypographyStylesProvider>
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
      </div>
    </motion.div>
  );
}
