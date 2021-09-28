import Form from './MainForm';
import Preview from './MainPreview';

const Main = (props) => {
  const handleInput=(event)=>{
    props.handleInput(event.target.value)
  }
  
  return (
    <main className="cards">
      <Preview data = {props.data} />
      <Form data = {props.data} design={props.design} arrowDesign={props.arrowDesign} fill={props.fill} arrowFill={props.arrowFill} stateShare={props.share} arrowShare={props.arrowShare} handleInput={handleInput} handleCollapsable={props.handleCollapsable} />
    </main>
  );
};

export default Main;
