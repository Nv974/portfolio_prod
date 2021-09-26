import React, { useState } from "react";
import { NavLink } from "react-router-dom";
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
      window.scrollY > windowHeight * 0.75 &&
      window.scrollY < windowHeight * 1.62
    ) {
      setTitle("Présentation");
    } else if (
      window.scrollY > windowHeight * 1.62 &&
      window.scrollY < windowHeight * 2.5
    ) {
      setTitle("Compétences");
    } else if (
      window.scrollY > windowHeight * 2.5 &&
      window.scrollY < windowHeight * 3.3
    ) {
      setTitle("Projets");
    } else if (
      window.scrollY > windowHeight * 3.3 ) {
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
        <li>
          <NavLink
            exact
            to="/"
            onClick={() => {
              window.scrollTo({
                top: 0,
                left: 0,
                behavior: "smooth",
              });
            }}
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="/Presentation"
            onClick={() => {
              window.scrollTo({
                top: windowHeight * 0.89,
                left: 0,
                behavior: "smooth",
              });
            }}
          >
            Présentation
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="Competences"
            onClick={() => {
              window.scrollTo({
                top: windowHeight * 1.78,
                left: 0,
                behavior: "smooth",
              });
            }}
          >
            Compétences
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="Projet"
            onClick={() => {
              window.scrollTo({
                top: windowHeight * 2.67,
                left: 0,
                behavior: "smooth",
              });
            }}
          >
            Projets
          </NavLink>
        </li>
        <li>
          <NavLink
            exact
            to="Contact"
            onClick={() => {
              window.scrollTo({
                top: windowHeight * 3.6,
                left: 0,
                behavior: "smooth",
              });
            }}
          >
            Contact
          </NavLink>
        </li>
      </ul>
      {burgerToggle && (
        <Burger burgerToggle={burgerToggle} setBurgerToggle={setBurgerToggle} />
      )}
    </div>
  );
};

export default Nav;
