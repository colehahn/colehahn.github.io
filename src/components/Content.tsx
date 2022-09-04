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
  background-color: ${colors.background};
  padding-left: ${padding}px;
  padding-right: ${padding}px;

  & > * {
    max-width: ${screen.width * 0.7}px;
    display: block;
    margin: auto;
  }
`;

export const Content: React.FC = () => {
  const location = useLocation();
  const transitions = useTransition(location, {
    from: { position: "absolute" as any, opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
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
            <Route path="/error" element={<Error />} />
            <Route path="*" element={<Navigate to="/error" replace />} />
          </Routes>
        </animated.div>
      ))}
    </ContentDiv>
  );
};

export default Content;
