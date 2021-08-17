import React from "react";
import styled from "styled-components";

const GalleryContainer = styled.div`
  max-width: 1400px;
  overflow: hidden;
  display: flex;
`;
const ImageContainer = styled.div`
  width: 300px;
  height: 300px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageGallery = (props) => {
  return (
    <GalleryContainer>
      <ImageContainer>
        <img src={props.galleryImage} />
      </ImageContainer>
    </GalleryContainer>
  );
};

export default ImageGallery;
