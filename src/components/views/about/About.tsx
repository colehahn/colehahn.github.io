import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  background-color: gray;
`;

export const About: React.FC = () => {
  // TODO: could also add social media links in about page
  return (
    <div>
      <h3>About</h3>
      <p>
        I was born and raised in Washington state, and currently go to school at
        the University of Washington, where I am studying computer engineering.
        I like computers because they can solve complex problems which we could
        never solve manually, and I think it's important to use computers to
        work on solutions for the world's many problems.
      </p>
      <p>
        In my free time, I like to go hiking/camping, sailing, or just spend
        time outside (when the weather is nice of course). I enjoy taking
        pictures, especially of the night sky. I am happily engaged to an
        amazing woman, who, unfortunately, lives across the country from me
        currently.
      </p>
      <p>Here are some pictures of me doing some of my favorite activities:</p>
      <img src="need_to_add_photos!" alt="oops, still need to add photos" />
    </div>
  );
};

export default About;
