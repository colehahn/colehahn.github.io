import React from "react";
import styled from "styled-components";

const TileDiv = styled.button`
  border: none;
  font-size: inherit;
  font-family: inherit;

  background-color: var(--background2);
  @media (prefers-color-scheme: dark) {
    background-color: var(--background2-dark);
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
    background-color: var(--accent);
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
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.onClick(e);
      }}
    >
      <TileDiv type="submit" className="gradient-border">
        <label>{props.text}</label>
        <br />
        {props.icon}
      </TileDiv>
    </form>
  );
};

export default Tile;
