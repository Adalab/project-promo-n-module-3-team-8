const Share = (props) => {
  const handleClick = (ev) => {
    props.handleCollapsable(ev.currentTarget.id);
  };

  const handleShare = (ev) => {
    ev.preventDefault();
    fetch("http://localhost:4000/card/", {
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
        className={`profilecards__section--share ${props.share}`}
      >
        <button
          className="share__button"
          onClick={handleShare}
        >
          <a
            href="./profile-cards.html"
            className="section__container--main-link"
          >
            <i className="far fa-address-card" />Crear tarjeta
          </a>
        </button>
        <div className="container-creadted-card">
          <p className="paragraph-created-card ">
            La tarjeta ha sido creada
          </p>
          <p className="link-created-card">
            <a target="-blank"
              href={`${props.success}`}>{props.success}</a>
          </p>
          <a
            className="button-rrss"
            target="-blank"
            href="https://www.twitter.com"
          ><i class="fab fa-twitter red" />Compartir en twitter
          </a>
          {/* Boton de linkedin */}
          <p className="link-created-card">
            <a
              target="-blank"
              href={`${props.success}`}>{props.success}</a>
          </p>
          <a
            className="button-rrss"
            target="-blank"
            href="https://www.linkedin.com"
          >
            <i className="fab fa-linkedin-in red" />Compartir en LinkedIn
          </a>
        </div>
      </fieldset>
    </>
  );
};

export default Share;