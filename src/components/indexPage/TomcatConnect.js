import React from "react";
import styled from "styled-components";
import Image1 from "./images/carbon-hanger.jpg";
import Image2 from "./images/crz-retail.jpg";
import Image3 from "./images/ex-warehouse-yellow-lines-04-12-21.jpg";
import Image4 from "./images/gt-manufacturing.jpg";
import Image5 from "./images/sport-healthcare-hallway-03-15-21.jpg";
import Image6 from "./images/carbon-hanger.jpg";
import Image7 from "./images/2010-12-17_21-47-33_381c.jpg";
import Image8 from "./images/20170202_102544.jpg";
import Image9 from "./images/Omaha-Farm-Show-01.jpg";

const ComponentLayout = styled.div`
  max-width: 1000px;

  margin: 8rem auto;
  text-align: center;
`;
const ImageContainer = styled.div`
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
  overflow-y: scroll;
  max-height: 700px;

  img {
    max-width: 300px;
    height: auto;
    object-fit: cover;
  }
`;

const TomcatConnect = () => {
  return (
    <ComponentLayout>
      <h1>TOMCAT CONNECT</h1>
      <ImageContainer>
        <img src={Image1} />
        <img src={Image2} />
        <img src={Image3} />
        <img src={Image4} />
        <img src={Image5} />
        <img src={Image6} />
        <img src={Image7} />
        <img src={Image8} />
        <img src={Image9} />
      </ImageContainer>
    </ComponentLayout>
  );
};

export default TomcatConnect;
