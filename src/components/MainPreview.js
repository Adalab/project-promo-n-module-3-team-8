import stars from '../images/stars.gif';
import { useState } from 'react';
//import '../styles/layout/hero.scss';

const Preview = () => {
  const [data, setData] = useState({
    name: '',
    job: '',
    tel: '',
    email: '',
    linkedin: '',
    github: '',
  });

  let nameToDisplay;
  if (data.name === '') {
    nameToDisplay = 'Nombre Apellido';
  } else {
    nameToDisplay = data.name;
  }
  let jobToDisplay;
  if (data.job === '') {
    jobToDisplay = 'Front-end developer';
  } else {
    jobToDisplay = data.job;
  }
  return (
    <section className="hero">
      <button className="hero__button js-resetButton" type="reset">
        <i className="far fa-trash-alt"></i>Reset
      </button>
      <div className="hero__section js_hero__section">
        <article className="hero__section--article">
          <div className="hero__section--article--rectangle js-rectangle"></div>
          <h2 className="hero__section--article--name js_preview js-name">
            {nameToDisplay}
          </h2>
          <p className="hero__section--article--text js_preview js_preview-job">
            {jobToDisplay}
          </p>
        </article>

        <div
          className="hero__section--img js__profile-image"
          style={{ backgroundImage: `url(${stars})` }}
        ></div>
        <nav className="hero__section--media">
          <a href={'tel:' + data.tel} className="js_preview">
            <i
              className="fas fa-mobile-alt js-icon icon color3 js_input_mobile"
              id="mobile"
            ></i>
          </a>
          <a
            href={'mailto:' + data.email}
            className="js_preview"
            target="_blank"
          >
            <i
              className="far fa-envelope js-icon icon color3 js_input_email"
              id="email"
            ></i>
          </a>
          <a
            href={'https://linkedIn.com/in/' + data.linkedin}
            className="js_preview"
            target="_blank"
          >
            <i
              className="fab fa-linkedin-in js-icon icon color3 js_input_linkedin"
              id="linkedin"
            ></i>
          </a>
          <a
            href={'https://github.com/' + data.github}
            className="js_preview"
            target="_blank"
          >
            <i
              className="fab fa-github-alt js-icon icon color3 js_input_github"
              id="github"
            ></i>
          </a>
        </nav>
      </div>
    </section>
  );
};

export default Preview;
