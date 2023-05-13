import { useState } from "react";
import "./styles.css";
import lightLogo from "./logo_light.webp";
import Link from "../Link";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <header>
      <div className="head-container row">
        <img
          src={lightLogo}
          alt="EvoUp Logo"
        />
        <nav className={[
          "head-nav",
          openMenu ? "open" : ""
        ].join(" ")}
        >
          <a
            href="/"
            className="head-link"
          >
            Home
          </a>
          <a
            href="/"
            className="head-link"
          >
            Services
          </a>
          <a
            href="/"
            className="head-link"
          >
            Works
          </a>
          <a
            href="/"
            className="head-link"
          >
            About
          </a>
        </nav>
        <Link link="/" text="Fale Conosco" />
        <button
          className={[
            "head-button-menu",
            openMenu ? "open" : ""
          ].join(" ")}
          type="button"
          onClick={() => setOpenMenu(prev => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
};

export default Header;