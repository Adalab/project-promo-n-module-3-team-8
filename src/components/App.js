import { useState } from 'react';
import '../styles/main.scss';
import Header from './Header';
import Footer from './Footer';
import Form from './MainForm';
import Preview from './MainPreview';
import stars from '../images/stars.gif';
//import '../styles/main.scss';
//import '../styles/core/reset.scss';
//import '../styles/pages/index.scss';
//import '../styles/core/variables.scss';
//import '../styles/components/links.scss';

const App = () => {
  const [collapsable, setCollapsable] = useState('hidden');
  const [palette, setPalette] = useState('palette1');
  const [image, setImage] = useState ('');
  const [design, setDesign] = useState('');
  const [fill, setFill] = useState('hidden');
  const [share, setShare] = useState('hidden');
  const [arrowDesign, setArrowDesign] = useState('');
  const [arrowFill, setArrowFill] = useState('');
  const [arrowShare, setArrowShare] = useState('');
  //Para las paletas
  
  //Para el formulario
  const [data, setData] = useState({
    palette: '',
    image: '',
    name: '',
    job: '',
    tel: '',
    email: '',
    linkedin: '',
    github: '',
  });

  const handleReset = () => {
    setData({
      palette: '',
      image: '',
      name: '',
      job: '',
      tel: '',
      email: '',
      linkedin: '',
      github: '',
    });
    setImage(stars);
    setPalette('palette1');
  };
  const handleCollapsable = (id) => {
    const selected = id;
    console.log(selected);
    if (selected === 'collapsableDesign') {
      setDesign('');
      setFill('hidden');
      setShare('hidden');
      setArrowDesign('icon-end');
      setArrowFill('');
      setArrowShare('');
    } else if (selected === 'collapsableFill') {
      setDesign('hidden');
      setFill('');
      setShare('hidden');
      setArrowDesign('');
      setArrowFill('icon-end');
      setArrowShare('');
    } else if (selected === 'collapsableShare') {
      setDesign('hidden');
      setFill('hidden');
      setShare('');
      setArrowDesign('');
      setArrowFill('');
      setArrowShare('icon-end');
    }
  };

const handlePalette =(event)=>{
  setPalette(event.target.id);
  setData({...data, palettes:event.target.id})
};
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
    };
  }

  return (
    <div className="App">
      <Header />
      <main className="cards">
        <Preview
          data={data}
          palette={palette}
          handleReset={handleReset}
        />
        <Form
          data={data}
          handleInput={handleInput}
          design={design} 
          arrowDesign={arrowDesign} 
          fill={fill} 
          arrowFill={arrowFill} 
          share={share} 
          arrowShare={arrowShare} 
          handleCollapsable={handleCollapsable} 
          />
      </main>
      <Footer />
    </div>
  )
}

export default App;
