import React from "react";
import styled from "styled-components";
import { colors } from "../../../color-theme";

const TileDiv = styled.a`
  background-color: ${colors.background2};
  @media (prefers-color-scheme: dark) {
    background-color: ${colors["background2-dark"]};
  }
  min-width: 15vw;
  padding: 10px 20px;
  margin: 10px;
  border-radius: 20px;
  border-top-right-radius: 50px;
  border-bottom-left-radius: 50px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 8px 24px;
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;

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
    <TileDiv className="gradient-border" onClick={(e) => props.onClick(e)}>
      <label>{props.text}</label>
      <br />
      {props.icon}
    </TileDiv>
  );
};

export default Tile;
