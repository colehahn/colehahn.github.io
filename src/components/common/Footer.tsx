import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  background: linear-gradient(var(--background2) 0%, var(--primary) 10%);
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
