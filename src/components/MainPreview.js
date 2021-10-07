import stars from '../images/stars.gif';
//import '../styles/layout/hero.scss';

const Preview = (props) => {
  let nameToDisplay;
  if (props.data.name === '') {
    nameToDisplay = 'Nombre Apellido';
  } else {
    nameToDisplay = props.data.name;
  }
  let jobToDisplay;
  if (props.data.job === '') {
    jobToDisplay = 'Front-end developer';
  } else {
    jobToDisplay = props.data.job;
  }

  return (
    <section className="hero">
      <button
        className="hero__button js-resetButton"
        type="reset"
        onClick={props.handleReset}
      >
        <i className="far fa-trash-alt"></i>Reset
      </button>
      <div className={`hero__section ${props.palette}`}>
        <article className="hero__section--article">
          <div className="hero__section--article--rectangle js-rectangle pline"></div>
          <h2 className="hero__section--article--name js_preview js-name pname">
            {nameToDisplay}
          </h2>
          <p className="hero__section--article--text js_preview js_preview-job pname">
            {jobToDisplay}
          </p>
        </article>

        <div
          className="hero__section--img js__profile-image"
          style={{ backgroundImage: `url(${props.dataImage})` }}
        ></div>
        <nav className="hero__section--media ">
          <a href={'tel:' + props.data.tel} className="js_preview">
            <i
              className="fas fa-mobile-alt js-icon icon color3 js_input_mobile picon"
              id="mobile"
            ></i>
          </a>
          <a
            href={'mailto:' + props.data.email}
            className="js_preview picon"
            target="-blank"
          >
            <i
              className="far fa-envelope js-icon icon color3 js_input_email picon"
              id="email"
            ></i>
          </a>
          <a
            href={'https://linkedIn.com/in/' + props.data.linkedin}
            className="js_preview picon"
            target="-blank"
          >
            <i
              className="fab fa-linkedin-in  icon color3  picon"
              id="linkedin"
            ></i>
          </a>
          <a
            href={'https://github.com/' + props.data.github}
            className=" picon"
            target="-blank"
          >
            <i
              className="fab fa-github-alt icon color3 js_input_github picon"
              id="github"
            ></i>
          </a>
        </nav>
      </div>
    </section>
  );
};

export default Preview;
