import React from "react";
import HeaderLink from "./HeaderLink";
import styled from "styled-components";
import logo from "../../images/my face.png";
import { colors } from "../../color-theme";
import { useLocation } from "react-router-dom";

const HEADER_HEIGHT_PX = screen.height / 12;

const HeaderDiv = styled.div`
  background: linear-gradient(${colors.primary} 90%, lightgray 100%);
  height: ${HEADER_HEIGHT_PX}px;
  position: relative;
  display: flex;
  flex-direction: row;
`;

const HeaderImg = styled.img`
  display: inline-block;
  height: ${HEADER_HEIGHT_PX}px !important;
`;

const ButtonsOnButton = styled.div`
  display: flex;
  flex-direction: column-reverse;
`;

const LinkContainer = styled.div`
  margin-left: 50px;
`;

export const Header: React.FC = () => {
  const location = useLocation();
  const props = { currentPage: location.pathname };
  return (
    <HeaderDiv>
      <HeaderLink
        currentPage={props.currentPage}
        to="/"
        label={<HeaderImg src={logo} />}
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
            to="/about"
            label="About Me"
          />
          <HeaderLink
            currentPage={props.currentPage}
            to="/links"
            label="My Shortcuts"
          />
        </LinkContainer>
      </ButtonsOnButton>
    </HeaderDiv>
  );
};

export default Header;
