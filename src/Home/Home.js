import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Header from './components/header/Header';
import SliderTwo from './components/sliderTwo/SliderTwo';
import Slider from './components/slider/Slider'
import Box from './components/box/Box';
import Imagens from './components/imagens/Imagens';
import About from './components/about/About';
import Contato from './components/contato/Contato';
import Last from './components/last/Last';
import "./home.scss"

const Home = () =>{
  return (
    <div className='home'>
      <Navbar/>
      <Header/>
      <Slider />
      <Last />
      <SliderTwo />
      <Box />
      <Imagens />
      <About />
      <Contato />
    </div>
  );
}

export default Home;