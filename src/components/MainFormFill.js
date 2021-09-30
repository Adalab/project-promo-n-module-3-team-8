
const Fill = (props) => {
  const handleInput = (event) => {
    props.handleInput(event.target.value)
  }
  const handleClick = (ev) => {
    props.handleCollapsable(ev.currentTarget.id)
  }

  return (
    <section className="section__fill" onClick={handleClick} id="collapsableFill">
      <div className="form__header" >
        <div className="header--text">
          <i className="far fa-keyboard icon-start"></i>
          <h2 className="header--title">Rellena</h2>
        </div>
        <i className={`fas fa-chevron-down arrow ${props.arrowFill}`}></i>
      </div>

      <fieldset className={`fill__form js_fieldset ${props.fill}`}>
        <label className="form__label" htmlFor="name">
          Nombre completo
        </label>
        <input
          className="form__input js_name"
          placeholder="Ej: Sally Jill"
          id="name"
          type="text"
          name="name"
          value={props.data.name}
          onChange={props.handleInput}
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
          value={props.data.job}
          onChange={props.handleInput}
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
            onChange={props.handleInput}
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
          onChange={props.handleInput}
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
          onChange={props.handleInput}
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
          onChange={props.handleInput}
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
          onChange={props.handleInput}
        />
      </fieldset>
    </section>
  );
};

export default Fill;
