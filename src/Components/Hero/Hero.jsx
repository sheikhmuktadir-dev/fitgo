import Button from "../Button/Button";
import Style from "./hero.module.css";
import { heroData } from "../../Data/Data";

export default function Hero() {
  const {
    badgeActive = "The Best",
    badgeInactive = "Fitness Club",
    title = "Work Hard To Get Better Life",
    description = "Duis mollis felis quis libero dictum vehicula. Duis dictum lorem mi, a faucibus nisi eleifend eu.",
    buttonText = "Get Started",
    buttonUrl = "/",
    images = {},
  } = heroData || {};

  const defaultImages = {
    main: {
      src: "/images/banner/hero-banner.png",
      alt: "Fitness hero banner",
    },
    circleOne: {
      src: "/images/banner/hero-circle-one.png",
      alt: "Decorative circle",
    },
    circleTwo: {
      src: "/images/banner/hero-circle-two.png",
      alt: "Decorative circle",
    },
    heartRate: {
      src: "/images/banner/heart-rate.svg",
      alt: "Heart rate icon",
    },
    calories: {
      src: "/images/banner/calories.svg",
      alt: "Calories icon",
    },
  };

  const mergedImages = { ...defaultImages, ...images };

  return (
    <section className={Style.heroSection} id="home">
      <div className="container">
        <div className={Style.heroGridFlex}>
          <div className={Style.heroTextArea}>
            <div className={Style.heroTextTopBox}>
              <div className={Style.heroTextTopBoxActive}>{badgeActive}</div>
              <div className={Style.heroTextTopBoxDisable}>{badgeInactive}</div>
            </div>
            <h1 className={Style.heroTitle}>{title}</h1>
            <p className={Style.heroPara}>{description}</p>
            <Button url={buttonUrl}>{buttonText}</Button>
          </div>
          <div className={Style.heroImageArea}>
            <img
              src={mergedImages.main.src}
              alt={mergedImages.main.alt}
              className={Style.heroImageMain}
            />

            <img
              src={mergedImages.circleOne.src}
              alt={mergedImages.circleOne.alt}
              className={Style.heroCircleOne}
            />

            <img
              src={mergedImages.circleTwo.src}
              alt={mergedImages.circleTwo.alt}
              className={Style.heroCircleTwo}
            />

            <img
              src={mergedImages.heartRate.src}
              alt={mergedImages.heartRate.alt}
              className={Style.heroHeartRate}
            />

            <img
              src={mergedImages.calories.src}
              alt={mergedImages.calories.alt}
              className={Style.heroCalories}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
