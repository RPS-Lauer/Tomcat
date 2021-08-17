import React, { useState } from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import styled from "styled-components";
import { Button } from "../components/common/Button";
// import ImageGallery from "../components/productPage/ImageGallery";
// import HeroImage from "../videos/tomcatherovideo.mp4";

//Deck Images
import DiskDeckImage from "../components/productPage/images/disk-deck-first-frame-play.jpg";
// import DiskDeckAnimate from "../components/productPage/images/disk-deck-loop-v2020.gif";
import CylindricalDeckImage from "../components/productPage/images/cylindrical-deck-first-frame-play.jpg";
// import CylindricalDeckAnimate from "../components/productPage/images/cylindrical-deck-loop-v2020.gif";
import OrbitalDeckImage from "../components/productPage/images/orbital-deck-first-frame-play.jpg";
// import OrbitalDeckAnimate from "../components/productPage/images/orbital-deck-animated.gif";
// import DeckCard from "../components/productPage/DeckCard";

import Image1 from "../components/indexPage/images/carbon-hanger.jpg";
import Image2 from "../components/indexPage/images/crz-retail.jpg";
import Image3 from "../components/indexPage/images/gt-manufacturing.jpg";
import ImageCarousel from "../components/indexPage/ImageCarousel";
import InfoLinks from "../components/indexPage/InfoLinks";
import SubNavigation from "../components/navigation/SubNavigation";

//styles

const HeroContainer = styled.div`
  position: relative;
  width: 100%;
  height: 70vh;

  video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const SpecContainer = styled.div`
  width: 100%;
  height: 250px;
  background-color: white;
`;

const SpecDetailsContainer = styled.div`
  max-width: 1000px;
  height: 250px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .spec-container {
    text-align: center;
    p {
      font-size: 1.1em;
    }
    h3 {
      font-size: 1.4em;
    }
  }
  .btn-container {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    button {
      margin: 0.3rem 0;
      width: 200px;
      text-align: left;
      color: white;
      background-color: #308acb;
      border: none;
      border-radius: 3px;
      padding: 0.3rem;

      i {
        margin-left: 30px;
      }
    }
  }
`;

const ModelSection = styled.div`
  padding: 2rem 0;
  background-color: black;
  width: 100%;
  .video-container {
    width: 1400px;
    margin: 4rem auto;
    display: flex;

    /* border: 1px solid green; */
    /* justify-content: space-around; */

    .video {
      position: relative;
      overflow: hidden;
      width: 500px;
      height: 250px;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      .title {
        width: 300px;
        position: absolute;
        top: 50%;
        left: 50%;
        margin-top: -50px;
        margin-left: -150px;
        text-align: center;
        z-index: 2;
        i {
          color: #308acb;
          font-size: 3em;
        }
        h2 {
          color: white;
        }
        i,
        h2 {
          margin: 0;
        }
      }
    }
  }
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;
const ModelInfoSection = styled.div`
  max-width: 1400px;
  justify-content: space-around;
  margin: 0 auto;
  display: flex;
  color: white;
  .image-container {
    width: 300px;
    height: 300px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .btn-container {
    #explore {
      color: #308acb;
      background-color: transparent;
      border: 1px solid #308acb;
      padding: 0.3rem;
      margin: 0.3rem;
      border-radius: 3px;
    }
    #design {
      border-radius: 3px;
      color: white;
      background-color: #308acb;
      border: 1px solid #308acb;
      padding: 0.3rem;
      margin: 0.3rem;
    }
  }
`;

const PageLayout = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const Description = styled.div`
  max-width: 800px;
  font-size: 0.9em;
`;

// const BodyHeader = styled.div`
//   display: flex;
//   justify-content: space-evenly;

//   .manual-container {
//     padding: 2rem 0;
//     display: flex;
//     justify-content: space-around;
//   }
// `;

// const ImageSection = styled.div`
//   position: relative;
//   background-color: #dde2e8;
//   height: 420px;
// `;

// const StyledImages = styled.div`
//   display: grid;
//   grid-template-columns: 25% 25% 25% 25%;
//   padding: 2rem;
//   justify-items: center;
//   /* align-items: center; */
// `;

// const ScrubDeckSection = styled.div``;
// const DeckSectionContainer = styled.div`
//   display: flex;
//   justify-content: space-evenly;
//   max-width: 1400px;
//   margin: 0 auto;
// `;

// const JudgeSection = styled.div`
//   max-width: 1400px;
//   margin: 0 auto;
// `;

const ImageGallerySection = styled.div`
  text-align: center;
`;
const GalleryContainer = styled.div`
  width: 100%;
  gap: 15px;
  display: flex;
  /* justify-content: space-between; */
  margin: 0 auto;
`;
const Divider = styled.div`
  /* width: 100%; */
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2rem;
  button {
    border: 1px solid #308acb;
    border-radius: 3px;
    background-color: transparent;
    padding: 0.5rem;
    color: #308acb;
  }
`;

const BottomButtons = styled.div`
  display: flex;
  border-bottom: 7px solid #308acb;
`;

const CompareBtn = styled.div`
  position: relative;
  align-items: center;
  background-color: #ebebeb;
  color: black;
  width: 50%;
  height: 70px;
  border: none;
  padding: none;
  h2 {
    position: absolute;
    left: 20%;
  }
`;
const GalleryBtn = styled.div`
  position: relative;
  height: 70px;
  align-items: center;
  background-color: black;
  color: white;
  margin: 0;
  width: 50%;
  border: none;
  padding: none;
  h2 {
    position: absolute;
    right: 20%;
  }
`;

const ProductPageFooter = styled.div`
  display: grid;
  height: 250px;
  grid-template-columns: 35% 30% 35%;
`;
const FooterCard = styled.div`
  position: relative;
  padding: 1.5rem;
  .footer-content {
    width: 350px;
    top: 20%;
    position: absolute;
    i,
    h3,
    p {
      margin: 0;
    }
    .icon {
      font-size: 2em;
      color: #308acb;
    }
    button {
      background-color: #308acb;
      color: white;
      margin: 1rem 0;
      border: none;
      border-radius: 3px;
      padding: 0.3rem;
      width: 250px;
      text-align: left;
      i {
        margin-left: 100px;
      }
    }
  }
`;

export const query = graphql`
  query($slug: String!) {
    contentfulMachine(slug: { eq: $slug }) {
      sportPngImage {
        fluid {
          src
        }
      }
      heroVideo {
        file {
          url
        }
      }
      diskDeck
      cylindricalDeck
      orbitalDeck
      brochure {
        file {
          url
        }
      }
      techSpecs {
        file {
          url
        }
      }
      operatorManual {
        file {
          url
        }
      }
      partsManual {
        file {
          url
        }
      }
      mainRender {
        fluid {
          src
        }
      }
      heroMedia {
        file {
          url
        }
      }
      modelNumber
      category
      description {
        childMarkdownRemark {
          html
        }
      }
      slug
      cleaningPath
      runTime
      solutionTankCapacity
      recoveryTankCapacity
      imageGallery {
        image {
          fluid {
            src
          }
        }
      }
    }
  }
`;

const Products = (props) => {
  const [deckImage, setDeckImage] = useState({
    disk: DiskDeckImage,
    cylindrical: CylindricalDeckImage,
    orbital: OrbitalDeckImage,
  });

  return (
    <Layout>
      <SubNavigation
        modelNumber={props.data.contentfulMachine.modelNumber}
        category={props.data.contentfulMachine.category}
        link={props.data.contentfulMachine.slug}
        page="overview"
      />
      <HeroContainer>
        <video autoPlay loop muted>
          <source src={props.data.contentfulMachine.heroVideo.file.url} />
        </video>
        {/* <img src={props.data.contentfulMachine.heroMedia.file.url} alt="" /> */}
      </HeroContainer>
      <SpecContainer>
        <SpecDetailsContainer>
          <div className="spec-container">
            <p>CLEANING PATH</p>
            <h3>{props.data.contentfulMachine.cleaningPath}</h3>
          </div>
          <div className="spec-container">
            <p>RUN TIME</p>
            <h3>Up To {props.data.contentfulMachine.runTime} Hours</h3>
          </div>
          <div className="spec-container">
            <p>TANK CAPACITY</p>
            <h3>
              Sol: {props.data.contentfulMachine.solutionTankCapacity} Gal. |
              Rec: {props.data.contentfulMachine.recoveryTankCapacity} Gal.
            </h3>
          </div>
          <div className="btn-container">
            <button>
              DESIGN YOUR TOMCAT <i className="fas fa-chevron-right" />
            </button>
            <button>
              REQUEST A BROCHURE <i className="fas fa-chevron-right" />
            </button>
            <button>
              COMPARE SCRUBBERS <i className="fas fa-chevron-right" />
            </button>
          </div>
          {/* <h2>Cleaning Path</h2>
            <span style={{ fontStyle: "italic", color: "#5979AE" }}>
              {props.data.contentfulMachine.cleaningPath}
            </span>

            <h2>
              Run Time:{" "}
              <span style={{ fontStyle: "italic", color: "#5979AE" }}>
                Up To: {props.data.contentfulMachine.runTime} Hours
              </span>
            </h2>
            <h2>
              Tank Capacity:{" "}
              <span style={{ fontStyle: "italic", color: "#5979AE" }}>
                Sol: {props.data.contentfulMachine.solutionTankCapacity} gal
              </span>{" "}
              <span style={{ fontStyle: "italic", color: "#5979AE" }}>
                Rec: {props.data.contentfulMachine.recoveryTankCapacity} gal
              </span>
            </h2> */}
        </SpecDetailsContainer>
      </SpecContainer>

      <PageLayout>
        {/* <BodyHeader>
          <div className="image-container">
            <img src={props.data.contentfulMachine.mainRender.fluid.src} />
          </div>
          <div className="header-data">
            <h1 style={{ textAlign: "center" }}>
              {props.data.contentfulMachine.modelNumber} -{" "}
              {props.data.contentfulMachine.category}
            </h1>
            <Description
              dangerouslySetInnerHTML={{
                __html:
                  props.data.contentfulMachine.description.childMarkdownRemark
                    .html,
              }}
            />
            <div className="manual-container">
              <a
                href={props.data.contentfulMachine.brochure.file.url}
                target="_blank"
              >
                <Button style={{ width: "150px" }}>Brochure</Button>
              </a>
              <a
                href={props.data.contentfulMachine.techSpecs.file.url}
                target="_blank"
              >
                <Button style={{ width: "150px" }}>Tech Specs</Button>
              </a>
              <a
                href={props.data.contentfulMachine.partsManual.file.url}
                target="_blank"
              >
                <Button style={{ width: "150px" }}> Parts Manual</Button>
              </a>
              <a
                href={props.data.contentfulMachine.operatorManual.file.url}
                target="_blank"
              >
                <Button style={{ width: "150px" }}>Operators Manual</Button>
              </a>
            </div>
          </div>
        </BodyHeader> */}
      </PageLayout>
      <ModelSection>
        <ModelInfoSection>
          <div className="image-container">
            <img src={props.data.contentfulMachine.sportPngImage.fluid.src} alt="sportPng"/>
          </div>
          <div>
            <h1>
              {props.data.contentfulMachine.modelNumber}
              <span> {props.data.contentfulMachine.category}</span>
            </h1>

            <Description
              dangerouslySetInnerHTML={{
                __html:
                  props.data.contentfulMachine.description.childMarkdownRemark
                    .html,
              }}
            />
            <div className="btn-container">
              <button id="explore">EXPLORE TOMCAT</button>
              <button id="design">DESIGN YOUR TOMCAT</button>
            </div>
          </div>
        </ModelInfoSection>
        <div className="video-container">
          <div className="video">
            <img src={Image1} alt="image1"/>
            <div className="title">
              <i className="far fa-play-circle" />
              <h2>
                {props.data.contentfulMachine.modelNumber} <span>Overview</span>
              </h2>
            </div>
            <Overlay />
          </div>
          <div className="video">
            <img src={Image2}  alt="image2"/>
            <div className="title">
              <i className="far fa-play-circle" />
              <h2>
                {props.data.contentfulMachine.modelNumber}{" "}
                <span>Walk Through</span>
              </h2>
            </div>
            <Overlay />
          </div>
          <div className="video">
            <img src={Image3} alt="image3"/>
            <div className="title">
              <i className="far fa-play-circle" />
              <h2>
                {props.data.contentfulMachine.modelNumber} <span>About</span>
              </h2>
            </div>
            <Overlay />
          </div>
        </div>
      </ModelSection>
      <ImageGallerySection>
        <h2>GALLERY</h2>
        <GalleryContainer>
          {props.data.contentfulMachine.imageGallery
            .slice(0, 3)
            .map((image) => {
              return <ImageCarousel image={image.image.fluid.src} />;
            })}
        </GalleryContainer>
        <Button style={{ margin: "3rem 0" }}>VIEW FULL GALLERY</Button>
      </ImageGallerySection>
      <Divider>
        <h2>MAKE TOMCAT YOURS</h2>
        <button>DESIGN YOUR TOMCAT</button>
      </Divider>
      <InfoLinks
        image={Image1}
        title="NEW LOOK"
        info="The completely-redesigned Super Air Nautique G21 brings a myriad of modern-day features into this well-appointed package. The striking, faceted hullsides of the G21 are a continuation of the popular aesthetic that the 2021 G-Series created. Along with this clean look comes a host of functionality, with a rear transom area that’s perfectly built for lounging and spending time with family and friends. "
        btnText="EXPLORE ALL EXTERIOR FEATURES"
      />
      <InfoLinks
        image={Image2}
        direction="row-reverse"
        title="IMMERSE YOURSELF"
        info="Settle into the interior of the Super Air Nautique G21 and you’ll find luxury every place you look. An interior configuration that lends itself well for a social atmosphere, it can also be converted into the perfect viewing area when the action behind the boat starts. The helm area provides the driver with an exceptionally comfortable experience, with everything within reach and great visibility of the surroundings. "
        btnText="EXPLORE ALL EXTERIOR FEATURES"
      />
      <InfoLinks
        image={Image3}
        title="GET READY"
        info="Get ready to be amazed by this 21-foot wake boat. This all-new hull provides surf waves and wakeboard wakes unlike anything else in its class, with complete customization of your experience right at your fingertips. The ultimate endless wakesurf wave and clean wakes for any skill-level rider, the all-new G21 sets the new bar for what a 21-foot boat can do."
        btnText="EXPLORE ALL EXTERIOR FEATURES"
      />
      <BottomButtons>
        <CompareBtn>
          <h2>
            <i className="fas fa-chevron-left" /> COMPARE
          </h2>
        </CompareBtn>
        <GalleryBtn>
          <h2>
            GALLERY <i className="fas fa-chevron-right" />
          </h2>
        </GalleryBtn>
      </BottomButtons>
      <ProductPageFooter>
        <FooterCard style={{ backgroundColor: "#EBEBEB" }}>
          <div className="footer-content" style={{ marginLeft: "20%" }}>
            <div className="footer-content">
              <i className="fas fa-paint-brush icon" />
              <h3>DESIGN YOUR TOMCAT</h3>
              <p>Build & Customize Sport</p>
              <button>
                DESIGN YOUR SPORT <i className="fas fa-chevron-right" />
              </button>
            </div>
          </div>
        </FooterCard>
        <FooterCard>
          <div className="footer-content">
            <div className="footer-content">
              <i className="fas fa-map-marker-alt icon" />
              <h3>FIND A DEALER</h3>
              <p>Locate Your Nearest Tomcat Dealer</p>
              <button>
                FIND A DEALER <i className="fas fa-chevron-right" />
              </button>
            </div>
          </div>
        </FooterCard>
        <FooterCard style={{ backgroundColor: "#EBEBEB" }}>
          <div className="footer-content">
            <i className="fas fa-file-invoice icon" />
            <h3>REQUEST A BROCHURE</h3>
            <p>Download the Tomcat Brochure</p>
            <button>
              GET A BROCHURE <i className="fas fa-chevron-right" />
            </button>
          </div>
        </FooterCard>
      </ProductPageFooter>

      {/* <h2 style={{ textAlign: "center", color: "#5979ae", fontSize: "2em" }}>
        Gallery
      </h2> */}
      {/* <ImageSection>
        <StyledImages>
          <>
            {props.data.contentfulMachine.imageGallery
              .slice(0, 4)
              .map((images) => {
                return <ImageGallery galleryImage={images.image.fluid.src} />;
              })}
          </>
        </StyledImages>
        <Link to={`/media/${props.data.contentfulMachine.slug}`}>
          <Button
            style={{
              width: "150px",
              position: "absolute",
              left: "50%",
              marginLeft: "-75px",
              bottom: "20px",
            }}
          >
            View Full Gallery
          </Button>
        </Link>
      </ImageSection> */}
      {/* {props.data.contentfulMachine.diskDeck && (
        <ScrubDeckSection>
          <h2
            style={{ textAlign: "center", color: "#5979ae", fontSize: "2em" }}
          >
            Available Scrub Decks
          </h2>
          <DeckSectionContainer>
            <DeckCard
              deckName="Disk"
              image={deckImage.disk}
              list1="Brush / Pad Selection"
              list2="Lowest Maintenance Cost"
              list3="Gimballed Drivers Improves Cleaning On Irregular Floors"
              // list4="Brushes Individually Driven For Unmatched Performance"
            />

            {props.data.contentfulMachine.cylindricalDeck && (
              <DeckCard
                deckName="Cylindrical"
                image={deckImage.cylindrical}
                list1="Eliminates Dust Mopping"
                list2="Scrub & Sweep Simultaneously"
                list3="Superior Tile & Grout Cleaning"
                // list4="Brushes Individually Driven For Unmatched Performance"
              />
            )}
            {props.data.contentfulMachine.orbitalDeck && (
              <DeckCard
                deckName="Orbital"
                image={deckImage.orbital}
                list1="Chemical Free Stripping"
                list2="70% Reduction in Water Usage"
                list3="Consistent Results - No Swirl Marks"
              />
            )}
          </DeckSectionContainer>
          <JudgeSection>
            <h2
              style={{ textAlign: "center", color: "#5979ae", fontSize: "2em" }}
            >
              You Be The Judge
            </h2>
          </JudgeSection>
        </ScrubDeckSection>
      )} */}
    </Layout>
  );
};

export default Products;
