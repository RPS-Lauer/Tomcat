import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import NavigationV2 from "../components/navigation/NavigationV2";
import HeroVideo from "../videos/tomcat-hero-2.mp4";

import WalkieVideo from "../videos/tomcatherovideo.mp4";
import IntroImage from "../components/indexPage/images/carbon-hanger.jpg";
import Intro2Image from "../components/indexPage/images/TC-CRZ-DISK-COLLEGE-VOLLYBALL-COURT.jpg";
import WaikieImage from "../components/indexPage/images/tomcat-less-background.png";
import RiderVideo from "../videos/overhead.mp4";
import RiderImage from "../components/indexPage/images/pro_lessBackground.png";
import ScrubbersImage from "../components/indexPage/images/vr-lessBackground.png";
import HallwayImage from "../components/indexPage/images/sport-healthcare-hallway-03-15-21.jpg";
import FarmImage from "../components/indexPage/images/Omaha-Farm-Show-01.jpg";
import GtImage from "../components/indexPage/images/gt-manufacturing.jpg";
import Footer2 from "../components/Footer2";
const PageLayout = styled.div`
  font-family: sans-serif;
`;

const VideoContainer = styled.div`
  position: relative;
  height: 100vh;
  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const IntroSection = styled.div`
  position: relative;
  width: 100%;
  height: 80vh;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .overlay {
    position: absolute;
    top: 0;
    background-color: rgba(0, 0, 0, 0.6);
    width: 100%;
    height: 100%;
  }
`;
const IntroContent = styled.div`
  width: 100%;
  z-index: 2;
  position: absolute;
  top: 50%;
  margin-top: -135px;
  color: white;
  left: 15%;

  button {
    margin-top: 30px;
    background: transparent;
    border: 1px solid white;
    border-radius: 20px;
    color: white;
    padding: 0.7rem;
    width: 170px;
    transition-duration: 0.5s;
    cursor: pointer;

    &:hover {
      background-color: white;
      color: black;
    }
  }

  h1 {
    font-size: 3em;
    /* border-bottom: 2px solid white; */
    /* padding-bottom: 15px; */
  }

  .text-p {
    width: 430px;
  }
`;

const CategoryContainer = styled.div`
  height: 80vh;
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
`;
const HoverCard = styled.div`
  position: relative;

  .vid-container {
    z-index: 1;
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    video {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .img-container {
    z-index: 2;
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: #f3f4f5;

    .img-content {
      top: 10%;
      width: 80%;
      position: absolute;
      left: 50%;
      margin-left: -200px;
    }

    top: 0;
    transition-duration: 0.5s;
    &:hover {
      opacity: 0;
    }

    .img-header {
      width: 300px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
`;

const Overlay = styled.div`
  position: absolute;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 100%;
  top: 0;
`;

const GetStartedSection = styled.div`
  position: relative;
  height: 100vh;
  /* background-color: #1a1a1c; */
  display: grid;
  grid-template-columns: 50% 50%;
  color: white;

  .text-content {
    position: absolute;
    bottom: 30%;
    left: 10%;
  }
`;

const GlobalCoverage = styled.div`
  background-color: #1a1a1c;
  position: relative;
  .fa-globe {
    position: absolute;
    top: 15%;
    left: 50%;
    margin-left: -120px;
    font-size: 15em;
  }
`;
const GetStarted = styled.div`
  position: relative;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StoriesSection = styled.div`
  height: 100vh;
  text-align: center;
  button {
    background-color: transparent;
    border: 1px solid black;
    border-radius: 15px;
    width: 120px;
    padding: 0.5rem;
    margin-top: 2rem;
  }
`;
const ImageGallery = styled.div`
  max-width: 1400px;
  height: 600px;
  margin: 0 auto;
  overflow: hidden;
  display: grid;
  grid-template-columns: 50% 50%;

  .main-image {
    .img-container {
      width: 100%;
      height: 600px;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .sub-images {
    display: flex;
    flex-wrap: wrap;
    img {
      width: 50%;
    }
  }
`;

const TrainingServiceSection = styled.div`
  background-color: #1a1a1c;
  padding: 2rem 0;
`;

const TrainingSection = styled.div`
  margin: 0 auto;
  color: white;
  padding: 2rem 0;
  display: flex;
  justify-content: space-around;
  max-width: 1400px;
  height: 400px;
  button {
    background-color: transparent;
    border: 1px solid white;
    color: white;
    border-radius: 15px;
    width: 120px;
    padding: 0.5rem;
    margin-top: 2rem;
  }
`;
const ConnectedSection = styled.div`
  text-align: center;
  background-color: black;
  color: white;

  h1,
  p {
    margin: 0;
  }

  h1 {
    padding: 4rem 0 1rem 0;
  }
`;

const ImageSlider = styled.div`
  padding: 3rem 0;
  display: flex;
  align-items: center;
  max-width: 1400px;
  margin: 0 auto;
  justify-content: space-between;
  background-color: black;
  i {
    font-size: 3rem;
    color: white;
  }
  .img-container {
    width: 250px;
    height: 400px;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const StayConnected = styled.div`
  max-width: 1000px;
  padding: 2rem 0;
  margin: 0 auto;
  align-items: center;
  display: flex;
  justify-content: space-around;
  input {
    margin: 1rem 0;
    width: 300px;
    text-align: center;
    border: none;
    background-color: transparent;
    color: white;
    border-bottom: 1px solid white;
  }
  button {
    background-color: transparent;
    border: 1px solid white;
    color: white;
    border-radius: 15px;
    width: 120px;
    padding: 0.5rem;
    margin-top: 2rem;
  }
`;

const IndexPage2 = () => {
  return (
    <PageLayout>
      <VideoContainer>
        <video autoPlay loop muted>
          <source src={HeroVideo} type="video/mp4" />
        </video>
        <NavigationV2 />
      </VideoContainer>
      <IntroSection>
        <img src={IntroImage} alt="" />
        <IntroContent>
          <p>Carbon - Walk Behind Floor Scrubber</p>
          <h1>Carbon</h1>
          <hr />
          <p className="text-p">
            Experience the freedom of the life at jst speed with VisionAir - a
            turnkey ownership program that includes everything you need to own a
            Vision Jet
          </p>
          <button>LEARN MORE</button>
        </IntroContent>
        <div className="overlay" />
      </IntroSection>
      <CategoryContainer>
        <HoverCard>
          <div className="img-container">
            <div className="img-content">
              <div className="img-header">
                <img src={WaikieImage} alt="" />
              </div>
              <h2 style={{ fontWeight: "normal" }}>
                Walk Behind Floor Scrubbers{" "}
                <i
                  style={{ marginLeft: "50px" }}
                  className="fas fa-chevron-right"
                />
              </h2>
              <hr />
              <p>THE PERSONAL JET DEFINED</p>
              <p>
                The award-winning scrubber ushers in a new era in personal
                transportation where scrubber speed, scrubber comfort and
                scrubber convenience are accessible
              </p>
            </div>
          </div>

          <div className="vid-container">
            <Link to="/carbonTest">
              <video autoPlay loop muted>
                <source src={WalkieVideo} type="video/mp4" />
              </video>
            </Link>
          </div>
        </HoverCard>

        <HoverCard>
          <div style={{ backgroundColor: "white" }} className="img-container">
            <div className="img-content">
              <div className="img-header">
                <img src={RiderImage} alt="" />
              </div>
              <h2 style={{ fontWeight: "normal" }}>
                Ride On Floor Scrubbers{" "}
                <i
                  style={{ marginLeft: "50px" }}
                  className="fas fa-chevron-right"
                />
              </h2>
              <hr />
              <p>THE PERSONAL JET DEFINED</p>
              <p>
                The award-winning scrubber ushers in a new era in personal
                transportation where scrubber speed, scrubber comfort and
                scrubber convenience are accessible
              </p>
            </div>
          </div>
          <div className="vid-container">
            <video autoPlay loop muted>
              <source src={RiderVideo} type="video/mp4" />
            </video>
          </div>
        </HoverCard>
        <HoverCard>
          <div className="img-container">
            <div className="img-content">
              <div className="img-header">
                <img src={WaikieImage} alt="" />
              </div>
              <h2 style={{ fontWeight: "normal" }}>
                Walk Behind Floor Scrubbers{" "}
                <i
                  style={{ marginLeft: "50px" }}
                  className="fas fa-chevron-right"
                />
              </h2>
              <hr />
              <p>THE PERSONAL JET DEFINED</p>
              <p>
                The award-winning scrubber ushers in a new era in personal
                transportation where scrubber speed, scrubber comfort and
                scrubber convenience are accessible
              </p>
            </div>
          </div>
          <div className="vid-container">
            <video autoPlay loop muted>
              <source src={WalkieVideo} type="video/mp4" />
            </video>
          </div>
        </HoverCard>
      </CategoryContainer>
      <IntroSection>
        <img src={Intro2Image} alt="" />
        <IntroContent>
          <p>CRZ - Ride On Floor Scrubber</p>
          <h1>CRZ</h1>
          <hr />
          <p className="text-p">
            Experience the freedom of the life at jst speed with VisionAir - a
            turnkey ownership program that includes everything you need to own a
            Vision Jet
          </p>
          <button>LEARN MORE</button>
        </IntroContent>
        <div className="overlay" />
      </IntroSection>
      <GetStartedSection>
        <GlobalCoverage>
          <i className="fas fa-globe" />
          <div className="text-content">
            <h1
              style={{
                fontWeight: "normal",
                letterSpacing: "5px",
                borderBottom: "1px solid white",
                width: "100%",
                padding: "1rem 0",
              }}
            >
              Global Coverage{" "}
              <i
                style={{ marginLeft: "400px" }}
                className="fas fa-chevron-right"
              />
            </h1>
            <p style={{ width: "300px" }}>
              I'm baby fashion axe twee adaptogen, asymmetrical butcher pickled
              af truffaut heirloom enamel pin affogato messenger bag pinterest
              flannel. Portland iceland asymmetrical YOLO raw denim.
            </p>
          </div>
        </GlobalCoverage>
        <GetStarted>
          <Overlay />
          <img src={IntroImage} />
          <div className="text-content">
            <h1
              style={{
                fontWeight: "normal",
                letterSpacing: "5px",
                borderBottom: "1px solid white",
                width: "100%",
                padding: "1rem 0",
              }}
            >
              How to Get Started{" "}
              <i
                style={{ marginLeft: "400px" }}
                className="fas fa-chevron-right"
              />
            </h1>
            <p style={{ width: "300px" }}>
              I'm baby fashion axe twee adaptogen, asymmetrical butcher pickled
              af truffaut heirloom enamel pin affogato messenger bag pinterest
              flannel. Portland iceland asymmetrical YOLO raw denim.
            </p>
          </div>
        </GetStarted>
      </GetStartedSection>
      <StoriesSection>
        <h1
          style={{
            padding: "1rem 0",
            textDecoration: "underline",
            // width: "400px",
            textAlign: "center",
          }}
        >
          Tomcat Scrubber Stories
        </h1>
        <p>Discover The Tomcat Life and more from our team around the world</p>
        <ImageGallery>
          <div className="main-image">
            <div className="img-container">
              <img src={IntroImage} />
            </div>
          </div>
          <div className="sub-images">
            <img src={Intro2Image} />
            <img src={HallwayImage} />
            <img src={FarmImage} />
            <img src={GtImage} />
          </div>
        </ImageGallery>
        <button>SEE MORE</button>
      </StoriesSection>
      <TrainingServiceSection>
        <TrainingSection>
          <div className="text-content">
            <h3>Tomcat Approach</h3>
            <h1>Tomcat Training</h1>
            <hr />
            <p style={{ width: "400px" }}>
              Yuccie kitsch shoreditch poutine photo booth. Palo santo cronut
              before they sold out lumbersexual banjo venmo. Tacos hot chicken
              thundercats stumptown.
            </p>
            <button>LEARN MORE</button>
          </div>
          <img src={FarmImage} />
        </TrainingSection>
        <TrainingSection style={{ flexDirection: "row-reverse" }}>
          <div className="text-content">
            <h3>Scrubber Maintenance</h3>
            <h1>Service & Support</h1>
            <hr />
            <p style={{ width: "400px" }}>
              Yuccie kitsch shoreditch poutine photo booth. Palo santo cronut
              before they sold out lumbersexual banjo venmo. Tacos hot chicken
              thundercats stumptown.
            </p>
            <button>LEARN MORE</button>
          </div>
          <img src={HallwayImage} />
        </TrainingSection>
      </TrainingServiceSection>
      <IntroSection>
        <img src={GtImage} alt="" />
        <IntroContent>
          <h1>Special Mission</h1>
          <hr />
          <p className="text-p">
            Experience the freedom of the life at jst speed with VisionAir - a
            turnkey ownership program that includes everything you need to own a
            Vision Jet
          </p>
          <button>LEARN MORE</button>
        </IntroContent>
        <div className="overlay" />
      </IntroSection>
      <ConnectedSection>
        <h1>#TheTomcatLife</h1>
        <p>
          FAN PHOTOS FROM ACROSS THE WORLD. TAG US ON INSTAGRAM TO BE FEATURED
        </p>
        <ImageSlider>
          <i className="fas fa-chevron-circle-left" />
          <div className="img-container">
            <img src={FarmImage} alt="" />
          </div>
          <div className="img-container">
            <img src={HallwayImage} alt="" />
          </div>
          <div className="img-container">
            <img src={GtImage} alt="" />
          </div>
          <div className="img-container">
            <img src={FarmImage} alt="" />
          </div>
          <i className="fas fa-chevron-circle-right" />
        </ImageSlider>
        <StayConnected>
          <div>
            <h1>Stay Connected</h1>
            <p style={{ width: "300px" }}>
              Join our mailing list to get the latest news, special offers and
              invitations to exclusive events.
            </p>
          </div>
          <div>
            <form>
              <input type="text" placeholder="First Name" />
              <br />
              <input type="text" placeholder="Last Name" />
              <br />
              <input type="text" placeholder="Email" />
              <br />
              <button>Submit</button>
            </form>
          </div>
        </StayConnected>
      </ConnectedSection>
      <Footer2 />
    </PageLayout>
  );
};

export default IndexPage2;
