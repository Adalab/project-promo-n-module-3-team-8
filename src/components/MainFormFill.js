import { useState } from 'react';
//import '../styles/layout/fill.scss';
//import '../styles/layout/header-collapsable.scss';

const Fill = () => {
  const [collapsable, setCollapsable] = useState('hidden');
  const [data, setData] = useState({
    name: '',
    job: '',
    tel: '',
    email: '',
    linkedin: '',
    github: '',
  });
  //Variables de estado para cada titulo
  const [ design, setDesign] = useState('');
  const [ fill, setFill ] = useState('hidden');
  const [ share, setShare]= useState('hidden');
 
  //Variables de estado para las flechas 
  const [ arrowDesign, setArrowDesign]= useState('');
  const [ arrowFill, setArrowFill]= useState('');
  const [ arrowShare, setArrowShare]= useState('');

  //Función del evento de los collapsables
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


  //FORMULARIO
  const handleInput = (event) => {
    const whichIput = event.currentTarget.name;

    if (whichIput === 'name') {
      setData({
        ...data,
        name: event.currentTarget.value,
      });
    } else if (whichIput === 'job') {
      setData({
        ...data,
        job: event.currentTarget.value,
      });
    } else if (whichIput === 'tel') {
      setData({
        ...data,
        tel: event.currentTarget.value,
      });
    } else if (whichIput === 'email') {
      setData({
        ...data,
        email: event.currentTarget.value,
      });
    } else if (whichIput === 'linkedin') {
      setData({
        ...data,
        linkedin: event.currentTarget.value,
      });
    } else if (whichIput === 'github') {
      setData({
        ...data,
        github: event.currentTarget.value,
      });
    }
  };

  //COLAPSABLE
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
    <section className="section__fill" onClick={handleCollapsable} id='collapsableFill'>
      <div className="form__header" >
        <div className="header--text">
          <i className="far fa-keyboard icon-start"></i>
          <h2 className="header--title">Rellena</h2>
        </div>
        <i className={`fas fa-chevron-down arrow ${arrowFill}`}></i>
      </div>

      <fieldset className={`fill__form js_fieldset ${fill}`}>
        <label className="form__label" htmlFor="name">
          Nombre completo
        </label>
        <input
          className="form__input js_name"
          placeholder="Ej: Sally Jill"
          id="name"
          type="text"
          name="name"
          value={data.name}
          onChange={handleInput}
        />
        <label className="form__label" htmlFor="job">
          Puesto
        </label>
        <input
          className="form__input js_input_job"
          placeholder="Ej: Front-end unicorn"
          id="job"
          type="text"
          name="job"
          value={data.job}
          onChange={handleInput}
        />
        <label className="form__label" htmlFor="">
          Imagen de perfil
        </label>
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
            onChange={handleInput}
          />
          <div className="choose__image--preview js__profile-preview"></div>
        </div>
        <label className="form__label" htmlFor="email">
          Email
        </label>
        <input
          className="form__input js_input_email"
          placeholder="Ej: sally.hill@gmail.com"
          id="email"
          type="email"
          name="email"
          onChange={handleInput}
        />
        <label className="form__label" htmlFor="phone">
          Teléfono
        </label>
        <input
          className="form__input js_input_mobile"
          placeholder="Ej: 555-55-55-55"
          id="phone"
          type="tel"
          name="phone"
          onChange={handleInput}
        />
        <label className="form__label" htmlFor="linkedin">
          Linkedin
        </label>
        <input
          className="form__input js_input_linkedin"
          placeholder="Ej: linkedin.com/sally-hill"
          id="linkedin"
          type="text"
          name="linkedin"
          onChange={handleInput}
        />
        <label className="form__label" htmlFor="github">
          Github
        </label>
        <input
          className="form__input js_input_github"
          placeholder="Ej: @sally-hill"
          id="github"
          type="text"
          name="github"
          onChange={handleInput}
        />
      </fieldset>
    </section>
  );
};

export default Fill;
