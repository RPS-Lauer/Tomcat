import React from "react";
import styled from "styled-components";
import Logo from "../components/navigation/images/tomcatequip-top.png";

const FooterContainer = styled.div`
  padding: 2rem 0;
  width: 1400px;
  margin: 0 auto;
`;
const FooterHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .img-container {
    width: 150px;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }

  .social-container {
    font-size: 1.3em;
    display: flex;
    gap: 10px;
  }
`;

const FooterBody = styled.div`
  padding-top: 50px;
  display: flex;
  justify-content: space-between;
  ul {
    list-style-type: none;
    li {
      padding: 1rem 0;
      border-bottom: 1px solid lightgrey;
    }
  }
`;

const FooterFooter = styled.div`
  padding-top: 50px;
  display: flex;
  justify-content: space-between;

  p {
    font-size: 0.7em;
  }
`;

const Footer2 = () => {
  return (
    <FooterContainer>
      <FooterHeader>
        <div className="img-container">
          <img src={Logo} alt="" />
        </div>
        <div className="social-container">
          <i className="fab fa-facebook-f" />
          <i className="fab fa-instagram" />
        </div>
      </FooterHeader>
      <FooterBody>
        <ul>
          <li>FIND US</li>
          <li>EVENTS</li>
          <li>TOMCAT STORIES</li>
          <li>ABOUT TOMCAT</li>
          <li>PRESS</li>
          <li>CAREERS</li>
          <li>EMAIL SIGN-UP</li>
        </ul>
        <ul>
          <li>HOW TO BUY</li>
          <li>TOMCAT FINANCE</li>
          <li>TOMCAT INSURANCE</li>
          <li>TOMCAT WARRANTY</li>
          <li>PRE-OWNED SCRUBBERS</li>
          <li>TOMCAT REFERRAL PROGRAM</li>
        </ul>
        <ul>
          <li>TOMCAT APPROACH</li>
          <li>TOMCAT LEARNING PORTAL</li>
          <li>TOMCAT STORE</li>
          <li>TOMCAT DIRECT</li>
          <li>TOMCAT EMPLOYEE PORTAL</li>
        </ul>
      </FooterBody>
      <FooterFooter>
        <p>&copy;2021 TOMCAT CORPORATION. ALL RIGHTS RESERVED</p>
        <div style={{ display: "flex", gap: "15px", fontWeight: "bold" }}>
          <p>TERMS OF USE</p>
          <p>PRIVACY POLICY</p>
        </div>
      </FooterFooter>
    </FooterContainer>
  );
};

export default Footer2;
