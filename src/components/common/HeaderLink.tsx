import React from "react";
import styled from "styled-components";
import { colors } from "../../color-theme";
import { useRouter } from "next/router";

const StyledLink = styled.a`
  //margin: 20px;
  display: inline-block;
  padding-left: 20px;
  padding-right: 20px;
  line-height: 40px; // vertically align text
  text-align: center;
  text-decoration: none;
  color: black;
  border-radius: 50px;
  background-color: ${(props: any) =>
    (props as any)[`data-currentpage`] === props.to
      ? `${colors.accent}`
      : `rgba(255, 255, 255, 0.2)`};
  height: max-content;

  transition: background-color 300ms;
  &:hover {
    background-color: ${(props: any) =>
      (props as any)[`data-currentpage`] === props.to
        ? `${colors.accent}`
        : `rgba(255, 255, 255, 0.1)`};
  }
`;

export const HeaderLink: React.FC<{
  currentPage: string;
  to: string;
  label: any;
}> = (props) => {
  const router = useRouter();
  return (
    <StyledLink data-currentpage={props.currentPage} href={props.to}>
      {props.label}
    </StyledLink>
  );
};

export default HeaderLink;
