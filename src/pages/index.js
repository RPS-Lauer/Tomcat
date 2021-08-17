import React from "react";
import styled from "styled-components";
import { Button } from "../components/common/Button";
import ImageLinks from "../components/indexPage/ImageLinks";
import LatestNews from "../components/indexPage/LatestNews";
import MachineForApplication from "../components/indexPage/MachineForApplication";
import ModelRotator from "../components/indexPage/ModelRotator";
import TomcatConnect from "../components/indexPage/TomcatConnect";
import Layout from "../components/Layout";
import HeroVideo from "../videos/tomcatherovideo.mp4";

const VideoContainer = styled.div`
  position: relative;
  width: 100%;
  height: 60vh;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const VideoOverlay = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 60vh;
  background-color: rgba(0, 0, 0, 0.6);
`;

const TextOverlay = styled.div`
  text-align: center;
  color: white;
  position: absolute;
  max-width: 300px;
  height: 80px;
  margin-top: -40px;
  top: 50%;
  left: 50%;
  margin-left: -150px;

  h2,
  p {
    margin: 0.5rem 0;
  }
`;

const ImageLinkSection = styled.div`
  max-width: 100%;
  padding: 4rem 0;
  background-image: linear-gradient(white, #d5d5d5);
`;

const SubscribeSection = styled.div`
  width: 100%;
  background-color: #308acb;
  text-align: center;
  padding: 2rem 0;
  color: white;
  .subscribe-content {
    display: flex;
    width: 500px;
    margin: 0 auto;
    justify-content: space-evenly;
  }
`;

const IndexPage = () => {
  console.log("test")

  return (
    <Layout>
      <VideoContainer>
        <VideoOverlay />
        <video autoPlay muted loop>
          <source src={HeroVideo} type="video/mp4" />
        </video>
        <TextOverlay>
          <h2>THE FUN STARTS HERE</h2>
          <p style={{ fontSize: ".9em" }}>
            Explore the New 2021 Tomcat Scrubbers
          </p>
          <Button>FIND YOUR TOMCAT</Button>
        </TextOverlay>
      </VideoContainer>
      <ModelRotator />
      <ImageLinkSection>
        <h2 style={{ textAlign: "center" }}>DISCOVER TOMCAT</h2>
        <ImageLinks />
      </ImageLinkSection>
      <TomcatConnect />
      <LatestNews />
      <SubscribeSection>
        <div className="subscribe-content">
          <h2 style={{ margin: "0" }}>Subscribe to Tomcat:</h2>
          <button>Stay Informed</button>
        </div>
      </SubscribeSection>
    </Layout>
  );
};

export default IndexPage;
