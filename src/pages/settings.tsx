import React from "react";
import styled from "styled-components";

export const themes = [
  {
    name: "dark",
    properties: {
      "--primary": "rgb(53, 124, 127)",
      "--background": "#303030",
      "--background2": "#464646",
      "--text": "lightgray",
      "--accent": "rgba(226, 109, 92, 0.5)",
      "--transparent": "rgba(255, 255, 255, 0.1)",
      "--transparent-more-opaque": "rgba(255, 255, 255, 0.2)",
    },
  },
  {
    name: "light",
    properties: {
      "--primary": "rgb(53, 124, 127)",
      "--background": "rgb(204, 215, 197)",
      "--background2": "lightgray",
      "--text": "black",
      "--accent": "rgba(226, 109, 92, 0.5)",
      "--transparent": "rgba(0, 0, 0, 0.1)",
      "--transparent-more-opaque": "rgba(0, 0, 0, 0.2)",
    },
  },
  {
    name: "midnight",
    properties: {
      "--primary": "rgb(53, 124, 127)",
      "--background": "black",
      "--background2": "black",
      "--text": "lightgray",
      "--accent": "rgba(226, 109, 92, 0.5)",
      "--transparent": "rgba(255, 255, 255, 0.1)",
      "--transparent-more-opaque": "rgba(255, 255, 255, 0.2)",
    },
  },
];

const ThemeSelector = styled.button`
  width: 200px;
  height: 5em;
  padding: 0;
  border: 2px solid var(--text);
  border-radius: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: inherit;
  font-size: inherit;
  overflow: hidden;
  position: relative;
  cursor: pointer;

  transition: scale 300ms;
  &:hover {
    scale: 1.3;
    z-index: 1;
  }
`;

const ThemeSelectorContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

const ThemeLabel = styled.p`
  padding: 0;
  margin: 0;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 100%;
`;

export const setTheme = (i: number) => {
  localStorage.setItem("themeIndex", "" + i);
  for (const property of Object.keys(themes[i].properties)) {
    document.documentElement.style.setProperty(
      property,
      (themes[i].properties as any)[property]
    );
  }
};

export const Settings: React.FC = () => {
  return (
    <div>
      <h3>Settings</h3>
      <h4>Theme:</h4>
      <ThemeSelectorContainer>
        {themes.map((theme, i) => (
          <ThemeSelector
            onClick={() => setTheme(i)}
            key={i}
            style={{
              background: `linear-gradient(${theme.properties["--primary"]} 0 10%, ${theme.properties["--background2"]} 10%, ${theme.properties["--background"]} 30% 70%, ${theme.properties["--background2"]})`,
              color: theme.properties["--text"],
            }}
          >
            <ThemeLabel>{theme.name}</ThemeLabel>
          </ThemeSelector>
        ))}
      </ThemeSelectorContainer>
    </div>
  );
};

export default Settings;
