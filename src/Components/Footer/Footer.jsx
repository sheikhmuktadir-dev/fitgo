import Style from "./footer.module.css";
import { Link } from "react-router-dom";
import clock from "/images/other/footer-clock.png";
import {
  footerLinks,
  contactInfo,
  socialLinks,
  openingHours,
} from "../../Data/Data";
import { FaChevronRight } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className={Style.footerMain} id="contact">
      <div className="container">
        <div className={Style.footerTopGrid}>
          <div className={Style.footerLogoArea}>
            <Link to="/" className={Style.footerLogoMain}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="50px"
                height="50px"
                fill="#fd3d0d"
              >
                <title>Barbell</title>
                <path d="M496 176h-58v-64h-76v122H150V112H74v64H16v160h58v64h76V278h212v122h76v-64h58V176z" />
              </svg>
              <span>Fitgo</span>
            </Link>
            <p className={Style.footerLogoPara}>
              Etiam suscipit fringilla ullamcorper sed malesuada urna nec odio.
            </p>
            <div className={Style.footerTime}>
              <img src={clock} alt="clock" className={Style.footerClockImage} />
              <div className={Style.footerTimeContent}>
                {openingHours.map((item, index) => (
                  <div key={index} className={Style.footerTimeMain}>
                    <h6 className={Style.footerTimeWeek}>{item.day}</h6>
                    <p className={Style.footerLogoPara}>{item.time}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={Style.footerLinkArea}>
            <h5 className={Style.footerLinkHeading}>Our Links</h5>
            <ul className={Style.footerList}>
              {footerLinks?.map((item, i) => {
                return (
                  <li className={Style.footerItem} key={item.name || i}>
                    <a href={item.link} className={Style.footerLink}>
                      {item.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={Style.footerLinkArea}>
            <h5 className={Style.footerLinkHeading}>Contact Us</h5>
            <ul className={Style.footerList}>
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index} className={Style.footerItem}>
                    <div className={Style.footerLinkFLex}>
                      <div className={Style.footerLinkBox}>
                        <Icon />
                      </div>

                      {item.link ? (
                        <a href={item.link} className={Style.footerLink}>
                          {item.text}
                        </a>
                      ) : (
                        <p className={Style.footerLogoPara}>{item.text}</p>
                      )}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>

          <div className={Style.footerSocialArea}>
            <h5 className={Style.footerLinkHeading}>Our Newsletter</h5>
            <div className={Style.footerInput}>
              <input
                type="text"
                required
                className={Style.footerInputBox}
                placeholder="Email Address"
              />
              <button type="submit" className={Style.footerSubmitBtn}>
                <FaChevronRight />
              </button>
            </div>
            <ul className={Style.footerSocialList}>
              {socialLinks.map((item, index) => {
                const Icon = item.icon;
                return (
                  <li key={index} className={Style.footerSocialItem}>
                    <a
                      href={item.link}
                      className={Style.footerSocialLink}
                      target="_blank"
                    >
                      <Icon />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      <div className={Style.footerBottom}>
        <div className="container">
          <div className={Style.footerBottomFlex}>
            <p className={Style.footerBottomPara}>
              © 2026 Fitgo. All Rights Reserved By
              <span>Sheikh Muktadir.</span>
            </p>
            <ul className={Style.footerBottomList}>
              <li className={Style.footerBottomItem}>
                <Link to="/" className={Style.footerBottomLink}>
                  Privacy Policy
                </Link>
              </li>
              <li className={Style.footerBottomItem}>
                <Link to="/" className={Style.footerBottomLink}>
                  Terms & Condition
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
