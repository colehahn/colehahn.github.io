import React from "react";
import styled from "styled-components";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import Home from "./views/home/Home";
import About from "./views/about/About";
import Links from "./views/shortcuts/Links";
import Error from "./common/Error";
import Resume from "./views/resume/Resume";
import { colors } from "../color-theme";

const padding = screen.width / 20;

const ContentDiv = styled.div`
  flex-grow: 1;
  background: linear-gradient(
    lightgray 0%,
    ${colors.background} 10%,
    ${colors.background} 90%,
    lightgray 100%
  );
  padding-left: ${padding}px;
  padding-right: ${padding}px;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  & > * {
    grid-column-start: 1;
    grid-row-start: 1;

    max-width: ${screen.width * 0.7}px;
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Content: React.FC = () => {
  // https://stackoverflow.com/questions/61692675/react-spring-how-to-chain-an-animation-in-a-child-component-after-a-parent-com
  const [animating, setAnimating] = React.useState(false);
  const location = useLocation();
  const transitions = useTransition(location, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    onStart: () => setAnimating(true),
    onRest: () => setAnimating(false),
  });
  return (
    <ContentDiv>
      {transitions((styles, item) => (
        <animated.div style={styles}>
          <Routes location={item}>
            <Route path="/" element={<Home routeAnimating={animating} />} />
            <Route path="/about" element={<About />} />
            <Route path="/links" element={<Links />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/error" element={<Error />} />
            <Route path="*" element={<Navigate to="/error" replace />} />
          </Routes>
        </animated.div>
      ))}
    </ContentDiv>
  );
};

export default Content;
