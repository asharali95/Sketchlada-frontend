import React, { useRef } from "react";
import { connect } from "react-redux";
import GalleryImageList from "../../MUI-Components/GalleryImageList/GalleryImageList";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="gallery-container">
      <div className="gallery-slider">
        <div className="slider-right"></div>
      </div>
      <h1>Gallery</h1>
      <GalleryImageList />
    </div>
  );
};

export default connect()(Gallery);
