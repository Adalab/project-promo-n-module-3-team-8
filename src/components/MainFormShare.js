import { useState } from 'react';
//import '../styles/layout/header-collapsable.scss';
//import '../styles/layout/share.scss';

const Share = () => {
  //COLAPSABLE
  const [collapsable, setCollapsable] = useState('hidden');
  const handleClick = (event) => {
    console.log(event.currentTarget);
    //Revisar y pedir soporte:
    //¿podríamos usar el bucle for?
    //¿se podría hacer identidicando el current Target con las clases que tienen los contenedores de section con un parentNode?
    //¿cómo podríamos diferenciar cada uno de los collapsables sin tener que repetir 3 veces el código al usar clases?
    if (collapsable === '') {
      setCollapsable('hidden');
    } else {
      setCollapsable('');
    }
  };

  return (
    <>
      <div className="form__header" >
        <div className="header--text">
          <i className="fas fa-share-alt icon-start"></i>
          <h2 className="header--title">Comparte</h2>
        </div>
        <i className="fas fa-chevron-up icon-end js_collapsable"></i>
      </div>

      <fieldset
        className={`profilecards__section--share js_fieldset `}
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
