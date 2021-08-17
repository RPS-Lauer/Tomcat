import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;

  .image-container {
    width: 50%;
    height: 100vh;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .info-container {
    position: relative;
    width: 50%;
    .content {
      top: 30%;
      width: 70%;
      left: 50%;
      margin-left: -35%;
      position: absolute;
    }
  }
`;

const InfoLinks = (props) => {
  return (
    <Container style={{ flexDirection: props.direction }}>
      <div className="image-container">
        <img src={props.image} />
      </div>
      <div className="info-container">
        <div className="content">
          <h2>{props.title}</h2>
          <p>{props.info}</p>
          <button>{props.btnText}</button>
        </div>
      </div>
    </Container>
  );
};

export default InfoLinks;
