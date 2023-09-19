import React from "react";
import styled from "styled-components";

const StyledLink = styled.a`
  //margin: 20px;
  display: inline-block;
  padding-left: 20px;
  padding-right: 20px;
  line-height: 40px; // vertically align text
  text-align: center;
  text-decoration: none;
  border-radius: 50px;
  background-color: ${(propss: any) =>
    propss[`data-currentpage`] === propss[`data-to`]
      ? "var(--accent)"
      : `var(--transparent-more-opaque)`};
  height: max-content;

  transition: background-color 300ms;
  &:hover {
    background-color: ${(propss: any) =>
      propss[`data-currentpage`] === propss[`data-to`]
        ? `var(--accent)`
        : `var(--transparent)`};
  }
`;

export const HeaderLink: React.FC<{
  currentPage: string;
  to: string;
  label: any;
}> = (props) => {
  return (
    <StyledLink
      data-currentpage={props.currentPage}
      data-to={props.to}
      href={props.to}
    >
      {props.label}
    </StyledLink>
  );
};

export default HeaderLink;
