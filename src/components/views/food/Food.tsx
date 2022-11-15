import React from "react";
import { IoIosConstruct } from "react-icons/io";
import styled from "styled-components";
import Recipe from "./Recipe";

const CenterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3em;
`;

export const Food: React.FC = () => {
  return (
    <div>
      <h3>My Favorite Recipes</h3>
      <p>
        Everybody's gotta eat! Here are some of the things I have cooked, or
        like to cook.
      </p>
      <IoIosConstruct size="100" color="orange" />
      <p>
        This part of the site is still under construction.. i will be adding
        more recipes and fixing that button
      </p>
      <CenterDiv>
        <p>Click the button below to randomly select a recipe!</p>{" "}
        <button>Pick a recipe</button>
      </CenterDiv>
      <div>
        <Recipe
          name={"Gnocci with pomodoro Sauce"}
          imgSrc="https://www.foodiecrush.com/wp-content/uploads/2015/08/Gnocchi-With-Pomodoro-Sauce-foodiecrush.com-015.jpg"
          url={"https://www.foodiecrush.com/gnocchi-with-pomodoro-sauce/"}
        />
        <Recipe
          name={"Chickpea shakshuka"}
          imgSrc="https://minimalistbaker.com/wp-content/uploads/2016/08/AMAZING-Chickpea-SHAKSHUKA-1-Pot-30-minutes-so-much-plantprotein-vegan-glutenfree-plantbased-shakshuka-recipe-easy-healthy.jpg"
          url={"https://minimalistbaker.com/1-pot-chickpea-shakshuka/"}
        />
        <Recipe name={"Walnut tacos"} imgSrc="" url={""} />
      </div>
    </div>
  );
};

export default Food;
