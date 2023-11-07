import styles from "../styles/About.module.css";
import { motion } from "framer-motion";

export default function aboutPage() {
  return (
    <motion.div
      initial={{ height: "50%", width: "50%" }}
      animate={{ height: "100%", width: "100%" }}
      transition={{ duration: 0.5 }}
      className={styles.about}
    >
      about
    </motion.div>
  );
}
