import { Link } from "react-router-dom";
import Style from "./card.module.css";
import { useState, useEffect } from "react";

export default function ClassesCard({
  title,
  image,
  icon,
  para,
  targetProgress,
}) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let start = 0;

    const interval = setInterval(() => {
      start += 1;

      if (start >= targetProgress) {
        start = targetProgress;
        clearInterval(interval);
      }

      setProgress(start);
    }, 20);

    return () => clearInterval(interval);
  }, [targetProgress]);

  return (
    <div className={Style.classesCard}>
      {/* IMAGE */}
      <div className={Style.classesCardImageBox}>
        <img src={image} alt={title} className={Style.classesCardImage} />
      </div>

      {/* TEXT */}
      <div className={Style.classesCardText}>
        <div className={Style.classesCardTextTopFlex}>
          <img src={icon} alt={title} className={Style.classesCardIcon} />
          <Link to="/" className={Style.classesCardTitle}>
            {title}
          </Link>
        </div>

        <p className={Style.classesCardPara}>{para}</p>

        {/* PROGRESS */}
        <div className={Style.classesCardScroll}>
          <div className={Style.classesCardScrollTopFlex}>
            <h6>Class Full</h6>
            <h6>{progress}%</h6>
          </div>

          <div className={Style.classesprogressBar}>
            <div
              className={Style.classesprogressFill}
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
