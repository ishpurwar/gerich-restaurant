import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';
import './Gallery.css';
import { SubHeading } from '../../components';
import { images } from '../../constants';


const Gallery = () => {
  return(
  <div className='app__gallery flex__center'>
    <div className="app__gallery-content">
      <SubHeading title="Instagram"/>
      <h1 className="headtext__cormorant">Photo Gallery</h1>
      <p className='p__opensans' style={{color:'#AAA'}}></p>
    </div>
  </div>
)};

export default Gallery;
