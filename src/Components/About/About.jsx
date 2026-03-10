import Style from "./about.module.css";
import Button from "../Button/Button";
import { aboutData } from "../../Data/Data";

export default function About() {
  const {
    subtitle = "About Us",
    title = "Welcome To Our Fitness Gym",
    paragraphs = [
      "Nam ut hendrerit leo. Aenean vel ipsum nunc. Curabitur in tellus vitae nisi aliquet dapibus non et erat. Pellentesque porta sapien non accumsan dignissim curabitur sagittis nulla sit amet dolor feugiat.",
    ],
    button = { text: "Explore More", url: "/" },
    images = {},
    coach = { name: "Coach Name", role: "Coach Role" },
  } = aboutData || {};

  const defaultImages = {
    main: { src: "/images/about/about-banner.png", alt: "Gym banner" },
    circleOne: {
      src: "/images/about/about-circle-one.png",
      alt: "Decorative circle 1",
    },
    circleTwo: {
      src: "/images/about/about-circle-two.png",
      alt: "Decorative circle 2",
    },
    fitnessText: {
      src: "/images/about/about-fitness.png",
      alt: "Fitness text banner",
    },
    coach: { src: "/images/about/about-coach.jpg", alt: "Coach image" },
  };

  const mergedImages = { ...defaultImages, ...images };

  return (
    <section className={Style.aboutSection} id="about">
      <div className="container">
        <div className={Style.aboutGrid}>
          <div className={Style.aboutImageArea}>
            <img
              src={mergedImages.main.src}
              alt={mergedImages.main.alt}
              className={Style.aboutMainImage}
            />
            <img
              src={mergedImages.circleOne.src}
              alt={mergedImages.circleOne.alt}
              className={Style.aboutCircleOne}
            />
            <img
              src={mergedImages.circleTwo.src}
              alt={mergedImages.circleTwo.alt}
              className={Style.aboutCircleTwo}
            />
            <img
              src={mergedImages.fitnessText.src}
              alt={mergedImages.fitnessText.alt}
              className={Style.aboutFitnessText}
            />
          </div>
          <div className={Style.aboutTextArea}>
            <div className="sectionSubtitle">{subtitle}</div>
            <h2 className={Style.aboutTitle}>{title}</h2>
            <div className={Style.aboutPara}>
              {paragraphs.map((para, i) => {
                return <p key={para || i}>{para}</p>;
              })}
            </div>
            <div className={Style.aboutTextBottomFlex}>
              <div className={Style.aboutCoachFlex}>
                <img
                  src={mergedImages.coach.src}
                  alt={mergedImages.coach.alt}
                />
                <div className={Style.aboutCoachText}>
                  <h5>{coach.name}</h5>
                  <p>{coach.role}</p>
                </div>
              </div>
              <Button url={button.url}>{button.text}</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
