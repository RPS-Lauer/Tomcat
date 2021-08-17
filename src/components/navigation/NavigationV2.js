import React, { useState, useEffect } from "react";
import styled from "styled-components";
import LogoImage from "../navigation/images/tomcatequip-top.png";

const NavContainer = styled.div`
  font-family: sans-serif;
`;

const TopNavContainer = styled.div`
  position: absolute;
  width: 100%;
  top: 0;
`;
const TopNavContent = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  ul {
    font-size: 0.7em;
    list-style-type: none;
    display: flex;
    align-items: center;
    gap: 20px;
    color: white;
  }
`;
const SubNavContainer = styled.div`
  position: absolute;
  width: 100%;
  /* border: 1px solid red; */
  top: 70px;
`;
const SubNavContent = styled.nav`
  width: 700px;
  /* border: 1px solid blue; */
  margin: 0 auto;
  ul {
    z-index: 3;
    color: white;
    list-style-type: none;
    display: flex;
    justify-content: space-around;
    li {
      cursor: pointer;
    }
  }
`;

const Logo = styled.div`
  width: 150px;
  height: 80px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

const FindUsBtn = styled.div`
  border: 1px solid white;
  width: 70px;
  font-size: 0.7em;
  text-align: center;
  padding: 5px;
  border-radius: 20px;
  cursor: pointer;
  transition-duration: 0.5s;

  &:hover {
    background-color: white;
    color: black;
  }
`;

const ProductNavContainer = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.9);
`;

const StickyNav = styled.div`
  width: 100%;
  z-index: 3;
  padding: 0 1rem;
  position: fixed;

  height: 50px;
  top: 0;

  background-color: black;
  color: white;
  transition-duration: 0.5s;
  /* align-items: center; */
`;
const StickyNavContent = styled.div`
  /* width: 100%; */
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  /* border: 2px solid red; */
`;

const StickyNavLinks = styled.div`
  ul {
    list-style-type: none;
    display: flex;
    margin: 0 auto;
    gap: 50px;
  }
`;

const NavigationV2 = () => {
  const [productNav, setProductNav] = useState("none");
  const [showSticky, setShowSticky] = useState({
    margin: "-100px",
    display: "none",
  });

  useEffect(() => {
    const handleScroll = (e) => {
      let y = window.scrollY;

      if (y > 100) {
        setShowSticky({ display: "grid", margin: "0" });
      } else setShowSticky({ display: "grid", margin: "-150px" });
    };
    document.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const ToggleProductNav = () => {
    if (productNav === "none") {
      setProductNav("block");
    } else {
      setProductNav("none");
    }
  };
  return (
    <NavContainer>
      <StickyNav
        style={{ marginTop: showSticky.margin, display: showSticky.display }}
      >
        <StickyNavContent>
          <Logo style={{ alignSelf: "left" }}>
            <img src={LogoImage} alt="tomcat logo" />
          </Logo>
          <StickyNavLinks>
            <ul style={{ alignSelf: "center" }}>
              <li onClick={ToggleProductNav}>
                MODELS <i className="fas fa-chevron-down" />
              </li>
              <li>YOU BE THE JUDGE</li>
              <li>MEDIA</li>
              <li>SERVICE & SUPPORT</li>
            </ul>
          </StickyNavLinks>
          <FindUsBtn>FIND US</FindUsBtn>
        </StickyNavContent>
      </StickyNav>
      <ProductNavContainer
        style={{ display: productNav }}
      ></ProductNavContainer>
      <TopNavContainer>
        <TopNavContent>
          <Logo>
            <img src={LogoImage} alt="tomcat logo" />
          </Logo>
          <ul>
            <li>STORE</li>
            <li>TOMCAT STORIES</li>
            <li>OWNERSHIP</li>
            <li>
              <FindUsBtn>FIND US</FindUsBtn>
            </li>
          </ul>
        </TopNavContent>
      </TopNavContainer>
      <SubNavContainer>
        <SubNavContent>
          <ul>
            <li onClick={ToggleProductNav}>
              MODELS <i className="fas fa-chevron-down" />
            </li>
            <li>YOU BE THE JUDGE</li>
            <li>MEDIA</li>
            <li>SERVICE & SUPPORT</li>
          </ul>
        </SubNavContent>
      </SubNavContainer>
    </NavContainer>
  );
};

export default NavigationV2;
