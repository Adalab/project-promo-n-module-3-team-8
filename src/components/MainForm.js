import Design from './MainFormDesign';
import Fill from './MainFormFill';
import Share from './MainFormShare';
//import '../styles/pages/main-cards.scss';
//import '../styles/core/variables.scss';
//import '../styles/pages/main-landing.scss';

const Form = (props) => {
  return (
    <form className="profilecards__app" action="#" method="POST">
      <Design />
      <Fill

        data={props.data}
        handleInput={props.handleInput}
      />
      <Share />
    </form>
  );
};

export default Form;
