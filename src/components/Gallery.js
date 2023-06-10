import React from "react";
// import NoImages from "./NoImages";
import Image from "./Image";
import "./Gallery.css"; // Import the CSS file

const Gallery = (props) => {
  const results = props.data;
  let images;
  // let noImages;

  if (results.length > 0) {
    images = results.map((image) => {
      let farm = image.farm;
      let server = image.server;
      let id = image.id;
      let secret = image.secret;
      let title = image.title;
      let url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}_m.jpg`;
      return <Image url={url} key={id} alt={title} />;
    });
  }

  return <div className="gallery">{images}</div>;
};

export default Gallery;
