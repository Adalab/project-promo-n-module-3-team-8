import { useState } from 'react';
import '../styles/main.scss';
import Header from './Header';
import Footer from './Footer';
import Form from './MainForm';
import Preview from './MainPreview';
import ls from '../services/ls';
import stars from '../images/stars.gif';
//import '../styles/main.scss';
//import '../styles/core/reset.scss';
//import '../styles/pages/index.scss';
//import '../styles/core/variables.scss';
//import '../styles/components/links.scss';

const App = () => {
  const [collapsable, setCollapsable] = useState('hidden');
  const [image, setImage] = useState(stars);
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
  const handleReset = () => {
    setData({
      palette:'',
      name: '',
      job: '',
      phone: '',
      email: '',
      linkedin: '',
      github: '',
      image: '',
  });
  setImage(stars);
  setPalette('palette1');
};

  return (
    <div className="App">
      <Header />
      <main className="cards">
        <Preview data={data} />
        <Form
          data={data}
          handleInput={handleInput}
        />
      </main>
      <Footer />
    </div>
  )};


export default App;
