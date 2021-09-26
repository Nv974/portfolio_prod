import React from "react";
import close from "../../assets/img/icons/delete.png";
import linkedin from "../../assets/img/social/linkedin.png";
import github from "../../assets/img/social/github.png";

import "./burger.scss";

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
          <a href="http://localhost:3000/">Accueil</a>
        </li>
        <li>
          <a href="http://localhost:3000/">Présentation</a>
        </li>
        <li>
          <a href="http://localhost:3000/">Compétences</a>
        </li>
        <li>
          <a href="http://localhost:3000/"> Projets </a>
        </li>
        <li>
          <a href="http://localhost:3000/"> Contact </a>
        </li>
      </ul>
      <div className="burger__social">
        <a href="https://github.com/Nv974">
          <img src={github} alt="github" />
        </a>
        <a href="https://www.linkedin.com/in/nicolas-vitry-0510711a1/">
          <img src={linkedin} alt="linkedin" />
        </a>
      </div>
    </div>
  );
};

export default Burger;
