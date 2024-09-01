import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import resumeBody from './resumeBody'
import ProjectsBody from './ProjectsBody';

import Footer from './Footer/index';
import NavBarr from './NavBarr/index';
import Layout from './Layout';

// import projectLinks from '../projectLinks/index';


function App() {
  return (
    <div className="App">
      <video
        id="comp-k4mkxomb_video"
        className="K8MSra"
        role="presentation"
        crossOrigin="anonymous"
        playsInline
        preload="auto"
        muted
        loop
        tabIndex="-1"
        autoPlay
        src="./1053991_Abstract_blooming_flowers_background_HD_BG.mp4"
      ></video>
      <BrowserRouter>
 <NavBarr/>
      <Routes>
<Route exact path='/' Component={resumeBody}/>
        <Route Component={Layout}>
<Route path='/projectsBody' Component={ProjectsBody} />
</Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
