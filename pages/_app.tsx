import "@mantine/core/styles.css";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import { theme } from "../theme";
import classes from "../styles/global.css";
import Header from "../components/Header";
import "@mantine/carousel/styles.css";

interface AppProps {
  Component: () => JSX.Element;
  pageProps: any;
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <MantineProvider theme={theme}>
      <Head>
        <meta charSet="utf-8" />
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🧊</text></svg>"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Welcome to the official website of creme332, an ambitious software developer dedicated to crafting innovative solutions. Explore my portfolio and projects as I delve into the world of technology, aiming to create impactful contributions within the realm of software development."
        />
        <meta property="og:title" content="creme332's website" />
        <meta
          property="og:description"
          content="Official website of creme332"
        />
        <meta property="og:image" content="/profile.jpg" />
        <title>creme332</title>
      </Head>
      <Header />
      <main>
        <Component className={classes} {...pageProps} />
      </main>
    </MantineProvider>
  );
}
