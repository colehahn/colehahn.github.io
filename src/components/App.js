import React from "react";
import styled from "styled-components";
import "../App.css";
import Header from "./Header";
import Footer from "./Footer";
import Content from "./Content";

const AppDiv = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const App = () => {
  return (
    <AppDiv>
      <Header />
      <Content />
      <Footer />
    </AppDiv>
  );
};

export default App;
