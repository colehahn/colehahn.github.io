import React from "react";
import { IoIosConstruct } from "react-icons/io";
import styled from "styled-components";
import Recipe from "../components/views/food/Recipe";

const CenterDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 3em;
`;

export const Eats: React.FC = () => {
  return (
    <div>
      <h3>What's Cooking?</h3>
      <p>
        Everybody's gotta eat! Here are some of the things I've eaten lately.
      </p>
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
          name="Sadie's spinach and sun-dried tomato baked chicken"
          description="Two chicken breasts. Slice them thin, but not all the way through (flaps open like a book). Put in casserole dish and season with a lot of sundried tomatoes (quarter cup, with the oil), fresh jarlic (heaping spoon and a half), red pepper, rosemary, basil, pepper. Lean towards overseasoning. Cook for about 15-20min at 400F. Take it out and stuff in spinach all over. Put lid on and return to oven for about 10 minutes to cook down the spinach. Then take out again and put mozzeralla on top. Return to oven to melt cheese. For us, we left it in the oven too long so the cheese got super crispy and it was delicous."
        />
        <Recipe
          name="Sadie's brussel sprout hodge-podge bake"
          description="Colorful oven roasted veggies with kielbasa. This bake had potatoes, broccoli, colorful carrots, kielbasa, and was seasoned with rosemary. Stick it in the oven for a bit and it's a nice simple meal, and very tasty!"
        />
        <Recipe
          name={"Sadie's cottage pie"}
          description="This cottage pie was to die for! Basically like a delicious veggie stew covered with mashed potatoes."
        />
        <Recipe
          name={"Gnocci with pomodoro Sauce"}
          description="I love making this recipe for my family! If you make the gnocci from scratch, the whole process can take quite some time."
          imgSrc="https://www.foodiecrush.com/wp-content/uploads/2015/08/Gnocchi-With-Pomodoro-Sauce-foodiecrush.com-015.jpg"
          url={"https://www.foodiecrush.com/gnocchi-with-pomodoro-sauce/"}
        />
        <Recipe
          name={"Chickpea shakshuka"}
          description="When I didn't have other spices, I would use taco seasoning as a substitute, but this always made it so salty!"
          imgSrc="https://minimalistbaker.com/wp-content/uploads/2016/08/AMAZING-Chickpea-SHAKSHUKA-1-Pot-30-minutes-so-much-plantprotein-vegan-glutenfree-plantbased-shakshuka-recipe-easy-healthy.jpg"
          url={"https://minimalistbaker.com/1-pot-chickpea-shakshuka/"}
        />
        <Recipe
          name={"Walnut tacos"}
          description="A vegetarian option for tacos!"
        />
      </div>
    </div>
  );
};

export default Eats;
