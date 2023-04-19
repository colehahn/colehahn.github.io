/*import React from "react";
import styled from "styled-components";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useTransition, animated, config } from "react-spring";
import Home from "./views/home/Home";
import About from "../../pages/about";
import Links from "../../pages/links";
import Error from "./common/Error";
import Resume from "../../pages/resume";
import Food from "./views/food/Food";
import Photos from "./views/photos/Photos";
import Projects from "../../pages/projects";

export const Content: React.FC = () => {
  // https://stackoverflow.com/questions/61692675/react-spring-how-to-chain-an-animation-in-a-child-component-after-a-parent-com
  const location = useLocation();
  const transitions = useTransition(location, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
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
            <Route path="/food" element={<Food />} />
            <Route path="/photos" element={<Photos />} />
            <Route path="/error" element={<Error />} />
            <Route path="*" element={<Navigate to="/error" replace />} />
          </Routes>
        </animated.div>
      ))}
    </ContentDiv>
  );
};

export default Content;
*/
export {};
