import React, { useState } from "react";
import Burger from "./burger";

import "./nav.scss";

const Nav = () => {
  const [navActive, setNavActive] = useState(false);
  const [title, setTitle] = useState("Accueil");
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [burgerToggle, setBurgerToggle] = useState(false);



  window.onresize = () => {
    setWindowHeight(+window.innerHeight);
    //console.log("windowHeight " + windowHeight);
  };

  //console.log("Scroll: " + window.scrollY);

  const onScrollChange = () => {
    //console.log(window.scrollY);
    window.scrollY > 100 ? setNavActive(true) : setNavActive(false);
    if (
      window.scrollY > windowHeight * 0.8 &&
      window.scrollY < windowHeight * 1.9
    ) {
      setTitle("Présentation");
    } else if (
      window.scrollY > windowHeight * 1.9 &&
      window.scrollY < windowHeight * 2.9
    ) {
      setTitle("Compétences");
    } else if (
      window.scrollY > windowHeight * 2.9 &&
      window.scrollY < windowHeight * 3.9
    ) {
      setTitle("Projets");
    } else if (
      window.scrollY > windowHeight * 3.9 ) {
      setTitle("Contact");
    } else {setTitle("Acceuil")}   
  };

  window.addEventListener("scroll", onScrollChange);

  return (
    <div className={navActive ? "nav--active" : "nav"}>
      <div className={navActive ? "nav__title--active" : "nav__title"}>
        Portfolio://<span>{title}</span>
      </div>
      <div
        className="nav__burger"
        onClick={() => {
          setBurgerToggle(!burgerToggle);
        }}
      >
        III
      </div>
      <ul className={navActive ? "nav__link--active" : "nav__link"}>
        <li
            href="#Home"
            onClick={() => {
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
          >
            Accueil
        </li>
        <li
            href="#Presentation"
            onClick={() => {
              window.scrollTo({
                top: windowHeight ,
                left: 0,
                behavior: "smooth",
              });
            }}
          >
            Présentation
        </li>
        <li
            href="#Competences"
            onClick={() => {
              window.scrollTo({
                top: windowHeight * 2,
                left: 0,
                behavior: "smooth",
              });
            }}
          >
            Compétences
        </li>
        <li
            onClick={() => {
              window.scrollTo({
                top: windowHeight * 3,
                left: 0,
                behavior: "smooth",
              });
            }}
          >
            Projets
        </li>
        <li
            onClick={() => {
              window.scrollTo({
                top: windowHeight * 4,
                left: 0,
                behavior: "smooth",
              });
            }}
          >
            Contact
        </li>
      </ul>
      {burgerToggle && (
        <Burger burgerToggle={burgerToggle} setBurgerToggle={setBurgerToggle} windowHeight={windowHeight} />
      )}
    </div>
  );
};

export default Nav;
