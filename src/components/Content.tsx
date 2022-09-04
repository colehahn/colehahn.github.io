import React from "react";
import styled from "styled-components";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./views/home/Home";
import About from "./views/about/About";
import Links from "./views/shortcuts/Links";
import Header from "./common/Header";
import Error from "./common/Error";
import Resume from "./views/resume/Resume";
import { colors } from "../color-theme";

const padding = screen.width / 20;

const HeaderAndContent = styled.div`
  flex-grow: 1;
  background-color: ${colors.background};
`;

const ContentDiv = styled.div`
  padding-left: ${padding}px;
  padding-right: ${padding}px;
  max-width: ${screen.width * 0.7}px;
  display: block;
  margin: auto;
`;

export const Content: React.FC = () => {
  return (
    <HeaderAndContent>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header currentPage="/" />
              <ContentDiv>
                <Home />
              </ContentDiv>
            </div>
          }
        />
        <Route
          path="/about"
          element={
            <div>
              <Header currentPage="/about" />
              <ContentDiv>
                <About />
              </ContentDiv>
            </div>
          }
        />
        <Route
          path="/links"
          element={
            <div>
              <Header currentPage="/links" />
              <ContentDiv>
                <Links />
              </ContentDiv>
            </div>
          }
        />
        <Route
          path="/resume"
          element={
            <div>
              <Header currentPage="/resume" />
              <ContentDiv>
                <Resume />
              </ContentDiv>
            </div>
          }
        />
        <Route
          path="/error"
          element={
            <div>
              <Header currentPage="/error" />
              <ContentDiv>
                <Error />
              </ContentDiv>
            </div>
          }
        />
        <Route path="*" element={<Navigate to="/error" replace />} />
      </Routes>
    </HeaderAndContent>
  );
};

export default Content;
