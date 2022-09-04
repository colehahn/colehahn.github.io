import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
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

export const Home: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <p>Welcome to Cole Hahn's personal website.</p>
      <TileGrid>
        <Tile
          text="See me on Github"
          icon={<FaGithub size="100" />}
          onClick={(e) => openInNewTab("https://github.com/colehahn")}
        />
        <Tile
          text="See me on Linkedin"
          icon={<FaLinkedin size="100" />}
          onClick={(e) =>
            openInNewTab("https://www.linkedin.com/in/cole-hahn-619951248/")
          }
        />
        <Tile
          text="View my resume"
          icon={<FaFilePdf size="100" />}
          onClick={(e) => navigate("/resume")}
        />
      </TileGrid>
    </div>
  );
};

export default Home;
