import React from 'react';
import NavBar from '../component/NavBar';

const About = () => {
  return (
    <div className='about-container'>
      <NavBar />
      <div className='about-main'>
        <h1 className='about-title'>About us</h1>
        <p className='content'>
          L orem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          repudiandae architecto qui adipisci in officiis, aperiam sequi atque
          perferendis eos, autem maiores nisi saepe quisquam hic odio
          consectetur nobis veritatis quasi explicabo obcaecati doloremque?
          Placeat ratione hic aspernatur error blanditiis?
        </p>
      </div>
    </div>
  );
};

export default About;
