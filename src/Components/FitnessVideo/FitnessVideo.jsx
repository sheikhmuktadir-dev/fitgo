import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Style from "./fitnessvideo.module.css";

export default function FitnessVideo() {
  return (
    <section className={Style.videoSection}>
      <div className="container">
        <motion.div
          className={Style.videoBox}
          initial={{ opacity: 0, scale: 1.1 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className={Style.videoBoxInner}>
            <motion.h4
              className={Style.videoBoxTitle}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Explore Fitness Life
            </motion.h4>

            <motion.div
              className={Style.videoPlayButton}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span></span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Link to="/" className={Style.videoBoxLink}>
                Watch More
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
