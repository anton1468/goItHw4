import React, {useEffect} from 'react';
import {ModalContainer, ModalOverlay} from "../Styles";
import {func, string} from "prop-types";

const Modal = ({modalImage, tag, handleCloseModal}) => {

  const handeEscapeClose = (e) => {
    if (e.key === "Escape") {
      handleCloseModal()
    }
  }

  useEffect(() => {
    document.addEventListener('keydown', handeEscapeClose)
  })

  useEffect( () => () => document.removeEventListener('keydown', handeEscapeClose));


  return (
    <ModalOverlay onKeyDown={handeEscapeClose} onClick={handleCloseModal}>
      <ModalContainer onClick={e => e.stopPropagation()}>
        <img src={modalImage} alt={tag}/>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default Modal;

Modal.propTypes = {
  modalImage: string,
  tag: string,
  handleCloseModal: func
}
