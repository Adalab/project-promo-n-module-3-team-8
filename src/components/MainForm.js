import Design from './MainFormDesign';
import Fill from './MainFormFill';
import Share from './MainFormShare';
//import '../styles/pages/main-cards.scss';
//import '../styles/pages/main-landing.scss';

const Form = (props) => {
  const handleInput=(event)=>{
    props.handleInput(event.target.value)
  }
  return (
    <form className="profilecards__app" action="#" method="POST">
      <Design />
      <Fill data={props.data} handleInput={handleInput} />
      <Share />
    </form>
  );
};

export default Form;
