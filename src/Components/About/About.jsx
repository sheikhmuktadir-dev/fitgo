import { motion } from "framer-motion";
import Style from "./about.module.css";
import Button from "../Button/Button";
import { aboutData } from "../../Data/Data";

export default function About() {
  const {
    subtitle = "About Us",
    title = "Welcome To Our Fitness Gym",
    paragraphs = [],
    button = { text: "Explore More", url: "/" },
    images = {},
    coach = { name: "Coach Name", role: "Coach Role" },
  } = aboutData || {};

  const defaultImages = {
    main: { src: "/images/about/about-banner.png", alt: "Gym banner" },
    circleOne: { src: "/images/about/about-circle-one.png" },
    circleTwo: { src: "/images/about/about-circle-two.png" },
    fitnessText: { src: "/images/about/about-fitness.png" },
    coach: { src: "/images/about/about-coach.jpg" },
  };

  const mergedImages = { ...defaultImages, ...images };

  return (
    <section className={Style.aboutSection} id="about">
      <div className="container">
        <div className={Style.aboutGrid}>
          {/* 🔥 IMAGE AREA */}
          <motion.div
            className={Style.aboutImageArea}
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            {/* MAIN IMAGE */}
            <motion.img
              src={mergedImages.main.src}
              alt=""
              className={Style.aboutMainImage}
              initial={{ scale: 1.2 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1 }}
            />

            {/* FLOATING CIRCLES */}
            <motion.img
              src={mergedImages.circleOne.src}
              className={Style.aboutCircleOne}
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            />

            <motion.img
              src={mergedImages.circleTwo.src}
              className={Style.aboutCircleTwo}
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            />

            {/* FITNESS TEXT */}
            <motion.img
              src={mergedImages.fitnessText.src}
              className={Style.aboutFitnessText}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            />
          </motion.div>

          {/* 🔥 TEXT AREA */}
          <motion.div
            className={Style.aboutTextArea}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {/* SUBTITLE */}
            <motion.div
              className="sectionSubtitle"
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
            >
              {subtitle}
            </motion.div>

            {/* TITLE */}
            <motion.h2
              className={Style.aboutTitle}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
            >
              {title}
            </motion.h2>

            {/* PARAGRAPHS */}
            <div className={Style.aboutPara}>
              {paragraphs.map((para, i) => (
                <motion.p
                  key={i}
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    show: { opacity: 1, y: 0 },
                  }}
                >
                  {para}
                </motion.p>
              ))}
            </div>

            {/* BOTTOM */}
            <motion.div
              className={Style.aboutTextBottomFlex}
              variants={{
                hidden: { opacity: 0, y: 30 },
                show: { opacity: 1, y: 0 },
              }}
            >
              {/* COACH */}
              <motion.div
                className={Style.aboutCoachFlex}
                whileHover={{ scale: 1.05 }}
              >
                <img src={mergedImages.coach.src} alt="" />
                <div className={Style.aboutCoachText}>
                  <h5>{coach.name}</h5>
                  <p>{coach.role}</p>
                </div>
              </motion.div>

              {/* BUTTON */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                <Button url={button.url}>{button.text}</Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
