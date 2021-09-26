import React, { useEffect, useState } from "react";
import "./home.scss";
import Aos from "aos";
import "aos/dist/aos.css";

import avatar from "../../assets/img/avatar.png";
import mail from "../../assets/img/social/gmail.png";
import phone from "../../assets/img/social/telephone.png";
import linkedin from "../../assets/img/social/linkedin.png";
import github from "../../assets/img/social/github.png";
import middle from "../../assets/img/div.png"

const Home = () => {
  const [socialInfo, setSocialInfo] = useState("");
  const [href, setHref] = useState("");

  const showSocialInfos = (event) => {
    const value = event.target.alt
    const element = document.querySelector(".home__right__infos");
    element.classList.toggle("home__right__infos--show");
     const link = element.querySelector("a");
     link.textContent = "";
    setSocialInfo(value)
  }

  const showSocialLink = (event) => {
    const value = event.target.alt;
    const element = document.querySelector(".home__right__infos");
    element.classList.toggle("home__right__infos--show");
    const link = element.querySelector('a');
    link.textContent = "Voir ma page " + value
    setSocialInfo("");

    if (value === "Linkedin") {
      setHref("https://www.linkedin.com/in/nicolas-vitry-0510711a1/");
    } else if (value === "GitHub") {
      setHref("https://github.com/Nv974");
    }
  };

  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const scrollDown = () => {
    window.scrollTo({ top: document.body.scrollHeight, left: 0, behavior: "smooth" });
  }


  return (
    <div className="home">
      <div className="home__left" data-aos="fade-left">
        <span className="home__left__name">Nicolas Vitry</span>
        <span className="home__left__job">Développeur Web</span>
        <div className="home__left__button">
          <button onClick={scrollDown}> Contactez-moi </button>
        </div>
      </div>
      <div className="home__center" data-aos="fade-down">
        <img src={middle} alt="ordinateur + html" />
      </div>
      <div className="home__right" data-aos="fade-right">
        <img
          src={avatar}
          alt="moi en cartoon"
          className="home__right__avatar"
        />
        <div className="home__right__social">
          <img
            src={mail}
            alt="nicolasvitry.web@gmail.com"
            className="home__right__social__logo--light"
            onMouseOver={showSocialInfos}
          />
          <img
            src={phone}
            alt="06 92 08 88 09"
            className="home__right__social__logo--dark"
            onMouseOver={showSocialInfos}
          />
          <img
            src={linkedin}
            alt="Linkedin"
            className="home__right__social__logo--light"
            onMouseOver={showSocialLink}
          />
          <img
            src={github}
            alt="GitHub"
            className="home__right__social__logo--dark"
            onMouseOver={showSocialLink}
          />
        </div>
        <div className="home__right__infos">
          {socialInfo}{" "}
          <a href={href} rel="noreferrer" target="_blank">  </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
