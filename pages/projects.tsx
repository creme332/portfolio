import styles from "../styles/Projects.module.css";
import { motion } from "framer-motion";
import MyCloseButton from "../components/CloseButton";

export default function projectPage() {
  return (
    <motion.div
      initial={{ height: "50%", width: "50%", right: 0, top: 0 }}
      animate={{ height: "100%", width: "100%" }}
      transition={{ duration: 0.5 }}
      className={styles.project}
    >
      <MyCloseButton/>
    </motion.div>
  );
}
