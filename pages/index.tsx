import { Flex } from "@mantine/core";
import styles from "../styles/Homepage.module.css";
import Link from "next/link";
import { useEffect } from "react";

export default function Home() {
  // https://github.com/shadowwalker/next-pwa/blob/master/examples/lifecycle/pages/index.js#L4
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      "serviceWorker" in navigator &&
      window.workbox !== undefined
    ) {
      const wb = window.workbox;

      // A common UX pattern for progressive web apps is to show a banner when a service worker has updated and waiting to install.
      // NOTE: MUST set skipWaiting to false in next.config.js pwa object
      // https://developers.google.com/web/tools/workbox/guides/advanced-recipes#offer_a_page_reload_for_users
      const promptNewVersionAvailable = (event: Event) => {
        // `event.wasWaitingBeforeRegister` will be false if this is the first time the updated service worker is waiting.
        // When `event.wasWaitingBeforeRegister` is true, a previously updated service worker is still waiting.
        // You may want to customize the UI prompt accordingly.
        if (
          confirm(
            "A newer version of this web app is available, reload to update?"
          )
        ) {
          wb.addEventListener("controlling", (event: Event) => {
            window.location.reload();
          });

          // Send a message to the waiting service worker, instructing it to activate.
          wb.messageSkipWaiting();
        } else {
          console.log(
            "User rejected to reload the web app, keep using old version. New version will be automatically load when user open the app next time."
          );
        }
      };

      wb.addEventListener("waiting", promptNewVersionAvailable);

      // never forget to call register as auto register is turned off in next.config.js
      wb.register();
    }
  }, []);

  return (
    <Flex className={styles.boxContainer}>
      <Link className={styles.box} href={{ pathname: "/about" }}>
        <Flex>
          <span>about</span>
        </Flex>
      </Link>

      <Link className={styles.box} href={{ pathname: "/projects" }}>
        <Flex>
          <span>projects</span>
        </Flex>
      </Link>

      <Link
        className={styles.box}
        href={{ pathname: "https://creme332.github.io/" }}
      >
        <Flex>
          <span>blog</span>
        </Flex>
      </Link>

      <Link className={styles.box} href={{ pathname: "/contact" }}>
        <Flex>
          <span>contact</span>
        </Flex>
      </Link>
    </Flex>
  );
}
