import React from 'react'
import {Image, CloudinaryContext, Transformation} from 'cloudinary-react';
import './ImageList.scss';
export default ({ hit }) => {
  return (
    <div className="card">
      <div className="card-content">
        <Image>
            <Transformation />
         </Image>
        <p>{hit.description}</p>
      </div>
    </div>
  );
};

