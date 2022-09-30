import React from "react";
import styled from "styled-components";
import { animated } from "react-spring";
import useBoop from "../../../hooks/useBoop";

const StyledImg = styled.img`
  height: 2em;
  margin-left: 1em;
`;

export const MainLink: React.FC<{
  text: string;
  imgSrc?: any;
  color?: string;
  // could also allow to change text color so that we can have darker backgrounds
  url: string;
}> = (props) => {
  const MainLinkDiv = styled.a`
    padding: 0.5em;
    background-color: ${props.color ? props.color : "rgba(255,255,255,0.2)"};
    border-radius: 1em;
    margin: 1em;
    text-align: center;

    display: flex;
    justify-content: center;
    align-items: center;

    box-shadow: 0px 8px 24px;
    border: 2px solid gray;
  `;

  const [style, trigger] = useBoop({ scale: 1.05 });

  return (
    <animated.span onMouseEnter={trigger as any} style={style as any}>
      <MainLinkDiv href={props.url} target="_blank">
        <label style={{ cursor: "pointer" }}>{props.text}</label>
        {props.imgSrc && <StyledImg src={props.imgSrc} />}
      </MainLinkDiv>
    </animated.span>
  );
};

export default MainLink;
