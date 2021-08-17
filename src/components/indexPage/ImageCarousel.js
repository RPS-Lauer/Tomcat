import React from "react";
import styled from "styled-components";

const GalleryContainer = styled.div`
  width: 100%;
  text-align: center;
`;

const ImageContainer = styled.div`
  max-width: 600px;
  height: 500px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageCarousel = (props) => {
  return (
    <GalleryContainer>
      <ImageContainer>
        <img src={props.image} alt="" />
      </ImageContainer>
    </GalleryContainer>
  );
};

export default ImageCarousel;
