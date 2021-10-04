import React, { useEffect } from "react";
import Aos from "aos";

import "./skills.scss";
import html from "../../assets/img/technos/html.png";
import css from "../../assets/img/technos/css.png";
import js from "../../assets/img/technos/js.png";
import sass from "../../assets/img/technos/sass.png";
import react from "../../assets/img/technos/react.png";
import redux from "../../assets/img/technos/redux.png";
import laravel from "../../assets/img/technos/laravel.png";
import php from "../../assets/img/technos/php.png";
import mysql from "../../assets/img/technos/mysql.png";
import windows from "../../assets/img/technos/windows.png";
import ubuntu from "../../assets/img/technos/ubuntu.png";
import vsc from "../../assets/img/technos/vsc.png";
import git from "../../assets/img/technos/git.png";

const Skills = () => {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="skills" id="Competences">
      <h2>Les Technologies</h2>
      <div className="skills__technos">
        <div data-aos="fade-right" className="skills__technos__front">
          <h3>Front-end</h3>
          <div className="skills__technos__front__img">
            <div className="skills__technos__front__img__html">
              <img src={html} alt="html" />
              <div>Html</div>
            </div>
            <div className="skills__technos__front__img__css">
              <img src={css} alt="html" />
              <div>CSS</div>
            </div>
            <div className="skills__technos__front__img__js">
              <img src={js} alt="html" />
              <div>Javascript</div>
            </div>
            <div className="skills__technos__front__img__react">
              <img src={react} alt="html" />
              <div>React.js</div>
            </div>
            <div className="skills__technos__front__img__redux">
              <img src={redux} alt="html" />
              <div>Redux</div>
            </div>
            <div className="skills__technos__front__img__sass">
              <img src={sass} alt="html" />
              <div>Sass</div>
            </div>
          </div>
        </div>
        <div data-aos="fade-left" className="skills__technos__back">
          <h3>Back-end</h3>
          <div className="skills__technos__back__img">
            <div className="skills__technos__back__img__php">
              <img src={php} alt="php" />
              <div>PHP</div>
            </div>
            <div className="skills__technos__back__img__laravel">
              <img src={laravel} alt="laravel" />
              <div>Laravel</div>
            </div>
            <div className="skills__technos__back__img__mysql">
              <img src={mysql} alt="mysql" />
              <div>MySql</div>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className="skills__environnement">
        <h3>Environnement de travail</h3>
        <div className="skills__environnement__technos">
          <div className="skills__environnement__technos__windows">
            <img src={windows} alt="windows 10" />
            <div>Windows</div>
          </div>
          <div className="skills__environnement__technos__ubuntu">
            <img src={ubuntu} alt="linux ubuntu" />
            <div>Ubuntu</div>
          </div>
          <div className="skills__environnement__technos__git">
            <img src={git} alt="git" />
            <div>Git</div>
          </div>
          <div className="skills__environnement__technos__vscode">
            <img src={vsc} alt="visual studio code" />
            <div>VSCode</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
