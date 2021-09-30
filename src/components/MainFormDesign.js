
import Palette from './Palette';

const Design = (props) => {

  const handleClick = (ev) => {
    props.handleCollapsable(ev.currentTarget.id)
  }
  const handlePalette = (ev) => {
    props.handlePalette(ev.target.value.clicked)
    console.log(ev.target.value.cliked);
  }

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
          <Palette
            classNameLabel="label-1"
            htmlFor="1"
            id="1"
            value="1"
            name="palette"
            box1="A-1" box2="A-2" box3="A-3"
            handlePalette={props.handlePalette}
          />
          <Palette
            classNameLabel="label-2"
            htmlFor="2"
            id="2"
            value="2"
            name="palette"
            box1="B-1" box2="B-2" box3="B-3"
            handlePalette={props.handlePalette}
          />
          <Palette
            classNameLabel="label-3"
            htmlFor="3"
            id="3"
            value="3"
            name="palette"
            box1="C-1" box2="C-2" box3="C-3"
            handlePalette={props.handlePalette}
          />

        </div>
      </fieldset>
    </section>
  );
};

export default Design;
