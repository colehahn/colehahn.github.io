import React from "react";
const photo_loveland = "/assets/images/IMG_7107.JPG";
const photo_hawaii = "/assets/images/IMG_8370.JPG";
const milky_way1 = "/assets/images/IMG_5159 better.JPG";
const milky_way2 = "/assets/images/IMG_8322.JPG";
import styled from "styled-components";

const ImgStyled = styled.img`

&[data-vertical="true"] {
  height 63vw;
  width: auto !important;
}

  width: 70%;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 10%;
`;

export const About: React.FC = () => {
  // TODO: could also add social media links in about page
  return (
    <div>
      <h3>About</h3>
      <p>
        I was born and raised in Washington state, and I graduated from the
        University of Washington in 2023, with a B.S. in Computer Engineering.
        Since then, I've been living it up on the East Coast for the summer,
        until October when I will return to Washington for work.
      </p>
      <p>
        I like working on coding projects--including this website! In my free
        time though, I like to go hiking/camping, sailing, or just spend time
        outside (when the weather is nice of course). I think the world would be
        a much better place if everybody had a deeper respect for nature. I
        enjoy taking pictures, especially of the night sky. I am happily engaged
        to an amazing woman, and we will be getting married next summer!
      </p>
      <p>Here are some photos:</p>
      <ImgStyled alt="photo of me in Colorado" src={String(photo_loveland)} />
      <ImgStyled
        alt="photo of me and Sadie in Hawaii"
        src={String(photo_hawaii)}
      />
      <ImgStyled
        data-vertical="true"
        alt="edited photo of milky way"
        src={String(milky_way1)}
      />
      <ImgStyled
        alt="photo of milky way during lunar eclipse"
        src={String(milky_way2)}
      />
    </div>
  );
};

export default About;
