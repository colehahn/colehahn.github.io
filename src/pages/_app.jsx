import Head from "next/head";
import styled from "styled-components";
import "../styles/index.css";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import { device } from "../utils/device";
import "../styles/gradient-border.css";

const AppDiv = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  @media (prefers-color-scheme: dark) {
    color: var(--text-dark);
  }
`;

const ComponentDiv = styled.div`
  flex-grow: 1;
  background: linear-gradient(
    var(--background2) 0%,
    var(--background) 20%,
    var(--background) 80%,
    var(--background2) 100%
  );
  @media (prefers-color-scheme: dark) {
    background: linear-gradient(
      var(--background2-dark) 0%,
      var(--background-dark) 20%,
      var(--background-dark) 80%,
      var(--background2-dark) 100%
    );
  }
  padding-left: 5vw;
  padding-right: 5vw;
  overflow: hidden;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  position: relative;
  z-index: 0;

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
      <Head>
        <title>Cole Hahn's Website</title>
        <meta name="description" content="Cole Hahn's personal website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#357c7f" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <ComponentDiv>
        <Component {...pageProps} />
      </ComponentDiv>
      <Footer />
    </AppDiv>
  );
}
