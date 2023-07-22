import React from "react";
import {
  BsInstagram,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import "./Gallery.css";
import { SubHeading } from "../../components";
import { images } from "../../constants";

const gallery_images = [
  images.gallery01,
  images.gallery02,
  images.gallery03,
  images.gallery04,
];

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (dire) => {
    const { current } = scrollRef;

    if (dire === "left") {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  };

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <SubHeading title="Instagram" />
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{ color: "#AAA" }}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi
          voluptas excepturi odio repellendus aut voluptates itaque id,
          molestiae necessitatibus laudantium iure ullam animi dolor adipisci
          cum quis in! Dicta, est!
        </p>
        <button type="button" className="custom__button">
          View more
        </button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
        {gallery_images.map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery_image" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort
            className="gallery__aroow-icon"
            onClick={() => scroll("left")}
          />
          <BsArrowRightShort
            className="gallery__aroow-icon"
            onClick={() => scroll("right")}
          />
        </div>
      </div>
    </div>
  );
};

export default Gallery;
