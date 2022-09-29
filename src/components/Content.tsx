import React from "react";
import styled from "styled-components";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useTransition, animated, config } from "react-spring";
import Home from "./views/home/Home";
import About from "./views/about/About";
import Links from "./views/shortcuts/Links";
import Error from "./common/Error";
import Resume from "./views/resume/Resume";
import Projects from "./views/projects/Projects";
import { colors } from "../color-theme";

export const padding = screen.width / 20;

const ContentDiv = styled.div`
  flex-grow: 1;
  background: linear-gradient(
    lightgray 0%,
    ${colors.background} 20%,
    ${colors.background} 80%,
    lightgray 100%
  );
  padding-left: ${padding}px;
  padding-right: ${padding}px;
  overflow: hidden;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;

  & > * {
    grid-column-start: 1;
    grid-row-start: 1;

    width: 100%;
    margin-bottom: 3em;
    // helps with mobile
    max-width: ${screen.width > 1500
      ? `${screen.width * 0.7}px`
      : `${screen.width * 0.9}px`};
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

export const Content: React.FC = () => {
  // https://stackoverflow.com/questions/61692675/react-spring-how-to-chain-an-animation-in-a-child-component-after-a-parent-com
  const location = useLocation();
  const transitions = useTransition(location, {
    from: { opacity: 0, position: "static" as any },
    enter: { opacity: 1, position: "static" as any },
    leave: { opacity: 0, position: "absolute" as any },
    //config: { duration: 10000 },
  });
  return (
    <ContentDiv>
      {transitions((styles, item) => (
        <animated.div style={styles}>
          <Routes location={item}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/links" element={<Links />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/error" element={<Error />} />
            <Route path="*" element={<Navigate to="/error" replace />} />
          </Routes>
        </animated.div>
      ))}
    </ContentDiv>
  );
};

export default Content;
