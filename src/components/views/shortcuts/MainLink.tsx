import React from "react";
import styled from "styled-components";

const StyledImg = styled.img`
  height: 2em;
  margin-left: 1em;
  pointer-events: none;
`;

const MainLinkDiv = styled.a`
  padding: 0.5em;
  background-color: rgba(255, 255, 255, 0.2);
  background-color: ${(propss: any) => propss["data-color"]};
  border-radius: 1em;
  margin: 1em;
  text-align: center;

  display: flex;
  justify-content: center;
  align-items: center;

  box-shadow: 0px 8px 24px var(--background2);
  border: 2px solid gray;

  &:hover {
    transform: scale(1.03);
  }
  &:active {
    transform: translateY(2px);
  }
  transition: all 100ms;
`;

export const MainLink: React.FC<{
  text: string;
  imgSrc?: any;
  color?: string;
  // could also allow to change text color so that we can have darker backgrounds
  url: string;
}> = (props) => {
  return (
    <MainLinkDiv href={props.url} data-color={props.color} target="_blank">
      <label style={{ cursor: "pointer" }}>{props.text}</label>
      {props.imgSrc && <StyledImg src={props.imgSrc} />}
    </MainLinkDiv>
  );
};

export default MainLink;
