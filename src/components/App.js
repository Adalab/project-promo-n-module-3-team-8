import { useState } from 'react';
import '../styles/main.scss';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
//import '../styles/main.scss';
//import '../styles/core/reset.scss';
//import '../styles/pages/index.scss';
//import '../styles/core/variables.scss';
//import '../styles/components/links.scss';

const App = () => {
  //COLLAPSABLE
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
       setArrowDesign('icon-end--rotate');
       setArrowFill('');
       setArrowShare('');
     } else if (selected.id === 'collapseFill') {
       setDesign('hidden');
       setFill('');
       setShare('hidden');
       setArrowDesign('');
       setArrowFill('icon-end--rotate');
       setArrowShare('');
     } else if (selected.id === 'collapseShare') {
       setDesign('hidden');
       setFill('hidden');
       setShare('');
       setArrowDesign('');
       setArrowFill('');
       setArrowShare('icon-end--rotate');
     }
   };
   //FORMULARIO
  const [data, setData] = useState({
    name: '',
    job: '',
    tel: '',
    email: '',
    linkedin: '',
    github: '',
  });
  const handleInput = (event) => {
    const whichIput = event.currentTarget.name;

    if (whichIput === 'name') {
      setData({
        ...data,
        name: event.currentTarget.value,
      });
    } else if (whichIput === 'job') {
      setData({
        ...data,
        job: event.currentTarget.value,
      });
    } else if (whichIput === 'tel') {
      setData({
        ...data,
        tel: event.currentTarget.value,
      });
    } else if (whichIput === 'email') {
      setData({
        ...data,
        email: event.currentTarget.value,
      });
    } else if (whichIput === 'linkedin') {
      setData({
        ...data,
        linkedin: event.currentTarget.value,
      });
    } else if (whichIput === 'github') {
      setData({
        ...data,
        github: event.currentTarget.value,
      });
    }
  };

  return (
    <div className="App">
      <Header />
      <Main data = {data} handleInput={handleInput} design={design} arrowDesign={arrowDesign} fill={fill} arrowfill={arrowFill} share={share} arrowShare={arrowShare} handleCollapsable={handleCollapsable}/>
      <Footer />
    </div>
  );
};

export default App;
