import React from "react";
import styled from "styled-components";
import { Button } from "../common/Button";

import HangerImage from "./images/carbon-hanger.jpg";
import RetailImage from "./images/crz-retail.jpg";
import WarehouseImage from "./images/ex-warehouse-yellow-lines-04-12-21.jpg";
import ManufacturingImage from "./images/gt-manufacturing.jpg";
import SportsImage from "./images/sport-healthcare-hallway-03-15-21.jpg";

const Container = styled.div`
  max-width: 1000px;
  /* border: 1px solid green; */
  margin: 0 auto;
  .double-image {
    display: grid;
    grid-column-gap: 2px;
    grid-template-columns: 50% 50%;
    overflow: hidden;
  }
  .single-image {
    position: relative;
    margin: 2px 0;
    img {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }
  }
  .overlay-text-mid {
    position: absolute;
    width: 450px;
    left: 50%;
    margin-left: -225px;
    margin-top: -100px;
    top: 50%;
    color: white;
    text-align: center;
  }
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ImageContainer = styled.div`
  position: relative;
  width: 500px;
  height: 250px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  h2 {
    width: 250px;
    position: absolute;
    top: 50%;
    margin-top: -18px;
    left: 50%;
    margin-left: -125px;
    color: white;
    text-align: center;
    letter-spacing: 7px;
  }
`;

const ImageLinks = () => {
  return (
    <Container>
      <div className="double-image">
        <ImageContainer>
          <img src={HangerImage} alt="hanger"/>
          <Overlay />
          <h2>CONTACT A DEALER</h2>
        </ImageContainer>
        <ImageContainer>
          <img src={WarehouseImage} alt="warehouse"/>
          <Overlay />
          <h2>THE TOMCAT DIFFERENCE</h2>
        </ImageContainer>
      </div>
      <div className="single-image" >
        <img src={RetailImage} alt="retail"/>
        <Overlay />
        <div className="overlay-text-mid">
          <h2>REQUEST A BROCHURE</h2>
          <p>Get Your Tomcat Brochure Delivered</p>
          <Button>LEARN MORE</Button>
        </div>
      </div>
      <div className="double-image">
        <ImageContainer>
          <img src={ManufacturingImage} alt="manuifacturing"/>
          <Overlay />
          <h2>TOMCAT YOU BE THE JUDGE</h2>
        </ImageContainer>
        <ImageContainer>
          <img src={SportsImage} alt="sports"/>
          <Overlay />
          <h2>TOMCAT CARES</h2>
        </ImageContainer>
      </div>
    </Container>
  );
};

export default ImageLinks;
