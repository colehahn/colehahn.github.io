import React from "react";
import styled from "styled-components";
import { colors } from "../../styles/color-theme";

const FooterDiv = styled.div`
  background: linear-gradient(${colors.background2} 0%, ${colors.primary} 10%);
  @media (prefers-color-scheme: dark) {
    background: linear-gradient(
      ${colors["background2-dark"]} 0%,
      ${colors.primary} 10%
    );
  }
  text-align: center;
`;

const StyledARight = styled.a`
  position: absolute;
  right: 2%;
`;

export const Footer: React.FC = () => {
  return (
    <FooterDiv>
      <label>created by Cole Hahn</label>
      <StyledARight href="mailto:colehahn2000@gmail.com">
        Contact Me
      </StyledARight>
    </FooterDiv>
  );
};

export default Footer;
