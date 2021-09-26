import React from "react";
import phone from "../../assets/img/contact/telephone.png";
import mail from "../../assets/img/contact/mail.png";
import map from "../../assets/img/contact/map.png";
import emailjs from "emailjs-com";
import { useState } from "react/cjs/react.development";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./contact.scss";

const Contact = () => {
  const [formName, setFormName] = useState("");
  const [formMail, setFormMail] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formCompany, setFormCompany] = useState("");
  const [formObject, setFormObject] = useState("");
  const [formMessage, setFormMessage] = useState("");
  const sendIsOk = () =>
    toast.success("Message envoyé", {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    const notSend = () =>
      toast.error("Erreur message", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

  const sendMessage = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "service_v6uky3m",
        "template_sc10diy",
        event.target,
        "user_hL7WoXlwucZBJGlQ2JtNK"
      )
      .then(
        (result) => {
          console.log(result.text);
          sendIsOk();
        },
        (error) => {
          console.log(error.text);
          notSend();
        }
      );
    event.target.reset();
  };

  return (
    <div className="contact">
      <h2>Contactez-moi !</h2>
      <div className="contact__wrapper">
        <div className="contact__wrapper__left">
          <p>
            N'hésitez pas à me contacter pour vos projets, ou pour tout autre
            renseignement via les coordonnées affichées ci-dessous.
            <br />Vous pouvez aussi directement m'envoyer un message en utilisant le formulaire de contact.
          </p>
          <div className="contact__wrapper__left__bottom">
            <div className="contact__wrapper__left__bottom__phone">
              <img src={phone} alt="telephone" />
              <div className="contact__wrapper__left__bottom__phone__text">
                <span>Téléphone</span>
                <span> 06 92 08 88 09</span>
              </div>
            </div>
            <div className="contact__wrapper__left__bottom__mail">
              <img src={mail} alt="e-mail" />
              <div className="contact__wrapper__left__bottom__mail__text">
                <span>e-mail</span>
                <span> nicolasvitry.web@gmail.com </span>
              </div>
            </div>
            <div className="contact__wrapper__left__bottom__map">
              <img src={map} alt="lieu" />
              <div className="contact__wrapper__left__bottom__map__text">
                <span>Situé à</span>
                <span> Saint-Joseph / Réunion / 97480 </span>
              </div>
            </div>
          </div>
        </div>
        <form className="contact__wrapper__form" onSubmit={sendMessage}>
          <div className="contact__wrapper__form__first">
            <input
              type="text"
              name="name"
              className="contact__wrapper__form__first__name"
              placeholder="Nom"
              value={formName}
              onChange={(e) => {
                setFormName(e.target.value);
              }}
            />
            <input
              type="mail"
              name="email"
              className="contact__wrapper__form__first__mail"
              placeholder="email"
              value={formMail}
              onChange={(e) => {
                setFormMail(e.target.value);
              }}
            />
          </div>
          <div className="contact__wrapper__form__second">
            <input
              type="text"
              name="phone"
              className="contact__wrapper__form__second__phone"
              placeholder="Numéro de téléphone"
              value={formPhone}
              onChange={(e) => {
                setFormPhone(e.target.value);
              }}
            />
            <input
              type="text"
              name="company"
              className="contact__wrapper__form__second__company"
              placeholder="Société"
              value={formCompany}
              onChange={(e) => {
                setFormCompany(e.target.value);
              }}
            />
          </div>
          <div className="contact__wrapper__form__object">
            <input
              type="text"
              name="object"
              placeholder="Objet du message"
              value={formObject}
              onChange={(e) => {
                setFormObject(e.target.value);
              }}
            />
          </div>
          <div className="contact__wrapper__form__message">
            <textarea
              type="text"
              name="message"
              placeholder="Ecrivez votre message ici"
              value={formMessage}
              onChange={(e) => {
                setFormMessage(e.target.value);
              }}
            />
          </div>
          <input
            className="contact__wrapper__form__send"
            type="submit"
            value="Envoyer un message"
          />
        </form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default Contact;
