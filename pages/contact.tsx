import twoColumnStyles from "../styles/TwoColumn.module.css";
import styles from "../styles/Contact.module.css"; // ! Must be imported after twoColumnStyles

import { motion } from "framer-motion";
import MyCloseButton from "../components/CloseButton";
import {
  TextInput,
  Textarea,
  SimpleGrid,
  Group,
  Title,
  Button,
  Flex,
  Image,
} from "@mantine/core";
import { useForm } from "@mantine/form";

export default function contactPage() {
  const form = useForm({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
    validate: {
      name: (value) => value.trim().length < 2,
      email: (value) => !/^\S+@\S+$/.test(value),
      subject: (value) => value.trim().length === 0,
    },
  });

  return (
    <motion.div
      initial={{ height: "50%", width: "50%", bottom: 0, right: 0 }}
      animate={{ height: "100%", width: "100%" }}
      transition={{ duration: 0.5 }}
      className={twoColumnStyles.container}
    >
      <Flex className={`${twoColumnStyles.left} ${styles.left}`}>
        {" "}
        <Image
          className={styles.image}
          src="/ccchaos.svg"
          alt="Profile picture"
        />
      </Flex>
      <Flex className={`${twoColumnStyles.right} ${styles.right}`}>
        <MyCloseButton />
        <Title fz={56}>contact</Title>

        <form className={styles.myForm} onSubmit={form.onSubmit(() => {})}>
          <SimpleGrid cols={{ base: 1, sm: 2 }} mt="xl">
            <TextInput
              variant="unstyled"
              label="name"
              name="name"
              classNames={{
                wrapper: styles.wrapper,
                label: styles.label,
                input: styles.input,
              }}
              {...form.getInputProps("name")}
            />
            <TextInput
              label="email"
              name="email"
              variant="filled"
              classNames={{
                wrapper: styles.wrapper,
                label: styles.label,
                input: styles.input,
              }}
              {...form.getInputProps("email")}
            />
          </SimpleGrid>

          <TextInput
            label="subject"
            mt="md"
            name="subject"
            variant="filled"
            classNames={{
              wrapper: styles.wrapper,
              label: styles.label,
              input: styles.input,
            }}
            {...form.getInputProps("subject")}
          />
          <Textarea
            mt="md"
            label="message"
            maxRows={10}
            minRows={5}
            autosize
            name="message"
            variant="filled"
            classNames={{
              wrapper: styles.wrapper,
              label: styles.label,
              input: styles.input,
            }}
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
