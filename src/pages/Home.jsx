import React from 'react';
import NavBar from '../components/header/NavBar';
import BackVid from '../components/header/BackVid';
import About from './About';
import Footer from '../components/footer/Footer';
const Home = () => {
  return (
    <div>
        <NavBar/>
        <BackVid/>
        <About/>
        <Footer/>
    </div>
  );
}

export default Home;
