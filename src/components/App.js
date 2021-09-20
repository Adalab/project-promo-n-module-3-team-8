
import '../styles/main.scss';
import logo from '../images/logo-adalab.png';
import logoAwesome from '../images/logo-awesome-profile-cards.svg';
import stars from '../images/stars.gif';

function App() {
  return (
    <div className="App">
      <header className="header__cards">
        <a href="./index.html">
          <img
            src={logoAwesome}
            alt="Logo awesome"
            title="Logo"
            className="header__cards--logo"
          />
        </a>
      </header>

      <main className="cards">
        <section className="hero">
          <button className="hero__button js-resetButton" type="reset">
            <i className="far fa-trash-alt"></i>Reset
          </button>
          <div className="hero__section js_hero__section">
            <article className="hero__section--article">
              <div className="hero__section--article--rectangle js-rectangle"></div>
              <h2 className="hero__section--article--name js_preview js-name">
                Nombre apellido
              </h2>
              <p className="hero__section--article--text js_preview js_preview-job">
                Front-end developer
              </p>
            </article>

            <div
              className="hero__section--img js__profile-image"
              style={{ backgroundImage: `url(${stars})` }}
            ></div>
            <nav className="hero__section--media">
              <a href="www.adalab.es" className="js_preview"
              ><i
                className="fas fa-mobile-alt js-icon icon color3 js_input_mobile"
                id="mobile"
              ></i
                ></a>
              <a href="www.gmail.com" className="js_preview"
              ><i
                className="far fa-envelope js-icon icon color3 js_input_email"
                id="email"
              ></i
                ></a>
              <a href="www.linkedin.com" className="js_preview"
              ><i
                className="fab fa-linkedin-in js-icon icon color3 js_input_linkedin"
                id="linkedin"
              ></i
                ></a>
              <a href="www.github.com/" target="_blank" className="js_preview"
              ><i
                className="fab fa-github-alt js-icon icon color3 js_input_github"
                id="github"
              ></i
                ></a>
            </nav>
          </div>
        </section>

        <form className="profilecards__app" action="#" method="POST">
          <section className="profilecards__section--design">
            <div className="form__header">
              <div className="header--text">
                <i className="far fa-object-ungroup icon-start"></i>
                <h2 className="header--title">Diseña</h2>
              </div>
              <i className="fas fa-chevron-up icon-end js_collapsable"></i>
            </div>


            <fieldset className="design__form js_fieldset hidden">
              <h3 className="design__form--colors">colores:</h3>
              <div className="design__form--ranges">
                <label className="label-1" htmlFor="1">
                  <input className="range js_palette" id="1" type="radio" value="1" name="palette" />
                  <div className="box-1"></div>
                  <div className="box-2"></div>
                  <div className="box-3"></div>
                </label>

                <label className="label-2" htmlFor="2">
                  <input className="range js_palette" id="2" type="radio" value="2" name="palette" />
                  <div className="box-1"></div>
                  <div className="box-2"></div>
                  <div className="box-3"></div>
                </label>

                <label className="label-3" htmlFor="3">
                  <input className="range js_palette" id="3" type="radio" value="3" name="palette" />
                  <div className="box-1"></div>
                  <div className="box-2"></div>
                  <div className="box-3"></div>
                </label>
              </div>
            </fieldset>
          </section>

          <section className="section__fill">
            <div className="form__header">
              <div className="header--text">
                <i className="far fa-keyboard icon-start"></i>
                <h2 className="header--title">Rellena</h2>
              </div>
              <i className="fas fa-chevron-up icon-end js_collapsable"></i>
            </div>

            <fieldset className="fill__form js_fieldset hidden">
              <label className="form__label" htmlFor="name">Nombre completo</label>
              <input
                className="form__input js_name"
                placeholder="Ej: Sally Jill"
                id="name"
                type="text"
                name="name"
              />
              <label className="form__label" htmlFor="job">Puesto</label>
              <input
                className="form__input js_input_job"
                placeholder="Ej: Front-end unicorn"
                id="job"
                type="text"
                name="job"
              />
              <label className="form__label" htmlFor="">Imagen de perfil</label>
              <div className="form__choose--image">
                <label
                  className="choose__image--button"
                  form="fill__form"
                  name="photo"
                  htmlFor="photo"
                >
                  Añadir imagen
                </label>
                <input
                  name="photo"
                  type="file"
                  id="photo"
                  className="action__hiddenField js__profile-upload-btn"
                />
                <div className="choose__image--preview js__profile-preview"></div>
              </div>
              <label className="form__label" htmlFor="email">Email</label>
              <input
                className="form__input js_input_email"
                placeholder="Ej: sally.hill@gmail.com"
                id="email"
                type="email"
                name="email"
              />
              <label className="form__label" htmlFor="phone">Teléfono</label>
              <input
                className="form__input js_input_mobile"
                placeholder="Ej: 555-55-55-55"
                id="phone"
                type="tel"
                name="phone"
              />
              <label className="form__label" htmlFor="linkedin">Linkedin</label>
              <input
                className="form__input js_input_linkedin"
                placeholder="Ej: linkedin.com/sally-hill"
                id="linkedin"
                type="text"
                name="linkedin"
              />
              <label className="form__label" htmlFor="github">Github</label>
              <input
                className="form__input js_input_github"
                placeholder="Ej: @sally-hill"
                id="github"
                type="text"
                name="github"
              />
            </fieldset>
          </section>

          <div className="form__header">
            <div className="header--text">
              <i className="fas fa-share-alt icon-start"></i>
              <h2 className="header--title">Comparte</h2>
            </div>
            <i className="fas fa-chevron-up icon-end js_collapsable"></i>
          </div>


          <fieldset className="profilecards__section--share js_fieldset">
            <button className="share__button js_share__button">
              <a href="./profile-cards.html" className="section__container--main-link"
              ><i className="far fa-address-card"></i>Crear tarjeta
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
              >www.twwitter.com/loquesea/lpomnn/lllammnuiv</a
              >
              <button className="button-twitter">
                <i className="fab fa-twitter twitter"></i>Compartir en twitter
              </button>
              {/* Boton de linkedin */}
              <a
                className="link-created-card js_link_created"
                target="_blank"
                href="www.linkedin.com/"
              >www.linkedin.com//loquesea/lpomnn/lllammnuiv</a
              >
              <button className="button-twitter">
                <i className="fab fa-linkedin-in linkedin"></i>Compartir en LinkeIn
              </button>
            </div>
          </fieldset>

        </form>
      </main>

      <footer className="footer__container">
        <small className="footer__container--small"
        >Awesome profile-cards &copy; 2021</small
        >
        <a
          href="https://adalab.es/"
          title="Go to the website of Adalab"
          target="_blank"
        >
          <img
            src={logo}
            alt="Adalab logo"
            title="Adalab logo"
            className="footer__container--img"
          />
        </a>
      </footer>
    </div>
  );
}

export default App;
