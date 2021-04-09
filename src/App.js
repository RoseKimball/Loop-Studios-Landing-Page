import React from 'react';
import './App.css';
import Header from './Containers/Header/Header';
import Description from './Containers/Description/Description';
import Creations from './Containers/Creations/Creations';
import Footer from './Containers/Footer/Footer';

const App = () => {
  return (
    <div className='app'>
      <Header />
        <div className='container'>
            <Description />
            <Creations />
        </div>
      <Footer />
    </div>
  );
}

export default App;

/*

container
  header
    logo
    menu
    tagline
  description
    interactive image
    header + copy
  creations
    header
    see all button
    grid (generate dynamically with images + titles)
      grid components
  footer
    logo
    links
    socials
    all rights reserved

*/