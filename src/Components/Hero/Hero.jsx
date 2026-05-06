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
          <div className={Style.heroImageArea}>
            {/* MAIN IMAGE */}
            <img
              src={mergedImages.main.src}
              className={Style.heroImageMain}
              alt="hero"
            />

            {/* CIRCLES (NO ROTATION) */}
            <img
              src={mergedImages.circleOne.src}
              className={Style.heroCircleOne}
              alt="circle"
            />

            <img
              src={mergedImages.circleTwo.src}
              className={Style.heroCircleTwo}
              alt="circle"
            />

            {/* ICONS (NO FLOATING) */}
            <img
              src={mergedImages.heartRate.src}
              className={Style.heroHeartRate}
              alt="heart"
            />

            <img
              src={mergedImages.calories.src}
              className={Style.heroCalories}
              alt="calories"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
