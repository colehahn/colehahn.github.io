import React from "react";
import Expander from "../../common/Expander";
import Keyboard from "./Keyboard";

export const Projects: React.FC = () => {
  return (
    <div>
      <h3>Here are some of my projects:</h3>

      <Expander
        summary={<h4>Creating a mobile game with Unity</h4>}
        content={<p>details will be added soon...</p>}
      />

      <Expander
        summary={<h4>Arduino temperature plotter</h4>}
        content={<p>details will be added soon...</p>}
      />

      <Expander
        summary={<h4>Building a mechanical keyboard</h4>}
        content={<Keyboard />}
      />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Projects;
