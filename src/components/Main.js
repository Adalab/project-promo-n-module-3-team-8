import Form from './MainForm';
import Preview from './MainPreview';

const Main = (props) => {
  return (
    <main className="cards">
      <Preview data = {props.data}/>
      <Form data = {props.data}/>
    </main>
  );
};

export default Main;
