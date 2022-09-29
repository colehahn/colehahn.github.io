import React from "react";
import styled from "styled-components";

export const MainLink: React.FC<{
  text: string;
  icon?: any;
  color?: string;
  // could also allow to change text color so that we can have darker backgrounds
  url: string;
}> = (props) => {
  const MainLinkDiv = styled.a`
    width: 25%;
    height: 3em;
    line-height: 3em;
    background-color: ${props.color ? props.color : "rgba(255,255,255,0.2)"};
    border-radius: 1em;
    margin: 1em;
    text-align: center;
  `;

  return (
    <MainLinkDiv href={props.url} target="_blank">
      <label>{props.text}</label>
    </MainLinkDiv>
  );
};

export default MainLink;
