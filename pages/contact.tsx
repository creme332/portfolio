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
} from "@mantine/core";
import { useForm } from "@mantine/form";
import emailjs from "@emailjs/browser";
import React, { useState } from "react";
import { useDisclosure } from "@mantine/hooks";

export default function Contact() {
  // * EmailJS API key can be exposed: https://www.emailjs.com/docs/faq/is-it-okay-to-expose-my-public-key/
  const emailJSCred = {
    service_key: "service_xulgqve",
    template_id: "template_hha4ex6",
    public_key: "",
  };
  const [openedNotification, notificationHandler] = useDisclosure(false);
  const [notification, setNotification] = useState("");

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
          ? "Must be between 5 and 5000 characters"
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
  async function sendEmail(e: React.FormEvent<HTMLFormElement>) {
    function handleError(errorInfo: string) {
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

    console.log("Entered values:", form.values);

    try {
      const { status, text } = await emailjs.sendForm(
        emailJSCred.service_key,
        emailJSCred.template_id,
        e.currentTarget,
        emailJSCred.public_key
      );

      if (text === "OK" && status === 200) {
        setNotification("Message delivered successfully.");
        notificationHandler.open();
        form.reset();
        return;
      }
      // An error occurred.
      handleError(`Error: ${text}\nStatus:${status}`);
    } catch (error) {
      handleError("Check console for more details.");
      console.error(error);
    }
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
      <Flex className={`${twoColumnStyles.right} ${styles.right}`}>
        <MyCloseButton />
        <Title order={1}>contact</Title>

        <form className={styles.myForm} onSubmit={sendEmail}>
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
              className={`myButton ${styles.sendButton}`}
              type="submit"
              size="md"
            >
              send
            </Button>
          </Group>
        </form>
      </Flex>
    </motion.div>
  );
}
