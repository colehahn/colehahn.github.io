import React from "react";
import styled from "styled-components";
import { colors } from "../../../color-theme";

const TileDiv = styled.a`
  background-color: lightgray;
  min-width: 15vw;
  padding: 10px;
  margin: 10px;
  border: 3px solid gray;
  border-radius: 25px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;
  display: flex;
  flex-direction: column;
  text-align: center;

  text-decoration: none;
  color: inherit;

  transition: background-color 400ms;
  &:hover {
    background-color: ${colors.accent};
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
