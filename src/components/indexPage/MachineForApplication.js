import React from "react";
import styled from "styled-components";
import CarbonHangerImage from "./images/carbon-hanger.jpg";
import GtImage from "./images/gt-manufacturing.jpg";
import CrzRetail from "./images/crz-retail.jpg";
import SportHealthcare from "./images/sport-healthcare-hallway-03-15-21.jpg";
import ExImage from "./images/ex-warehouse-yellow-lines-04-12-21.jpg";

const Container = styled.div`
  text-align: center;
`;
const SmallImageContainer = styled.div`
  display: flex;
  justify-content: space-between;
  grid-template-columns: 50% 50%;
  max-width: 1000px;
  margin: 0 auto;
`;
const LargeImageContainer = styled.div`
  width: 997px;
  height: 320px;
  margin: 0 auto;
  border: 2px solid grey;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    &:hover {
      width: 110%;
      height: 110%;
      transition-duration: 0.5s;
    }
  }
`;
const SmallImage = styled.div`
  width: 500px;
  height: 300px;
  border: 2px solid grey;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;

    &:hover {
      width: 110%;
      height: 110%;
      transition-duration: 0.5s;
    }
  }
`;
const LargeImage = styled.div``;

const MachineForApplication = () => {
  return (
    <Container>
      <h1>A Machine For Every Application</h1>
      <SmallImageContainer>
        <SmallImage>
          <img src={CarbonHangerImage} alt="" />
        </SmallImage>
        <SmallImage>
          <img src={GtImage} alt="" />
        </SmallImage>
      </SmallImageContainer>
      <LargeImageContainer>
        <img src={CrzRetail} />
      </LargeImageContainer>
      <SmallImageContainer>
        <SmallImage>
          <img src={SportHealthcare} alt="" />
        </SmallImage>
        <SmallImage>
          <img src={ExImage} alt="" />
        </SmallImage>
      </SmallImageContainer>
    </Container>
  );
};

export default MachineForApplication;
