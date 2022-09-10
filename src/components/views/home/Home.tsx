import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import { FaGithub, FaLinkedin, FaFileAlt } from "react-icons/fa";
import Tile from "./Tile";

//TODO: make tiles animate onto screen

const TileGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

const openInNewTab = (url: string) => {
  var win = window.open(url, "_blank");
  if (win) {
    win.focus();
  }
};

export const Home: React.FC = () => {
  const navigate = useNavigate();

  const tiles = [
    <Tile
      key="github"
      text="See me on Github"
      icon={<FaGithub size="100" />}
      onClick={(e) => openInNewTab("https://github.com/colehahn")}
    />,
    <Tile
      key="linkedin"
      text="See me on Linkedin"
      icon={<FaLinkedin size="100" />}
      onClick={(e) =>
        openInNewTab("https://www.linkedin.com/in/cole-hahn-619951248/")
      }
    />,
    <Tile
      key="resume"
      text="View my resume"
      icon={<FaFileAlt size="100" />}
      onClick={(e) => navigate("/resume")}
    />,
  ];

  const transition = useTransition(tiles, {
    from: { x: 100, opacity: 0 },
    enter: { x: 0, opacity: 1 },
    //leave: { x: -1000, opacity: 0 },
    config: {},
    delay: 700, //delay needs to be longer than the duration of the route transition in
    trail: 200,
  });

  return (
    <div>
      <p>Welcome to my personal website!</p>
      <TileGrid>
        {transition((style, item) => (
          <animated.div style={style}>{item}</animated.div>
        ))}
      </TileGrid>
    </div>
  );
};

export default Home;
