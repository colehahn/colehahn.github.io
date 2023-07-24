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

  &::after {
    content: "";
    position: absolute;
    top: -3px;
    left: -3px;
    right: -3px;
    bottom: -3px;
    border-radius: inherit;
    background: linear-gradient(
      60deg,
      #f79533,
      #f37055,
      #ef4e7b,
      #a166ab,
      #5073b8,
      #1098ad,
      #07b39b,
      #6fba82
    );
    background-size: 300% 300%;
    animation: animatedgradient 3s ease alternate infinite;
    z-index: -1;
  }

  @keyframes animatedgradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

//background: linear-gradient(60deg, ${/*colors.primary}, ${colors.accent*/});

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
