import React from "react";
import styled from "styled-components";
import "../App.css";
import Footer from "./common/Footer";
import Content from "./Content";

const AppDiv = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const App: React.FC = () => {
  return (
    <AppDiv>
      <Content />
      <Footer />
    </AppDiv>
  );
};

export default App;
