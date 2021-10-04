import React from "react";
import close from "../../assets/img/icons/delete.png";
import linkedin from "../../assets/img/social/linkedin.png";
import github from "../../assets/img/social/github.png";

import "./burger.scss";
import { NavLink } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

const Burger = ({ burgerToggle, setBurgerToggle }) => {

  return (
    <div className="burger burger--close">
      <div
        onClick={() => {
          setBurgerToggle(!burgerToggle);
        }}
        className="burger__close"
      >
        <img src={close} alt="fermer" />
      </div>
      <ul className={"burger__link"}>
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
              setBurgerToggle(false);
            }}
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavHashLink
            exact
            to="#Presentation"
            onClick={() => {
              setBurgerToggle(false);
            }}
          >
            Présentation
          </NavHashLink>
        </li>
        <li>
          <NavHashLink
            exact
            to="#Competences"
            onClick={() => {
              window.scrollTo(0, 50000);
              setBurgerToggle(false);
            }}
          >
            Compétences
          </NavHashLink>
        </li>
        <li>
          <NavHashLink
            exact
            to="#Projets"
            onClick={() => {
              setBurgerToggle(false);
            }}
          >
            Projets
          </NavHashLink>
        </li>
        <li>
          <NavHashLink
            exact
            to="#Contact"
            onClick={() => {
              setBurgerToggle(false);
            }}
          >
            Contact
          </NavHashLink>
        </li>
      </ul>
      <div className="burger__social">
        <NavLink exact to="https://github.com/Nv974">
          <img src={github} alt="github" />
        </NavLink>
        <NavLink
          exact
          to="https://www.linkedin.com/in/nicolas-vitry-0510711a1/"
        >
          <img src={linkedin} alt="linkedin" />
        </NavLink>
      </div>
    </div>
  );
};

export default Burger;
