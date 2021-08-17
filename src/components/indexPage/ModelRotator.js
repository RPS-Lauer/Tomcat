import React, { useState } from "react";
import styled from "styled-components";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import Recon from "../navigation/images/recon-render.jpg";
import MicroMini from "../navigation/images/micro-mini.jpg";
import Sport from "../navigation/images/sport.jpg";
import Carbon from "../navigation/images/carbon.jpg";
import Hero from "../navigation/images/hero.jpg";
import Pro from "../navigation/images/pro.jpg";
import Crz from "../navigation/images/crz.jpg";
import Ex from "../navigation/images/ex.jpg";
import Xr from "../navigation/images/xr.jpg";
import Gt from "../navigation/images/gt.jpg";
import Vr from "../navigation/images/vr.jpg";
import Image200 from "../navigation/images/200.jpg";
import Iso from "../navigation/images/iso.jpg";
import NanoCorded from "../navigation/images/nano-cord.jpg";

import NanoCordless from "../navigation/images/nano-cordless.jpg";

const Container = styled.div`
  max-width: 1400px;
  margin: 2rem auto;
  justify-content: space-between;
  display: flex;
  align-items: center;
  /* border: 1px solid green; */

  i {
    font-size: 2.5em;
    color: lightgrey;
  }
`;

const ImageCardContainer = styled.div`
  /* width: 1000px; */
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;

  /* justify-items: center; */
  text-align: center;
`;
const ImageCard = styled.div`
  width: 300px;
  height: 200px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
  p {
    margin: 0;
    font-size: 0.9em;
  }
`;

const ModelRotator = () => {
  return (
    <>
      <Container>
        <i className="fas fa-chevron-left" />
        <ImageCardContainer>
          <ImageCard>
            <img src={Recon} alt="" />
            <p>
              Walk Behind Floor Scrubber{" "}
              <span style={{ fontWeight: "bold" }}>Recon</span>
            </p>
          </ImageCard>
          <ImageCard>
            <img src={MicroMini} alt="" />
            <p>
              Walk Behind Floor Scrubber{" "}
              <span style={{ fontWeight: "bold" }}>MicroMini</span>
            </p>
          </ImageCard>
          <ImageCard>
            <img src={Sport} alt="" />
            <p>
              Walk Behind Floor Scrubber{" "}
              <span style={{ fontWeight: "bold" }}>Sport</span>
            </p>
          </ImageCard>
          <ImageCard>
            <img src={Carbon} alt="" />
            <p>
              Walk Behind Floor Scrubber{" "}
              <span style={{ fontWeight: "bold" }}>Carbon</span>
            </p>
          </ImageCard>
          {/* <ImageCard>
            <img src={Hero} alt="" />
            <p></p>
          </ImageCard>
          <ImageCard>
            <img src={Pro} alt="" />
            <p></p>
          </ImageCard>
          <ImageCard>
            <img src={Crz} alt="" />
            <p></p>
          </ImageCard>
          <ImageCard>
            <img src={Ex} alt="" />
            <p></p>
          </ImageCard>
          <ImageCard>
            <img src={Xr} alt="" />
            <p></p>
          </ImageCard>
          <ImageCard>
            <img src={Gt} alt="" />
            <p></p>
          </ImageCard>
          <ImageCard>
            <img src={Vr} alt="" />
            <p></p>
          </ImageCard>
          <ImageCard>
            <img src={Image200} alt="" />
            <p></p>
          </ImageCard>
          <ImageCard>
            <img src={Iso} alt="" />
            <p></p>
          </ImageCard>
          <ImageCard>
            <img src={NanoCorded} alt="" />
            <p></p>
          </ImageCard>
          <ImageCard>
            <img src={NanoCordless} alt="" />
            <p></p>
          </ImageCard> */}
        </ImageCardContainer>
        <i className="fas fa-chevron-right" />
      </Container>
    </>
  );
};

export default ModelRotator;
