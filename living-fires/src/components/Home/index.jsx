import React, { useState, useEffect } from "react";
import homePageMainImg from "../../assets/homePage/homePageMainImg.png";
import "./home.css";
import Header from "../Header";

const Home = () => {
  const [hover, setHover] = useState(false);
  const [showPanels, setShowPanels] = useState(false);
  const [animatePanels, setAnimatePanels] = useState(false);
  const [zoomImage, setZoomImage] = useState(false);

  useEffect(() => {
    if (hover) {
      // Step 1: Show panels after base fades out
      setTimeout(() => {
        setShowPanels(true);
      }, 1000);

      // Step 2: Slide the panels after they appear
      setTimeout(() => {
        setAnimatePanels(true);
      }, 2000);

      // Step 3: Zoom the image after panels slide out
      setTimeout(() => {
        setZoomImage(true);
      }, 2500);
    } else {
      // Reset everything when not hovering
      setShowPanels(false);
      setAnimatePanels(false);
      setZoomImage(false);
    }
  }, [hover]);
  {
    /* <section className="hero">
        <div className="hero-content">
          <h1>STUNNING FIREPLACES FOR ANY HOME</h1>
          <p>
            At Living Fire, we believe our work is complete only when our
            clients are enjoying the warmth of their new fireplace with a glass
            of wine in hand. At Living Fire, we believe our work is complete
            only when our clients are enjoying the warmth of their new fireplace
            with a glass of wine in hand. At Living Fire, we believe our work is
            complete only when our clients are enjoying the warmth of.
          </p>
        </div>
      </section> */
  }
  return (
    <div
      className="home-page"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(true)}
    >
      {/* Base Component - this will fade out */}
      <div className={`base-container ${hover ? "hidden" : ""}`}>
        <section className="hero">
          <div className="hero-content">
            <h1>STUNNING FIREPLACES FOR ANY HOME</h1>
            <p>
              At Living Fire, we believe our work is complete only when our
              clients are enjoying the warmth of their new fireplace with a
              glass of wine in hand. At Living Fire, we believe our work is
              complete only when our clients are enjoying the warmth of their
              new fireplace with a glass of wine in hand. At Living Fire, we
              believe our work is complete only when our clients are enjoying
              the warmth of.
            </p>
          </div>
        </section>
      </div>

      {/* White panels that will slide out */}
      <div
        className={`panel-left  ${showPanels ? "show-panelsLeft" : ""} ${
          showPanels ? "animateLeft" : ""
        }`}
      ></div>
      <div
        className={`panel-right ${showPanels ? "show-panelsRight" : ""} ${
          showPanels ? "animateRight" : ""
        }`}
      ></div>

      {/* Overlay Image - fades in */}
      {/* <div className={`overlay-container ${hover ? "animate" : ""}`}>
        <img src={homePageMainImg} alt="Overlay" className="overlay-image" />
      </div> */}
      <div className={`overlay-container ${zoomImage ? "show-panels" : ""}`}>
        <img
          src={homePageMainImg}
          alt="Overlay"
          className={`overlay-image ${zoomImage ? "zoom" : ""}`}
        />
      </div>
    </div>
  );
};

export default Home;
