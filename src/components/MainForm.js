import { useState } from 'react/cjs/react.development';
import Design from './MainFormDesign';
import Fill from './MainFormFill';
import Share from './MainFormShare';
//import '../styles/pages/main-cards.scss';
//import '../styles/pages/main-landing.scss';

const Form = () => {
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

  return  (
    <form className="profilecards__app" action="#" method="POST">
      <Design />
      <Fill />
      <Share />
    </form>
  );
};

export default Form;
