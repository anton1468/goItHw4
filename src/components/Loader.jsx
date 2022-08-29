import React from 'react';
import { ThreeDots } from  'react-loader-spinner'
import {LoaderContainer} from "../Styles";

const Loader = () => {
    return (
      <LoaderContainer>
        <ThreeDots
          height = "80"
          width = "80"
          radius = "9"
          color = 'green'
          ariaLabel = 'three-dots-loading'
          wrapperStyle
          wrapperClass
        />
      </LoaderContainer>
    );

}

export default Loader;
