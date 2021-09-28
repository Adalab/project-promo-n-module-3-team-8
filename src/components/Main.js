import Form from './MainForm';
import Preview from './MainPreview';

const Main = (props) => {
  const handleInput=(event)=>{
    props.handleInput(event.target.value)
  }
  
  return (
    <main className="cards">
      <Preview data = {props.data} />
      <Form data = {props.data} handleInput={handleInput}/>
    </main>
  );
};

export default Main;
