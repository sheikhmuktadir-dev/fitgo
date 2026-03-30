import { Link } from "react-router-dom";
import Style from "./navbar.module.css";
import Button from "../Button/Button";
import { useEffect, useState } from "react";
import { RiMenu3Fill } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";
import { navLinks } from "../../Data/Data";

export default function Navbar() {
  const [navScroll, setNavScroll] = useState(false);
  const [toggle, setToggle] = useState(false);

  useEffect(() => {
    const navScrollHandler = () => {
      setNavScroll(window.scrollY > 100);
    };

    window.addEventListener("scroll", navScrollHandler);
    return () => window.removeEventListener("scroll", navScrollHandler);
  }, []);

  useEffect(() => {
    if (toggle) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [toggle]);

  return (
    <nav
      className={`${Style.navbarMain} ${navScroll ? Style.navLogoMainActive : ""}`}
    >
      <div className="container">
        <div className={Style.navbarInner}>
          <div className={Style.navLogoArea}>
            <Link to="/" className={Style.navLogoMain}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                width="48px"
                height="48px"
                fill="#fd3d0d"
              >
                <title>Barbell</title>
                <path d="M496 176h-58v-64h-76v122H150V112H74v64H16v160h58v64h76V278h212v122h76v-64h58V176z" />
              </svg>
              <span>Fitgo</span>
            </Link>

            <button
              onClick={() => setToggle((prev) => !prev)}
              className={Style.navbarToggle}
            >
              <RiMenu3Fill />
            </button>
          </div>
          <div
            className={`${Style.navContent}  ${toggle ? Style.navbarShow : ""} `}
          >
            <button
              className={Style.navbarClose}
              onClick={() => setToggle(false)}
            >
              <IoMdClose />
            </button>
            <ul className={Style.navList}>
              {navLinks?.map((item, i) => {
                return (
                  <li className={Style.navItem} key={item.name || i}>
                    <a
                      href={item.url}
                      className={Style.navLink}
                      onClick={() => setToggle(false)}
                    >
                      {item.name}
                    </a>
                  </li>
                );
              })}

              <li className={Style.navItem} onClick={() => setToggle(false)}>
                <Button url="/" whiteBtn="buttonWhite" navActive={navScroll}>
                  Join Now
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}
