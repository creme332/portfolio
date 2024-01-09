import { Container, Title, Text, Button } from "@mantine/core";
import classes from "../styles/NotFound.module.css";
import Link from "next/link";

export default function OfflinePage() {
  return (
    <div className={classes.container}>
      <Container className={classes.root}>
        <Title order={2} className={classes.title}>
          Something is not right...
        </Title>
        <Text c="dimmed" size="lg">
          The page that you are trying to open was not cached.
        </Text>
        <Button
          component={Link}
          w={200}
          href="/"
          variant="outline"
          size="md"
          mt="xl"
          className={"myButton"}
        >
          Go back
        </Button>
      </Container>
    </div>
  );
}
