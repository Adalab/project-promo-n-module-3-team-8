import { useState } from 'react/cjs/react.development';
import Design from './MainFormDesign';
import Fill from './MainFormFill';
import Share from './MainFormShare';
//import '../styles/pages/main-cards.scss';
//import '../styles/core/variables.scss';
//import '../styles/pages/main-landing.scss';

const Form = (props) => {
  const handleInput = (event) => {
    props.handleInput(event.target.value);
  };

  return (
    <form className="profilecards__app" action="#" method="POST">
      <Design
        design={props.design}
        arrowDesign={props.arrowDesign}
        handleCollapsable={props.handleCollapsable}
        handlePalette={props.handlePalette}
      />
      <Fill
        data={props.data}
        fill={props.fill}
        arrowFill={props.arrowFill}
        handleCollapsable={props.handleCollapsable}
        handleInput={props.handleInput}
        dataImage={props.image}
        handleImage={props.handleImage}
      />
      <Share
        share={props.share}
        arrowShare={props.arrowShare}
        handleCollapsable={props.handleCollapsable}
      />
    </form>
  );
};

export default Form;
