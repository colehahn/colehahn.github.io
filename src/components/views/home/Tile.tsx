import React from "react";
import styled from "styled-components";

const TileDiv = styled.a`
  background-color: lightgray;
  min-width: 15vw;
  padding: 10px;
  margin: 10px;
  border: 3px solid gray;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  text-align: center;

  text-decoration: none;
  color: inherit;

  transition: background-color 300ms;
  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }

  & svg {
    display: block;
    margin: auto;
  }
`;

export const Tile: React.FC<{
  text: string;
  icon: any;
  onClick: (e: any) => void;
}> = (props) => {
  return (
    <TileDiv onClick={(e) => props.onClick(e)}>
      <label>{props.text}</label>
      <br />
      {props.icon}
    </TileDiv>
  );
};

export default Tile;
