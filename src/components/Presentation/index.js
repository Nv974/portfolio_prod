import React from "react";



import "./presentation.scss";
import avatar from "../../assets/img/moi.png";
import cv from "../../assets/resume/CV-Nicolas_Vitry.pdf";

const Presentation = () => {

  

  return (
    <div className="presentation">
      <div className="presentation__top">
        <h2 className="presentation__top__title">A propos de moi</h2>
      </div>
      <div className="presentation__bottom">
        <div className="presentation__bottom__img">
          <img src={avatar} alt="moi" />
        </div>
        <div className="presentation__bottom__text">
          <div className="presentation__bottom__text__title">Qui je suis ?</div>
          <p>
            Ancien opérateur de machines à commande numérique dans le domaine de
            l'aéronautique et du bâtiment, j'ai décidé de me reconvertir dans le
            développement web.
            <br />
            Pour cela j'ai réalisé une formation de développeur web et web
            mobile durant laquelle j'ai appris à maîtriser différents langages
            de programmation pour la réalisation de sites web.
            <br />
            <br />
            Impliqué et rigoureux dans mon travail, je saurai mettre en œuvre
            toutes mes compétences et mes qualités dans les projets qui me
            seront confiés.
          </p>
          <div className="presentation__bottom__text__resume">
            <a href={cv} download>
              <button>Télécharger mon CV</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Presentation;
