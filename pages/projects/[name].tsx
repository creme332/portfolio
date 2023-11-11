import carouselStyles from "../../styles/Carousel.module.css";
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
    fallback: true, // false or "blocking"
  };
}) satisfies GetStaticPaths;

// TODO: remove any
export const getStaticProps = (({ params }: any) => {
  const project = projects.filter((e) => e.name == params.name)[0];
  return { props: { project } };
}) satisfies GetStaticProps<{
  project: Project;
}>;

export default function Page({
  project,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const images = project.screenshots.map((link) => (
    <Carousel.Slide key={`${project.name}-${link}`}>
      <Image
        className={styles.image}
        src={link}
        alt={`screenshot of ${project.name}`}
        fallbackSrc="/placehold.png"
      />{" "}
    </Carousel.Slide>
  ));
  return (
    <motion.div
      initial={{ x: "-100%" }}
      animate={{ x: "0%" }}
      transition={{ duration: 1 }}
      className={twoColumnStyles.container}
    >
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
          nextControlIcon={
            <IconChevronRight
              style={{ color: "white", width: rem(30), height: rem(30) }}
            />
          }
          previousControlIcon={
            <IconChevronLeft style={{ width: rem(30), height: rem(30) }} />
          }
        >
          {images}
        </Carousel>
      </div>

      <div className={`${twoColumnStyles.right} ${styles.right}`}>
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
