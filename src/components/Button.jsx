import React from 'react';
import {LoadButton, TextCenterContainer} from "../Styles";
import {func} from "prop-types";

const Button = ({handleLoadMore}) => {
  return (
    <div>
      <TextCenterContainer onClick={handleLoadMore}>
        <LoadButton>LOAD MORE</LoadButton>
      </TextCenterContainer>
    </div>
  );
};

Button.propTypes = {
    handleLoadMore: func
};

export default Button;
