import { Container, Title, Text, Button } from "@mantine/core";
import classes from "../styles/NotFound.module.css";
import Link from "next/link";

export default function NotFoundImage() {
  return (
    <div className={classes.container}>
      <Container className={classes.root}>
        <Title order={2} className={classes.title}>Something is not right...</Title>
        <Text c="dimmed" size="lg">
          The page that you are trying to open does not exist. You may have
          mistyped the address, or the page has been moved to another URL.
        </Text>
        <Button
          component={Link}
          href="/"
          variant="outline"
          size="md"
          mt="xl"
          className={"myButton"}
        >
          Go back to home page
        </Button>
      </Container>
    </div>
  );
}
