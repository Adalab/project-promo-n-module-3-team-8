import { useRef, useState } from 'react';
const ImageReaders = (props) => {
  const fileElement = useRef();
  const fileReader = new FileReader();
  const handleFile = () => {
    const selectedFile = fileElement.current.files[0];
    if (selectedFile) {
      console.log(selectedFile);
      fileReader.readAsDataURL(selectedFile);
    }
  };

  const getImage = () => {
    props.handleImage(fileReader.result);
  };

  fileReader.addEventListener('load', getImage);

  return (
    <>
      <label className="form__label" htmlFor="imagen de perfil">
        {' '}
        Añadir imagen{' '}
      </label>
      {/* Usamos fileElement como referencia de este input */}
      <div className="form__choose--image">
        <label
          className="choose__image--button"
          form="fill__form"
          name="photo"
          htmlFor="photo"
        >
          Añadir imagen
        </label>
        <div
          class="choose__image--preview js__profile-preview"
          dataImage={props.dataImage}
          style={{ backgroundImage: `url(${props.dataImage})` }}
        >
          <div
            className="choose__image--preview js__profile-preview"
            style={{ backgroundImage: `url(${props.dataImage})` }}
          ></div>
        </div>
        <input
          ref={fileElement}
          type="file"
          name="photo"
          id="photo"
          className="action__hiddenField js__profile-upload-btn"
          required
          onChange={handleFile}
        />
      </div>

      {/*} <div
        className="choose__image--preview js__profile-preview"
        style={{ backgroundImage: `url(${props.dataImage})` }}
  ></div>*/}
    </>
  );
};

export default ImageReaders;
