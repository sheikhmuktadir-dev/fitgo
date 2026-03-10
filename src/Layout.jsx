import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import { FiChevronsUp } from "react-icons/fi";
import { useEffect, useState } from "react";

export default function Layout() {
  const [backTop, setBackTop] = useState(false);

  useEffect(() => {
    const topHandler = () => {
      setBackTop(window.scrollY > 1000);
    };

    window.addEventListener("scroll", topHandler);
    return () => window.removeEventListener("scroll", topHandler);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
        <div
          className={`backToTop ${backTop ? "backtopShow" : ""}`}
          onClick={scrollToTop}
        >
          <FiChevronsUp />
        </div>
      </main>
      <Footer />
    </>
  );
}
