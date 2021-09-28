import { useState } from 'react';
//import '../styles/layout/header-collapsable.scss';
//import '../styles/layout/design.scss';

const Design = () => {
  const [ design, setDesign] = useState('');
  const [ fill, setFill ] = useState('hidden');
  const [ share, setShare]= useState('hidden');
 
  //Variables de estado para las flechas 
  const [ arrowDesign, setArrowDesign]= useState('');
  const [ arrowFill, setArrowFill]= useState('');
  const [ arrowShare, setArrowShare]= useState('');

  const handleCollapsable = (ev) => {
    const selected = ev.currentTarget;
    console.log(selected);
    if (selected.id === 'collapseDesign') {
      setDesign('');
      setFill('hidden');
      setShare('hidden');
      setArrowDesign('rotateArrowUp');
      setArrowFill('');
      setArrowShare('');
    } else if (selected.id === 'collapseFill') {
      setDesign('hidden');
      setFill('');
      setShare('hidden');
      setArrowDesign('');
      setArrowFill('rotateArrowUp');
      setArrowShare('');
    } else if (selected.id === 'collapseShare') {
      setDesign('hidden');
      setFill('hidden');
      setShare('');
      setArrowDesign('');
      setArrowFill('');
      setArrowShare('rotateArrowUp');
    }
  };
  //COLAPSABLE
  // const [collapsable, setCollapsable] = useState('hidden');
  // const handleClick = (event) => {
  //   console.log(event.currentTarget);
    //Revisar y pedir soporte:
    //¿podríamos usar el bucle for?
    //¿se podría hacer identidicando el current Target con las clases que tienen los contenedores de section con un parentNode?
    //¿cómo podríamos diferenciar cada uno de los collapsables sin tener que repetir 3 veces el código al usar clases?
  //   if (collapsable === '') {
  //     setCollapsable('hidden');
  //   } else {
  //     setCollapsable('');
  //   }
  // };
  return (
    <section className="profilecards__section--design" onClick={handleCollapsable}  id='collapseDesign'>
      <div className="form__header" >
        <div className="header--text">
          <i className="far fa-object-ungroup icon-start"></i>
          <h2 className="header--title">Diseña</h2>
        </div>
        <i className={`fas fa-chevron-down arrow ${arrowDesign}`}></i>
      </div>

      <fieldset className={`design__form js_fieldset ${design}`}>
        <h3 className="design__form--colors">colores:</h3>
        <div className="design__form--ranges">
          <label className="label-1" htmlFor="1">
            <input
              className="range js_palette"
              id="1"
              type="radio"
              value="1"
              name="palette"
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
