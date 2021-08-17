import React from "react";
import styled from "styled-components";
import Image1 from "./images/carbon-hanger.jpg";
import Image2 from "./images/crz-retail.jpg";
import Image3 from "./images/ex-warehouse-yellow-lines-04-12-21.jpg";

const ComponentLayout = styled.div`
  width: 1200px;

  margin: 5rem auto;
  text-align: center;
`;
const NewsContainer = styled.div`
  width: 1200px;
  display: flex;
  justify-content: space-around;
`;

const ArticleContainer = styled.div`
  max-width: 300px;
  height: auto;
  padding: 10px;
  box-shadow: 5px 10px 5px 10px lightgrey;
  text-align: left;
  /* max-height: 250px; */
  img {
    max-width: 300px;
    /* max-height: 250px; */
    object-fit: cover;
    /* margin-top: 10px; */
  }
  p {
    font-size: 0.8em;
  }
  h3 {
    color: #308acb;
    font-size: 1em;
  }

  button {
    background-color: transparent;
    border: 1px solid black;
    border-radius: 5px;
    padding: 0.3rem;
    text-align: center;
  }
`;

const LatestNews = () => {
  return (
    <ComponentLayout>
      <h1>LATEST NEWS</h1>
      <NewsContainer>
        <ArticleContainer>
          <img src={Image1} />
          <p>Wednesday, April 21, 2021</p>
          <h3>Tomcat Announces Equal Prize Money 61st Masters!</h3>
          <button>READ MORE</button>
        </ArticleContainer>
        <ArticleContainer>
          <img src={Image2} />
          <p>Wednesday, April 21, 2021</p>
          <h3>TOmcat Announces Equal Prize Money 61st Masters!</h3>
          <button>READ MORE</button>
        </ArticleContainer>
        <ArticleContainer>
          <img src={Image3} />
          <p>Wednesday, April 21, 2021</p>
          <h3>TOmcat Announces Equal Prize Money 61st Masters!</h3>
          <button>READ MORE</button>
        </ArticleContainer>
      </NewsContainer>
    </ComponentLayout>
  );
};

export default LatestNews;
