import { Link } from "react-router-dom";
import Style from "./fitnessvideo.module.css";

export default function FitnessVideo() {
  return (
    <section className={Style.videoSection}>
      <div className="container">
        <div className={Style.videoBox}>
          <div className={Style.videoBoxInner}>
            <h4 className={Style.videoBoxTitle}>Explore Fitness Life</h4>
            <div id={Style.playVideo} class={Style.videoPlayButton}>
              <span></span>
            </div>
            <Link to="/" className={Style.videoBoxLink}>
              Watch More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
