import styled from "styled-components";
import "../src/index.css";
import Header from "../src/components/common/Header";
import Footer from "../src/components/common/Footer";
import { colors } from "../src/color-theme";
import { device } from "../src/utils/device";

const AppDiv = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const ComponentDiv = styled.div`
  flex-grow: 1;
  background: linear-gradient(
    lightgray 0%,
    ${colors.background} 20%,
    ${colors.background} 80%,
    lightgray 100%
  );
  padding-left: 5vw;
  padding-right: 5vw;
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
    max-width: 90vw;
    @media ${device.laptop} {
      max-width: 70vw;
    }
    display: block;
    margin-left: auto;
    margin-right: auto;
  }
`;

export default function MyApp({ Component, pageProps }) {
  return (
    <AppDiv>
      <Header />
      <ComponentDiv>
        <Component {...pageProps} />
      </ComponentDiv>
      <Footer />
    </AppDiv>
  );
}
