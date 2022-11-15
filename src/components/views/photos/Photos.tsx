import React from "react";
import styled from "styled-components";
import { IoIosConstruct } from "react-icons/io";

// have it so that photos are loaded in lower quality, but you can click to view full quality
// (and it says "click to see full res") when you hover
// add a note that says its fine to use these photos as long as you give me credit/link back to site

export const Photos: React.FC = () => {
  return (
    <div>
      <h3>Photos</h3>
      <IoIosConstruct size="100" color="orange" />
      <p>
        This part of the site is still under construction.. I will be adding a
        gallery of my photos!
      </p>
    </div>
  );
};

export default Photos;
