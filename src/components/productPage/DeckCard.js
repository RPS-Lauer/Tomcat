import React from "react";
import styled from "styled-components";

const DeckCardContainer = styled.div`
  position: relative;
  text-align: center;
  cursor: pointer;

  &:hover .deck-list {
    display: block;
  }

  .deck-list {
    color: white;
    position: absolute;
    background-color: rgba(89, 121, 174, 0.8);
    padding: 0.5rem;
    width: 230px;
    display: none;
    position: absolute;
    text-align: left;
    top: 0;
    left: -150px;
    transition-duration: 1s;
  }
`;

const DeckCard = (props) => {
  return (
    <DeckCardContainer>
      <h2>{props.deckName}</h2>
      <img src={props.image} />
      <div className="deck-list">
        <ul>
          <li>{props.list1}</li>
          <li>{props.list2}</li>
          <li>{props.list3}</li>
          {/* <li>{props.list4}</li> */}
        </ul>
      </div>
    </DeckCardContainer>
  );
};

export default DeckCard;
