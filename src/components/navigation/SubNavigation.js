import React from "react";
import styled from "styled-components";
import { Link } from "gatsby";

const SubNavContainer = styled.div`
  width: 100%;
  background-color: #222222;
  ul {
    justify-self: left;
    list-style-type: none;
    display: flex;
    color: white;
    gap: 20px;
    cursor: pointer;
    li {
      &:hover {
        color: lightgray;
      }
    }
  }
`;
const NavItems = styled.nav`
  display: flex;
  /* border: 2px solid white; */
  justify-content: space-around;
  align-items: center;
  width: 80%;
  color: white;
  margin: 0 auto;
`;

const SubNavigation = (props) => {
  return (
    <SubNavContainer>
      <NavItems>
        <h4 style={{ borderBottom: "2px solid #308ACB" }}>
          {props.modelNumber} - {props.category}
        </h4>
        <ul>
          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={`/models/${props.link}/overview`}
          >
            <li style={{ fontWeight: props.page === "overview" ? "bold" : "" }}>
              Overview
            </li>
          </Link>

          <Link
            style={{ textDecoration: "none", color: "white" }}
            to={`/models/${props.link}/gallery`}
          >
            <li style={{ fontWeight: props.page === "gallery" ? "bold" : "" }}>
              Gallery
            </li>
          </Link>
          <li>Exterior</li>
          <li>Interior</li>
          <li>Performance</li>
          <li>Specs</li>
          <li>Reviews</li>
          <li>Compare</li>
        </ul>
      </NavItems>
    </SubNavContainer>
  );
};

export default SubNavigation;
