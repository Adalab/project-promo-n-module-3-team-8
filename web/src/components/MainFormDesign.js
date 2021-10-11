import { useState } from 'react';
//import '../styles/layout/header-collapsable.scss';
//import '../styles/layout/design.scss';

const Design = (props) => {

  const handleClick = (ev) => {
    props.handleCollapsable(ev.currentTarget.id)
  }

  return (
    <section className="profilecards__section--design" onClick={handleClick} id='collapsableDesign'>
      <div className="form__header" >
        <div className="header--text">
          <i className="far fa-object-ungroup icon-start"></i>
          <h2 className="header--title">Diseña</h2>
        </div>
        <i className={`fas fa-chevron-down arrow ${props.arrowDesign}`}></i>
      </div>

      <fieldset className={`design__form js_fieldset ${props.design}`}>
        <h3 className="design__form--colors">colores:</h3>
        <div className="design__form--ranges">
          <label className="label-1" htmlFor="palette1">
            <input
              className="range"
              id="palette1"
              type="radio"
              value="1"
              name="palette"
              defaultChecked={true}
              onChange={props.handlePalette}
            />
            <div className="box-1"></div>
            <div className="box-2"></div>
            <div className="box-3"></div>
          </label>

          <label className="label-2" htmlFor="palette2">
            <input
              className="range "
              id="palette2"
              type="radio"
              value="2"
              name="palette"
              onChange={props.handlePalette}
            />
            <div className="box-1"></div>
            <div className="box-2"></div>
            <div className="box-3"></div>
          </label>

          <label className="label-3" htmlFor="palette3">
            <input
              className="range"
              id="palette3"
              type="radio"
              value="3"
              name="palette"
              onChange={props.handlePalette}
            />
            <div className="box-1"></div>
            <div className="box-2"></div>
            <div className="box-3"></div>
          </label>
        </div>
      </fieldset>
    </section>
  );
};

export default Design;
