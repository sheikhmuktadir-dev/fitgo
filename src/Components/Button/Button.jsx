import { Link } from "react-router-dom";
import Style from "./button.module.css";

export default function Button({ children, url, whiteBtn, navActive }) {
  const btnBg = Style[whiteBtn] || Style.buttonOrange;
  return (
    <Link
      to={url}
      className={`${Style.buttonMain} ${btnBg} ${
        navActive ? Style.buttonActive : ""
      }`}
    >
      {children}
    </Link>
  );
}
