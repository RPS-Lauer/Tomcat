import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import styled from "styled-components";
// import { Button } from "../components/common/Button";
import SubNavigation from "../components/navigation/SubNavigation";

const PageLayout = styled.div`
  max-width: 1000px;
  margin: 0 auto;
`;
const ProductPageFooter = styled.div`
  display: grid;
  height: 250px;
  grid-template-columns: 35% 30% 35%;
`;
const BottomButtons = styled.div`
  margin-top: 100px;
  display: flex;
  border-bottom: 7px solid #308acb;
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

const ToggleLinks = styled.div`
  /* max-width: 300px; */
  display: flex;
  gap: 20px;
  padding: 1rem 0;
  align-items: center;
  /* justify-content: space-between; */

  p {
    font-weight: bold;
    font-size: 1.2em;
  }
`;

const GalleryContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  margin: 0 auto;
  grid-template-columns: 33.3% 33.3% 33.33%;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 300px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const query = graphql`
  query($slug: String!) {
    contentfulMachine(slug: { eq: $slug }) {
      modelNumber
      category
      slug
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

const ImageGalleryTemplate = (props) => {
  return (
    <Layout>
      <SubNavigation
        modelNumber={props.data.contentfulMachine.modelNumber}
        category={props.data.contentfulMachine.category}
        link={props.data.contentfulMachine.slug}
        page="gallery"
      />
      <PageLayout>
        <h2 style={{ color: "black" }}>
          {props.data.contentfulMachine.modelNumber} -{" "}
          <span style={{ color: "#5979AE" }}>
            {props.data.contentfulMachine.category}
          </span>
        </h2>
        <h1>MEDIA GALLERY</h1>
        <ToggleLinks>
          <p>ALL</p>
          <p>IMAGES</p>
          <p>VIDEOS</p>
        </ToggleLinks>
        <GalleryContainer>
          {props.data.contentfulMachine.imageGallery.map((images) => {
            return (
              <ImageContainer>
                <img src={images.image.fluid.src} />
              </ImageContainer>
            );
          })}
        </GalleryContainer>
      </PageLayout>
      <BottomButtons>
        <CompareBtn>
          <h2>
            <i className="fas fa-chevron-left" /> OVERVIEW
          </h2>
        </CompareBtn>
        <GalleryBtn>
          <h2>
            EXTERIOR <i className="fas fa-chevron-right" />
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
    </Layout>
  );
};

export default ImageGalleryTemplate;
