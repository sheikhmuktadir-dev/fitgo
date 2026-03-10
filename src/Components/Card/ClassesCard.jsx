import { Link } from "react-router-dom";
import Style from "./card.module.css";
import { useState, useEffect } from "react";

export default function ClassedCard({
  title,
  image,
  icon,
  para,
  targetProgress,
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= targetProgress) {
          clearInterval(interval);
          return targetProgress;
        }
        return prev + 1;
      });
    }, 20);
    return () => clearInterval(interval);
  }, [targetProgress]);

  return (
    <div className={Style.classesCard}>
      <div className={Style.classesCardImageBox}>
        <img
          src={image}
          alt={`${title} image`}
          className={Style.classesCardImage}
        />
      </div>
      <div className={Style.classesCardText}>
        <div className={Style.classesCardTextTopFlex}>
          <img
            src={icon}
            alt={`${title} icon`}
            className={Style.classesCardIcon}
          />
          <Link to="/" className={Style.classesCardTitle}>
            {title}
          </Link>
        </div>
        <p className={Style.classesCardPara}>{para}</p>
        <div className={Style.classesCardScroll}>
          <div className={Style.classesCardScrollTopFlex}>
            <h6>Class Full</h6>
            <h6>{progress}%</h6>
          </div>
          <div className={Style.classesprogressBar}>
            <div
              className={Style.classesprogressFill}
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
