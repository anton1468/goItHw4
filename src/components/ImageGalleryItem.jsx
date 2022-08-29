import React, {useState} from 'react';
import {ImageGalleryImg, ImageGalleryItemContainer} from "../Styles";
import Modal from "./Modal";
import {shape, string} from "prop-types";

const ImageGalleryItem = ({item}) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = () => {
    setIsModalOpen(true)
  }
  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <ImageGalleryItemContainer>
      <ImageGalleryImg alt={item.alt || "photo"} src={item.webformatURL} onClick={handleOpenModal}/>
      {isModalOpen && <Modal modalImage={item.largeImageURL} handleCloseModal={handleCloseModal} tag={item.tags}/>}
    </ImageGalleryItemContainer>
  );
};

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  item: shape({
    webformatURL: string,
    largeImageURL: string,
    tags: string,
    alt: string
  })
}
