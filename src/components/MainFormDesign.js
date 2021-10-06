
import Palette from './Palette';

const Design = (props) => {


  const handlePalette = (ev) => {
    props.setPalette(ev.target.checked)
  };

  const handleClick = (ev) => {
    props.handleCollapsable(ev.currentTarget.id)
  };

  return (
    <section className="profilecards__section--design" onClick={handleClick} id='collapsableDesign'>
      <div className="form__header" >
        <div className="header--text">
          <i className="far fa-object-ungroup icon-start" />
          <h2 className="header--title">Diseña</h2>
        </div>
        <i className={`fas fa-chevron-down arrow ${props.arrowDesign}`} />
      </div>

      <fieldset className={`design__form js_fieldset ${props.design}`}>
        <h3 className="design__form--colors">colores:</h3>
        <div className="design__form--ranges">
          <label className="label-1" htmlFor="1">
            <input
              className="range js_palette"
              id="1"
              type="radio"
              value="1"
              name="palette"
              checked
              onChange={handlePalette}
            />
            <div className="box-1"></div>
            <div className="box-2"></div>
            <div className="box-3"></div>
          </label>

          <label className="label-2" htmlFor="2">
            <input
              className="range js_palette"
              id="2"
              type="radio"
              value="2"
              name="palette"
              onChange={handlePalette}
            />
            <div className="box-1"></div>
            <div className="box-2"></div>
            <div className="box-3"></div>
          </label>

          <label className="label-3" htmlFor="3">
            <input
              className="range js_palette"
              id="3"
              type="radio"
              value="3"
              name="palette"
              onChange={handlePalette}
            />
            <div className="box-1"></div>
            <div className="box-2"></div>
            <div className="box-3"></div>
          </label>
        </div >
      </fieldset >
    </section >
  );
};

export default Design;
