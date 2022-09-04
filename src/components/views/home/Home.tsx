import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useTransition, animated } from "react-spring";
import { FaGithub, FaLinkedin, FaFilePdf } from "react-icons/fa";
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

export const Home: React.FC<{ routeAnimating: boolean }> = (props) => {
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
      icon={<FaFilePdf size="100" />}
      onClick={(e) => navigate("/resume")}
    />,
  ];

  const transition = useTransition(tiles, {
    from: { x: 1000, opacity: 0 },
    enter: { x: 0, opacity: 1 },
    //leave: { x: -1000, opacity: 0 },
    trail: 200,
  });

  return (
    <div>
      <p>Welcome to Cole Hahn's personal website.</p>
      <TileGrid>
        {!props.routeAnimating &&
          transition((style, item) => (
            <animated.div style={style}>{item}</animated.div>
          ))}
      </TileGrid>
    </div>
  );
};

export default Home;
