import React from "react";

import "./projects.scss";
import projectsList from "./projectsList";
import rightChevron from "../../assets/img/icons/chevron-droit.png";
import leftChevron from "../../assets/img/icons/chevron-gauche.png";

import { useState } from "react";

const Projects = () => {
  const [projectToShow, setProjectToShow] = useState(0);

  const nextProject = () => {
    projectToShow < projectsList.length - 1
      ? setProjectToShow(projectToShow + 1)
      : setProjectToShow(projectsList.length - 1);
  };

  const previousProject = () => {
    projectToShow > 0
      ? setProjectToShow(projectToShow - 1)
      : setProjectToShow(0);
  };

  document.addEventListener("keyup", e => {
    if (e.key === "ArrowRight" || e.key === "Right") {
      nextProject();
    } else if (e.key === "ArrowLeft" || e.key === "Left") {
      previousProject();
    }
  });

  return (
    <div className="projects">
      <h2>Les projets</h2>
      <div className="projects__mobile-chevron">
        <img src={leftChevron} alt="back" onClick={previousProject} />
        <img src={rightChevron} alt="forward" onClick={nextProject} />
      </div>

      <div className="projects__project">
        <div className="projects__project__carousel">
          <img
            src={leftChevron}
            alt="chevron-gauche"
            className="projects__project__carousel__chevron"
            onClick={previousProject}
          />
          <img
            src={projectsList[projectToShow].src}
            alt={projectsList[projectToShow].alt}
            className="projects__project__carousel__img"
          />
          <img
            src={rightChevron}
            alt="chevron-droit"
            className="projects__project__carousel__chevron"
            onClick={nextProject}
          />
        </div>
        <div className="projects__project__description">
          <h3>{projectsList[projectToShow].title}</h3>
          <h4>{projectsList[projectToShow].sub}</h4>
          <p>{projectsList[projectToShow].description}</p>
          <a
            className="projects__project__description__url"
            href={projectsList[projectToShow].extraUrl}
          >
            {projectsList[projectToShow].urlDescription}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
