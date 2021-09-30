
import Design from './MainFormDesign';
import Fill from './MainFormFill';
import Share from './MainFormShare';

const Form = (props) => {
  const handleInput = (event) => {
    props.handleInput(event.target.value)
  }

  return (
    <form className="profilecards__app" action="#" method="POST">
      <Design design={props.design} arrowDesign={props.arrowDesign} handleCollapsable={props.handleCollapsable} />
      <Fill data={props.data} fill={props.fill} arrowFill={props.arrowFill} handleCollapsable={props.handleCollapsable} handleInput={props.handleInput} />
      <Share share={props.share} arrowShare={props.arrowShare} handleCollapsable={props.handleCollapsable} />
    </form>
  );
};

export default Form;
