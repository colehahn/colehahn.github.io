import React from "react";
import HeaderLink from "./HeaderLink";
import styled from "styled-components";
const logo = "/assets/images/my face.png";
import { useRouter } from "next/router";

const HeaderDiv = styled.div`
  padding-bottom: calc(12vh * 0.05);
  background: linear-gradient(var(--primary) 95%, var(background2) 100%);
  @media (prefers-color-scheme: dark) {
    background: linear-gradient(
      var(--primary) 95%,
      var(--background2-dark) 100%
    );
  }
  min-height: 12vh;
  position: relative;
  display: flex;
  flex-direction: row;
`;

const ImgAndTitle = styled.div`
  display: flex;
  line-height: 30px !important;

  & > * {
    margin: 0px;
    font-family: "Comic Sans MS", cursive, sans-serif;
  }
`;

const HeaderImg = styled.img`
  display: inline-block;
  height: 12vh !important;
`;

const ButtonsOnButton = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

const LinkContainer = styled.div`
  margin-left: 50px;
`;

export const Header: React.FC = () => {
  const router = useRouter();
  const props = { currentPage: router.pathname };
  return (
    <HeaderDiv>
      <HeaderLink
        currentPage={props.currentPage}
        to="/"
        label={
          <ImgAndTitle>
            <HeaderImg src={logo} />
            <h2>
              Cole
              <br />
              Hahn
            </h2>
          </ImgAndTitle>
        }
      />
      <ButtonsOnButton>
        <LinkContainer>
          <HeaderLink
            currentPage={props.currentPage}
            to="/resume"
            label="Résumé"
          />
          <HeaderLink
            currentPage={props.currentPage}
            to="/projects"
            label="Projects"
          />
          <HeaderLink
            currentPage={props.currentPage}
            to="/about"
            label="About Me"
          />
        </LinkContainer>
      </ButtonsOnButton>
    </HeaderDiv>
  );
};
/*
          <HeaderLink
            currentPage={props.currentPage}
            to="/food"
            label="What's Cooking?"
          />
          <HeaderLink
            currentPage={props.currentPage}
            to="/photos"
            label="Photos"
          />
          */

export default Header;
