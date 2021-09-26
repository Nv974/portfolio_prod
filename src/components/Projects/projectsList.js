import harmonize from "../../assets/img/maquette-harmonize.png";
import bouboule from "../../assets/img/maquette-bouboule.png";
import todo from "../../assets/img/todolist.png"


const projectsList = [
  {
    title: "Harmonize",
    sub: "Site de composition musicale",
    src: harmonize,
    alt: "maquette site internet harmonize",
    description:
      "Harmonize permet de mettre en lien des artistes et/ou des techniciens du son afin de réaliser la composition d'un morceau à distance via l'échange de pistes audio. ",
    extraUrl: "https://www.youtube.com/watch?v=mQki_QvYDJ0&t=4454",
    urlDescription: "Voir la video de présentation",
    modifier : "harmonize"
  },
  {
    title: "Bouboule Cooking",
    sub: "Site de recettes originales",
    src: bouboule,
    alt: "maquette site internet bouboule cooking",
    description:
      "Bouboule Cooking est un site recensant les recettes postées sur la chaîne Youtube du même nom, elle contient aussi des recettes inédites et originales déstinées aux cuisiniers débutants ou plus confirmés",
    extraUrl: "https://bouboule-cooking-recettes.netlify.app/",
    urlDescription: "Voir le site",
    modifier : "bouboule"
  },
  {
    title: "Todo list",
    sub: "Gestionnaire de tâche",
    src: todo,
    alt: "Application de gestion de tâche",
    description:
      "Application permettant de lister les tâches et indiquer leur état d'avancement du quotidien",
    extraUrl: "https://todolist-nv974.netlify.app/",
    urlDescription: "Voir l'application",
    modifier : "todo"
  },
];

export default projectsList