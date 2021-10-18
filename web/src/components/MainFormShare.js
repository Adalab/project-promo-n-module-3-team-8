import { useState } from "react";
//import '../styles/layout/header-collapsable.scss';
//import '../styles/layout/share.scss';

const Share = (props) => {
  const handleClick = (ev) => {
    props.handleCollapsable(ev.currentTarget.id);
  };

  const handleShare = (ev) => {
    ev.preventDefault();
    fetch("//localhost:4000/card", {
      method: "POST",
      body: JSON.stringify(props.data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.success === false) {
          props.setError(data.error);
          props.setSuccess("");
        } else if (data.success === true) {
          props.setSuccess(data.cardURL);
          props.setError("");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="form__header" onClick={handleClick} id="collapsableShare">
        <div className="header--text">
          <i className="fas fa-share-alt icon-start"></i>
          <h2 className="header--title">Comparte</h2>
        </div>
        <i className={`fas fa-chevron-down arrow ${props.arrowShare}`}></i>
      </div>

      <fieldset
        className={`profilecards__section--share js_fieldset ${props.share}`}
      >
        <button
          className="share__button js_share__button"
          onClick={handleShare}
        >
          <a
            href="./profile-cards.html"
            className="section__container--main-link"
          >
            <i className="far fa-address-card"></i>Crear tarjeta
          </a>
        </button>
        <div className="container-creadted-card js_created-card">
          <p className="paragraph-created-card js_share-message">
            La tarjeta ha sido creada
          </p>
          <a
            className="link-created-card js_link_created"
            target="_blank"
            href="www.twwitter.com"
          >
            {props.success}
          </a>
          <button className="button-rrss">
            <i className="fab fa-twitter twitter"></i>Compartir en twitter
          </button>
          {/* Boton de linkedin */}
          <a
            className="link-created-card js_link_created"
            target="_blank"
            href="www.linkedin.com/"
          >
            www.linkedin.com//loquesea/lpomnn/lllammnuiv
          </a>
          <button className="button-rrss">
            <i className="fab fa-linkedin-in linkedin"></i>Compartir en LinkeIn
          </button>
        </div>
      </fieldset>
    </>
  );
};

export default Share;
