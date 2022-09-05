import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  //margin: 20px;
  display: inline-block;
  padding-left: 20px;
  padding-right: 20px;
  line-height: 40px; // vertically align text
  text-align: center;
  text-decoration: none;
  color: black;
  background-color: ${(props) =>
    (props as any)[`data-currentpage`] === props.to
      ? `rgba(255, 255, 255, 0.2)`
      : `transparent`};

  transition: background-color 300ms;
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

export const HeaderLink: React.FC<{
  currentPage: string;
  to: string;
  label: any;
}> = (props) => {
  return (
    <StyledLink data-currentpage={props.currentPage} to={props.to}>
      {props.label}
    </StyledLink>
  );
};

export default HeaderLink;
