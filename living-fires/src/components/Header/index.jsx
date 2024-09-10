import React, { useState, useEffect } from "react";
import "./header.css";
import logo from "../../assets/homePage/rightSideLogo.svg";
import searchIcon from "../../assets/homePage/searchIcon.svg";
import menu from "../../assets/homePage/burgerMenuIcon.svg";
const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  let headerClasses = ["header"];
  if (scrolled) {
    headerClasses.push("scrolled");
  }

  return (
    <header className={headerClasses.join(" ")}>
      <img src={logo} alt="Logo" className="custom-header-width" />
      <div className="custom-header-right-side-icons">
        <img
          src={searchIcon}
          alt="searchIcon"
          className="custom-header-width"
        />
        <img src={menu} alt="searchIcon" className="custom-header-width" />
      </div>
    </header>
  );
};

export default Header;
