import React from "react";
import styled from "styled-components";
import Expander from "../../common/expander/Expander";
import ExpanderList from "../../common/expander/ExpanderList";
import Keyboard from "./Keyboard";
import MobileGame from "./MobileGame";

export const StyledImg = styled.img`
  width: 300px;
  height: 300px;
  object-fit: cover;

  display: block;
  margin-left: auto;
  margin-right: auto;
`;

export const Projects: React.FC = () => {
  return (
    <div>
      <h3>Here are some of my projects:</h3>

      <ExpanderList>
        <Expander
          summary={<h4>Creating a mobile game with Unity</h4>}
          content={<MobileGame />}
        />

        <Expander
          summary={<h4>Arduino temperature plotter</h4>}
          content={<p>details will be added soon...</p>}
        />

        <Expander
          summary={<h4>Building a mechanical keyboard</h4>}
          content={<Keyboard />}
        />
      </ExpanderList>
    </div>
  );
};

export default Projects;
