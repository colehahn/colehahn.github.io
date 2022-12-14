import React from "react";
import styled from "styled-components";
import { StyledImg } from "../projects/Projects";

const RecipeDiv = styled.div`
  display: grid;
  grid-template-columns: 2fr;
  grid-template-rows: 1fr;
  margin-bottom: 0.5em;
`;

const RecipeText = styled.div`
  grid-column-start: 1;
  grid-row-start: 1;
`;

const RecipePhoto = styled.a`
  grid-column-start: 2;
  grid-row-start: 1;
`;

// TODO: add a description on each one?
// could also add a personal rating to each or something fun
export const Recipe: React.FC<{
  name: string;
  description: string;
  imgSrc: any;
  url: string;
}> = (props) => {
  return (
    <RecipeDiv>
      <RecipeText>
        <h5>{props.name}</h5>
        <p>{props.description}</p>
      </RecipeText>
      <RecipePhoto href={props.url} target="_blank">
        <StyledImg src={props.imgSrc} />
      </RecipePhoto>
    </RecipeDiv>
  );
};

export default Recipe;
