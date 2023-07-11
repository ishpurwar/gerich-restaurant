import React from 'react';

import './AboutUs.css';
import { images } from '../../constants';

const AboutUs = () => (
  <>
  {/* app__bg is used for parallex effect  */}
  <div className="app__aboutus app__bg flex__center section__padding" id="about">
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="" />
    </div>
  </div>
  </>
);

export default AboutUs;