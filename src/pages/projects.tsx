import React from "react";
import styled from "styled-components";
import Expander from "../components/common/expander/Expander";
import ExpanderList from "../components/common/expander/ExpanderList";
import Keyboard from "../components/views/projects/Keyboard";
import MobileGame from "../components/views/projects/MobileGame";
import AlarmShortcut from "../components/views/projects/AlarmShortcut";
import Budgeter from "../components/views/projects/Budgeter";
import GmailSQL from "../components/views/projects/GmailSQL";
import TileMapSerializer from "../components/views/projects/TileMapSerializer";

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
          summary={<h4>Unity Tilemap Serializer</h4>}
          content={<TileMapSerializer />}
        />

        <Expander summary={<h4>Python budgeter</h4>} content={<Budgeter />} />

        <Expander
          summary={<h4>SQL Gmail Explorer</h4>}
          content={<GmailSQL />}
        />

        <Expander
          summary={<h4>Alarm shortcut on iOS</h4>}
          content={<AlarmShortcut />}
        />

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
