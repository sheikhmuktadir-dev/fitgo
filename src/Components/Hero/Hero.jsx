import { motion } from "framer-motion";
import Button from "../Button/Button";
import Style from "./hero.module.css";
import { heroData } from "../../Data/Data";

export default function Hero() {
  const {
    badgeActive,
    badgeInactive,
    title,
    description,
    buttonText,
    buttonUrl,
    images = {},
  } = heroData || {};

  const defaultImages = {
    main: { src: "/images/banner/hero-banner.png" },
    circleOne: { src: "/images/banner/hero-circle-one.png" },
    circleTwo: { src: "/images/banner/hero-circle-two.png" },
    heartRate: { src: "/images/banner/heart-rate.svg" },
    calories: { src: "/images/banner/calories.svg" },
  };

  const mergedImages = { ...defaultImages, ...images };

  return (
    <section className={Style.heroSection} id="home">
      <div className="container">
        <div className={Style.heroGridFlex}>
          {/* 🔥 TEXT AREA */}
          <motion.div
            className={Style.heroTextArea}
            initial="hidden"
            animate="show"
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.15 } },
            }}
          >
            <motion.div
              className={Style.heroTextTopBox}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
            >
              <div className={Style.heroTextTopBoxActive}>{badgeActive}</div>
              <div className={Style.heroTextTopBoxDisable}>{badgeInactive}</div>
            </motion.div>

            <motion.h1
              className={Style.heroTitle}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
            >
              {title}
            </motion.h1>

            <motion.p
              className={Style.heroPara}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
            >
              {description}
            </motion.p>

            <motion.div
              variants={{
                hidden: { opacity: 0, scale: 0.8 },
                show: { opacity: 1, scale: 1 },
              }}
            >
              <Button url={buttonUrl}>{buttonText}</Button>
            </motion.div>
          </motion.div>

          {/* 🔥 IMAGE AREA */}
          <motion.div
            className={Style.heroImageArea}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* MAIN IMAGE */}
            <motion.img
              src={mergedImages.main.src}
              className={Style.heroImageMain}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1 }}
            />

            {/* ROTATING CIRCLES (SMOOTH) */}
            <motion.img
              src={mergedImages.circleOne.src}
              className={Style.heroCircleOne}
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />

            <motion.img
              src={mergedImages.circleTwo.src}
              className={Style.heroCircleTwo}
              animate={{ rotate: -360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />

            {/* FLOATING ICONS */}
            <motion.img
              src={mergedImages.heartRate.src}
              className={Style.heroHeartRate}
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            <motion.img
              src={mergedImages.calories.src}
              className={Style.heroCalories}
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
