import { useState, useEffect } from 'react';
import '../styles/main.scss';
import Header from './Header';
import Footer from './Footer';
import Form from './MainForm';
import Preview from './MainPreview';
import stars from '../images/stars.gif';
import ls from '../services/ls';

//import '../styles/main.scss';
//import '../styles/core/reset.scss';
//import '../styles/pages/index.scss';
//import '../styles/core/variables.scss';
//import '../styles/components/links.scss';

const App = () => {
  const [palette, setPalette] = useState('palette1');
  const [image, setImage] = useState(stars);
  const [design, setDesign] = useState('');
  const [fill, setFill] = useState('hidden');
  const [share, setShare] = useState('hidden');
  const [arrowDesign, setArrowDesign] = useState('');
  const [arrowFill, setArrowFill] = useState('');
  const [arrowShare, setArrowShare] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  //Para las paletas

  //Para el formulario
  const [data, setData] = useState(
    ls.get('data', {
      palette: '',
      photo: '',
      name: '',
      job: '',
      phone: '',
      email: '',
      linkedin: '',
      github: '',
    })
  );

  useEffect(() => {
    // Guardamos el nombre y el email en el local storage
    ls.set('data', {
      palette: data.palette,
      name: data.name,
      job: data.job,
      phone: data.phone,
      email: data.email,
      linkedin: data.linkedin,
      github: data.github,
      photo: data.photo,
    });
    // Este useEffect solo se ejecutará cuando cambie el nombre o el email
    console.log(data);
  }, [data]);

  const handleReset = () => {
    localStorage.clear();
    window.location.reload(true);
    setData({
      palette: '',
      photo: '',
      name: '',
      job: '',
      phone: '',
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

  const handlePalette = (event) => {
    setPalette(event.target.id);
    setData({ ...data, palette: event.target.id });
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
    } else if (whichIput === 'phone') {
      setData({
        ...data,
        phone: event.currentTarget.value,
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

  const handleImage = (imageData) => {
    setImage(imageData);
    setData({ ...data, photo: imageData });
  };
  
  const handleError = (value) => {
    setError(value);
  };

  const handleSuccess = (value) => {
    setSuccess(value);
  };

  return (
    <div className="App">
      <Header />
      <main className="cards">
        <Preview
          data={data}
          palette={palette}
          handleReset={handleReset}
          dataImage={image}
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
          handlePalette={handlePalette}
          dataImage={image}
          handleImage={handleImage}
          error={error}
          success={success}
          setError = {handleError}
          setSuccess={handleSuccess}

        />
      </main>
      <Footer />
    </div>
  );
};

export default App;
