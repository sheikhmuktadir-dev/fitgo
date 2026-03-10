import { Link } from "react-router-dom";
import Style from "./card.module.css";

export default function BlogCard({ image, date, title, description }) {
  return (
    <div className={Style.blogCard}>
      <div className={Style.blogCardImageBox}>
        <img
          src={image}
          alt={`${title} image`}
          className={Style.blogCardImage}
        />
        <div className={Style.blogTime}>{date}</div>
      </div>

      <div className={Style.blogCardText}>
        <h5>{title}</h5>
        <p className={Style.blogCardPara}>{description}</p>

        <Link to="/" className={Style.blogBtn}>
          Read More
        </Link>
      </div>
    </div>
  );
}
