import twoColumnStyles from "../styles/TwoColumn.module.css";
import modalStyles from "../styles/Modal.module.css";
import styles from "../styles/Contact.module.css"; // ! Must be imported after twoColumnStyles

import { motion } from "framer-motion";
import MyCloseButton from "../components/CloseButton";
import {
  TextInput,
  Textarea,
  Modal,
  SimpleGrid,
  Group,
  Title,
  Button,
  Flex,
  Image,
  Text,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import React, { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { sections } from "../common/config";

export default function ContactSection() {
  const currentSection = sections.filter((el) => el.name === "contact")[0];

  const [openedNotification, notificationHandler] = useDisclosure(false);
  const [notification, setNotification] = useState("");
  const [loading, setLoading] = useState(false);

  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate: {
      name: (value) =>
        value.trim().length < 2 || value.trim().length > 100
          ? "Must be between 3 and 100 characters"
          : null,
      subject: (value) =>
        value.trim().length < 5 || value.trim().length > 100
          ? "Must be between 5 and 100 characters"
          : null,
      message: (value) =>
        value.trim().length < 100 || value.trim().length > 5000
          ? "Must be between 100 and 5000 characters"
          : null,
    },
    transformValues(values) {
      return {
        name: values.name.trim(),
        email: values.email.trim(),
        subject: values.subject.trim(),
        message: values.message.trim(),
      };
    },
  });

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    function displayError(errorInfo: string) {
      const errorMsg =
        `An error occurred while delivering message.\n` + errorInfo;
      setNotification(errorMsg);
      notificationHandler.open();
    }

    e.preventDefault();

    // validate form
    form.validate();
    if (!form.isValid()) {
      return;
    }

    console.log("Form values:", form.values);

    // show loading animation
    setLoading(true);

    window.grecaptcha.enterprise.ready(async () => {
      const token = await window.grecaptcha.enterprise.execute(
        "6Lda7BMpAAAAAIzp5gPINpkVN3EWZna61CZ5mxYe",
        { action: "contactPage" }
      );

      // send form data and token to backend
      try {
        const response = await fetch(`/api/contact/${token}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form.getTransformedValues()),
        });
        setLoading(false);

        if (response.ok) {
          setNotification("Message delivered successfully.");
          notificationHandler.open();
          form.reset();
          return;
        }

        // An error occurred.
        console.log(response);
        const obj = await response.json();
        displayError(`Error: ${obj.error}. Status:${response.status}`);
      } catch (error) {
        setLoading(false);

        // Reference: https://stackoverflow.com/a/54649623/17627866
        if (typeof error === "string") {
          displayError(error);
        } else if (e instanceof Error) {
          displayError(e.message);
        }
      }
    });
  }

  const textInputClassNames = {
    wrapper: styles.wrapper,
    label: styles.label,
    input: styles.input,
    error: styles.error,
  };
  return (
    <motion.div
      initial={{ height: "50%", width: "50%", bottom: 0, right: 0 }}
      animate={{ height: "100%", width: "100%" }}
      transition={{ duration: 0.5 }}
      className={twoColumnStyles.container}
    >
      <Modal
        classNames={modalStyles}
        opened={openedNotification}
        onClose={notificationHandler.close}
        title="Status"
      >
        {notification}
      </Modal>
      <Flex className={`${twoColumnStyles.left} ${styles.left}`}>
        {" "}
        <Image
          className={styles.image}
          src="/geo.webp"
          alt="Geometric shape"
          fallbackSrc="./placehold.webp"
        />
      </Flex>
      <Flex
        className={`${twoColumnStyles.right} ${styles.right}`}
        style={{ backgroundColor: currentSection.color }}
      >
        <MyCloseButton />
        <Title order={1}>contact</Title>

        <form className={styles.myForm} onSubmit={handleSubmit}>
          <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
            <TextInput
              variant="filled"
              label="name"
              required
              maxLength={100}
              name="name"
              classNames={textInputClassNames}
              {...form.getInputProps("name")}
            />
            <TextInput
              label="email"
              name="email"
              maxLength={100}
              variant="filled"
              classNames={textInputClassNames}
              {...form.getInputProps("email")}
            />
          </SimpleGrid>

          <TextInput
            label="subject"
            mt="md"
            required
            name="subject"
            maxLength={100}
            variant="filled"
            classNames={textInputClassNames}
            {...form.getInputProps("subject")}
          />
          <Textarea
            mt="md"
            label="message"
            maxRows={10}
            minRows={5}
            maxLength={5000}
            autosize
            name="message"
            variant="filled"
            required
            classNames={textInputClassNames}
            {...form.getInputProps("message")}
          />

          <Group justify="center" mt="xl">
            <Button
              loading={loading}
              loaderProps={{ type: "dots" }}
              className={`myButton ${styles.sendButton}`}
              type="submit"
              size="md"
            >
              send
            </Button>
          </Group>
          <Text ta="center" mt="md" fz={"xs"}>
            This site is protected by reCAPTCHA and the Google{" "}
            <a
              style={{ textDecoration: "underline" }}
              href="https://policies.google.com/privacy"
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              style={{ textDecoration: "underline" }}
              href="https://policies.google.com/terms"
            >
              Terms of Service
            </a>{" "}
            apply.
          </Text>
        </form>
      </Flex>
    </motion.div>
  );
}
