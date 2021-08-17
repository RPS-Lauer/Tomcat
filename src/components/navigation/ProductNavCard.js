import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { Button } from "../common/Button";

const CardContainer = styled.div`
  max-width: 230px;
  background-color: white;
  padding: 1rem;
  box-shadow: 5px 10px 10px 10px grey;
`;
const MoreBtn = styled.button`
  background-color: #5979ae;
  color: white;
  border: 1px solid black;
  border-radius: 5px;
  padding: 0.4rem;
  font-size: 1em;
  width: 100%;
  margin: 0.5rem 0;
  cursor: pointer;
  &:hover {
    background-color: #6387c3;
  }
`;

const ProductNavCard = (props) => {
  return (
    <CardContainer>
      <img src={props.image} />
      <h3 style={{ margin: "0", textAlign: "center" }}>{props.title}</h3>
      <Link to={props.moreLink}>
        <MoreBtn>Explore More</MoreBtn>
      </Link>
    </CardContainer>
  );
};

export default ProductNavCard;
