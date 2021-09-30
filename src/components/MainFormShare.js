
const Share = (props) => {
  const handleClick = (ev) => {
    props.handleCollapsable(ev.currentTarget.id)
  }

  return (
    <>
      <div className="form__header" onClick={handleClick} id='collapsableShare'>
        <div className="header--text">
          <i className="fas fa-share-alt icon-start"></i>
          <h2 className="header--title">Comparte</h2>
        </div>
        <i className={`fas fa-chevron-down arrow ${props.arrowShare}`}></i>
      </div>

      <fieldset
        className={`profilecards__section--share js_fieldset ${props.share}`}
      >
        <button className="share__button js_share__button">
          <a
            href="./profile-cards.html"
            className="section__container--main-link"
          >
            <i className="far fa-address-card"></i>Crear tarjeta
          </a>
        </button>
        <div className="container-creadted-card js_created-card hidden">
          <p className="paragraph-created-card js_share-message">
            La tarjeta ha sido creada
          </p>
          <a
            className="link-created-card js_link_created"
            target="_blank"
            href="www.twwitter.com"
          >
            www.twwitter.com/loquesea/lpomnn/lllammnuiv
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
