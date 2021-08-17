import React from "react";
import styled from "styled-components";
import Logo from "../components/navigation/images/tomcatequip-top.png";

const FooterContainer = styled.footer`
  width: 100%;
  background-color: #222222;
`;

const FooterContentContainer = styled.div`
  max-width: 1200px;
  padding: 5rem 0;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  color: white;

  ul {
    list-style-type: none;
  }
  .model-link {
    font-size: 0.8em;
  }
  .list-heading {
    font-weight: bold;
  }
`;

const SocialBottom = styled.div`
  border-bottom: 1px solid whitesmoke;
  width: 1200px;
  margin: 0 auto;
  #social-container {
    display: flex;
    font-size: 1.2em;
    width: 150px;
    color: white;
    justify-content: space-between;
  }
  #logo-container {
    max-width: 220px;
    padding: 1rem 0;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContentContainer>
        <ul id="link-list">
          <li className="list-heading">ABOUT</li>
          <li className="list-heading">CONTACT US</li>
          <li className="list-heading">CAREERS</li>
          <li className="list-heading">REQUEST BROCHURE</li>
          <li className="list-heading">SUBSCRIBE</li>
          <li className="list-heading">PRESS RELEASES</li>
          <li className="list-heading">PRIVACY</li>
          <li className="list-heading">LEGAL</li>
        </ul>
        <ul id="scrubber-list">
          <li className="list-heading">WALK BEHIND SCRUBBERS</li>
          <li className="model-link">Recon</li>
          <li className="model-link">MicroMini</li>
          <li className="model-link">Sport</li>
          <li className="model-link">Carbon</li>
          <li className="model-link">Hero</li>
          <li className="list-heading">RIDE ON SCRUBBERS</li>
          <li className="model-link">Pro</li>
          <li className="model-link">CRZ</li>
          <li className="model-link">EX</li>
          <li className="model-link">XR</li>
          <li className="list-heading">SWEEPERS</li>
          <li className="model-link">GT</li>
          <li className="model-link">VR</li>
          <li className="list-heading">BURNISHERS</li>
          <li className="model-link">200</li>
          <li className="list-heading">EDGE</li>
          <li className="model-link">Iso</li>
          <li className="model-link">Nano</li>
        </ul>
        <ul id="why-list">
          <li className="list-heading">WHY TOMCAT</li>
          <li className="model-link">Owner Review</li>
          <li className="model-link">Our History</li>
          <li className="model-link">Our Partners</li>
          <li className="model-link">Factory Tour</li>
          <li className="model-link">Awards</li>
          <li className="model-link">Engines</li>
          <li className="model-link">Coastal Edition</li>
          <li className="model-link">Tomcat System</li>
        </ul>
        <ul id="community-list">
          <li className="list-heading">COMMUNITY</li>
          <li className="model-link">Tomcat Events</li>
          <li className="model-link">Team Tomcat</li>
          <li className="model-link">Tomcat Network</li>
          <li className="model-link">Tomcat Cares</li>
          <li className="model-link">Tomcat Videos</li>
          <li className="model-link">Tomcat Gear</li>
          <li className="list-heading" style={{ marginTop: "3rem" }}>
            HELP & SUPPORT
          </li>
          <li className="model-link">Owners Manuals</li>
          <li className="model-link">Safety</li>
          <li className="model-link">Frequently Asked Questions</li>
          <li className="model-link">Find a Dealer</li>
          <li className="model-link">Warranty</li>
        </ul>
      </FooterContentContainer>
      <SocialBottom>
        <div id="social-container">
          <i className="fab fa-facebook-f" />
          <i className="fab fa-twitter" />
          <i className="fab fa-instagram" />
          <i className="fab fa-youtube" />
        </div>
        <div id="logo-container">
          <img src={Logo} alt="logo"/>
        </div>
      </SocialBottom>
      <p
        style={{
          color: "white",
          fontSize: ".7em",
          marginTop: "0",
          marginBottom: "0",
          marginLeft: "20rem",

          padding: "2rem",
        }}
      >
        2021 Tomcat Scrubber Company, Inc. All rights reserved.
      </p>
    </FooterContainer>
  );
};

export default Footer;
