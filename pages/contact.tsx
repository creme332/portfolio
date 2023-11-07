import styles from "../styles/Contact.module.css";
import { motion } from "framer-motion";

export default function contactPage() {
  return (
    <motion.div
      initial={{ height: "50%", width: "50%", bottom: 0, right: 0 }}
      animate={{ height: "100%", width: "100%" }}
      transition={{ duration: 0.5 }}
      className={styles.contact}
    >
      contact
    </motion.div>
  );
}
