import React, { useState } from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import TomcatLogo from "./images/tomcatequip-top.png";

import ReconImage from "./images/recon-render.jpg";
import MicroMiniImage from "./images/micro-mini.jpg";
import SportImage from "./images/sport.jpg";
import CarbonImage from "./images/carbon.jpg";
import HeroImage from "./images/hero.jpg";
import ProImage from "./images/pro.jpg";
import CrzImage from "./images/crz.jpg";
import ExImage from "./images/ex.jpg";
import XrImage from "./images/xr.jpg";
import GtImage from "./images/gt.jpg";
import VrImage from "./images/vr.jpg";
import Image200 from "./images/200.jpg";
import IsoImage from "./images/iso.jpg";
import NanoCordImage from "./images/nano-cord.jpg";
import NanoCordlessImage from "./images/nano-cordless.jpg";

import ProductNavCard from "./ProductNavCard";
import { Button } from "../common/Button";

//styles
const NavigationContainer = styled.nav`
  display: grid;
  grid-template-columns: 33.3% 33.3% 33.3%;
  align-items: center;
  background-color: whitesmoke;
  padding: 0.5rem;
`;

const NavLinksLeft = styled.div`
  display: flex;
  justify-self: left;

  /* justify-content: space-evenly; */
`;
const NavLinks = styled.p`
  font-weight: bold;
  padding: 0 1.3rem;
  cursor: pointer;
`;
const LogoContainer = styled.div`
  justify-self: center;
  width: 200px;
  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
const NavLinksRight = styled.div`
  display: flex;
  justify-self: right;
  align-items: center;
`;

const SubNavContainer = styled.div`
  position: absolute;
  width: 100%;
  z-index: 100;
  header {
    background-color: black;
    height: 40px;
    ul {
      padding: 0.5rem 0;
      display: flex;
      justify-content: space-evenly;
      margin: 0;
      list-style-type: none;
      color: white;

      li {
        font-weight: bold;
        cursor: pointer;
        &:hover {
          border-bottom: 3px solid #5979ae;
          transition-duration: 0.3s;
        }
      }
    }
  }
  main {
    display: flex;
    justify-content: space-evenly;
    padding: 2rem;
    background-color: lightgray;
    img {
      width: 200px;
    }
  }
`;

const Navigation = () => {
  const [subNavShow, setSubNavShow] = useState({
    display: "none",
    marginTop: "-1000px",
  });

  const [selectedIndex, setSelectedIndex] = useState(1);
  const handleSelectedIndex = (e) => {
    setSelectedIndex(e.target.value);
  };

  const handleProductClick = () => {
    if (subNavShow.display === "none") {
      setSubNavShow({ display: "block" });
      setSelectedIndex(1);
    } else {
      setSubNavShow({ display: "none" });
    }
  };

  return (
    <>
      <NavigationContainer>
        <NavLinksLeft>
          {/* <Link style={{ color: "black", textDecoration: "none" }} to="/">
            <NavLinks>HOME</NavLinks>
          </Link> */}
          <NavLinks onClick={handleProductClick}>MODELS</NavLinks>
          <NavLinks>DISCOVER</NavLinks>
          <NavLinks>SUPPORT</NavLinks>
        </NavLinksLeft>

        <LogoContainer>
          <Link to="/">
            <img src={TomcatLogo} alt="Tomcat floor scrubbers" />
          </Link>
        </LogoContainer>

        <NavLinksRight>
          <NavLinks>DESIGN YOUR TOMCAT</NavLinks>
          <Button style={{ height: "40px" }}>REQUEST A DEMO</Button>
        </NavLinksRight>
      </NavigationContainer>
      <SubNavContainer
        onMouse={() => setSubNavShow("none")}
        style={{ display: subNavShow.display, transitionDuration: "1s" }}
      >
        <header>
          <ul>
            <li
              onClick={handleSelectedIndex}
              value="1"
              style={{
                borderBottom: selectedIndex === 1 ? "3px solid #5979ae" : "",
              }}
            >
              Walk Behind Floor Scrubbers
            </li>
            <li
              onClick={handleSelectedIndex}
              value="2"
              style={{
                borderBottom: selectedIndex === 2 ? "3px solid #5979ae" : "",
              }}
            >
              Ride On Floor Scrubbers
            </li>
            <li
              onClick={handleSelectedIndex}
              value="3"
              style={{
                borderBottom: selectedIndex === 3 ? "3px solid #5979ae" : "",
              }}
            >
              Sweepers
            </li>
            <li
              onClick={handleSelectedIndex}
              value="4"
              style={{
                borderBottom: selectedIndex === 4 ? "3px solid #5979ae" : "",
              }}
            >
              Burnishers
            </li>
            <li
              onClick={handleSelectedIndex}
              value="5"
              style={{
                borderBottom: selectedIndex === 5 ? "3px solid #5979ae" : "",
              }}
            >
              Edge
            </li>
          </ul>
        </header>
        {selectedIndex === 1 && (
          <main>
            <ProductNavCard
              image={ReconImage}
              title="Recon"
              moreLink="/models/recon/overview"
            />
            <ProductNavCard
              image={MicroMiniImage}
              title="Micro-Mini"
              moreLink="/models/micro-mini/overview"
            />
            <ProductNavCard
              image={SportImage}
              title="Sport"
              moreLink="/models/sport/overview"
            />
            <ProductNavCard
              image={CarbonImage}
              title="Carbon"
              moreLink="/models/carbon/overview"
            />
            <ProductNavCard
              image={HeroImage}
              title="Hero"
              moreLink="/models/hero/overview"
            />
          </main>
        )}
        {selectedIndex === 2 && (
          <main>
            <ProductNavCard image={ProImage} title="Pro" />
            <ProductNavCard image={CrzImage} title="CRZ" />
            <ProductNavCard image={ExImage} title="EX" />
            <ProductNavCard image={XrImage} title="XR" />
          </main>
        )}
        {selectedIndex === 3 && (
          <main>
            <ProductNavCard image={GtImage} title="GT" />
            <ProductNavCard image={VrImage} title="VR" />
          </main>
        )}
        {selectedIndex === 4 && (
          <main>
            <ProductNavCard image={Image200} title="200" />
          </main>
        )}
        {selectedIndex === 5 && (
          <main>
            <ProductNavCard image={IsoImage} title="ISO Edge" />
            <ProductNavCard image={NanoCordImage} title="Nano Corded" />
            <ProductNavCard image={NanoCordlessImage} title="Nano Cordless" />
          </main>
        )}
      </SubNavContainer>
    </>
  );
};

export default Navigation;
