import React from 'react';
import {arrayOf, shape, string} from 'prop-types';
import ImageGalleryItemFunc from "./ImageGalleryItem";
import {ImageGalleryContainer} from "../Styles";

const ImageGallery = ({images}) => {
  return (
    <ImageGalleryContainer>
      {images.map((item) => (
        <ImageGalleryItemFunc key={item.id} item={item} />
      ))}
    </ImageGalleryContainer>
  );
};


export default ImageGallery;

ImageGallery.propTypes = {
  images: arrayOf(shape({
    item: shape({
      id: string
    })
  }))
}
