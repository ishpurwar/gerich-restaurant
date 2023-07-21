import React from "react";

import "./Laurels.css";
import { SubHeading } from "../../components";
import { images, data } from "../../constants";

const AwardCard=({award:{imgUrl,title,subtitle}})=>{
  return(
    <div className="app__laurels_awards-card">
      <img src={imgUrl} alt="award" />
      <div className="app__laurals_awards-card_content">
        <p className="p__cormorant" style={{color:'#DCCA87'}}>{title}</p>
        <p className="p__cormorant" >{subtitle}</p>

      </div>
    </div>
  )
}

const Laurels = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_info">
      <SubHeading title="Awards & recongnition"/>
      <h1 className="headtext__cormodant">Our Laurels</h1>
      <div className="app__lauralks-awards">
        {data.awards.map((award)=><AwardCard award={award} key={award.title}/>)}
      </div>
    </div>
    <div className="app__wrapper_img">
      <img src={images.laurels} alt="laurels" />
    </div>
  </div>
);

export default Laurels;
