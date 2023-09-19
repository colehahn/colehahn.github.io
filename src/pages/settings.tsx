import React from "react";
import styled from "styled-components";

const ThemeSelector = styled.button`
  width: 200px;
  height: 5em;
  padding: 0;
  border: none;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-family: inherit;
  font-size: inherit;
`;

export const themes = [
  {
    name: "dark",
    properties: [
      ["--primary", "rgb(53, 124, 127)"],
      ["--background", "#303030"],
      ["--background2", "#464646"],
      ["--text", "lightgray"],
      ["--accent", "rgba(226, 109, 92, 0.5)"],
      ["--transparent", "rgba(255, 255, 255, 0.1)"],
      ["--transparent-more-opaque", "rgba(255, 255, 255, 0.2)"],
    ],
  },
  {
    name: "light",
    properties: [
      ["--primary", "rgb(53, 124, 127)"],
      ["--background", "rgb(204, 215, 197)"],
      ["--background2", "lightgray"],
      ["--text", "black"],
      ["--accent", "rgba(226, 109, 92, 0.5)"],
      ["--transparent", "rgba(0, 0, 0, 0.1)"],
      ["--transparent-more-opaque", "rgba(0, 0, 0, 0.2)"],
    ],
  },
  {
    name: "midnight",
    properties: [
      ["--primary", "rgb(53, 124, 127)"],
      ["--background", "black"],
      ["--background2", "black"],
      ["--text", "lightgray"],
      ["--accent", "rgba(226, 109, 92, 0.5)"],
      ["--transparent", "rgba(255, 255, 255, 0.1)"],
      ["--transparent-more-opaque", "rgba(255, 255, 255, 0.2)"],
    ],
  },
];

export const setTheme = (i: number) => {
  localStorage.setItem("themeIndex", "" + i);
  for (const property of themes[i].properties) {
    document.documentElement.style.setProperty(property[0], property[1]);
  }
};

export const Settings: React.FC = () => {
  return (
    <div>
      <h3>Settings</h3>
      {themes.map((theme, i) => (
        <ThemeSelector
          onClick={() => setTheme(i)}
          key={i}
          style={{ backgroundColor: theme.properties[1][1] }}
        >
          <div style={{ display: "flex" }}>
            {theme.properties.map((property, i) => (
              <div
                style={{
                  width: `calc(200px / ${theme.properties.length})`,
                  height: "1em",
                  backgroundColor: property[1],
                }}
              ></div>
            ))}
          </div>
          <p style={{ textAlign: "center", width: "100%" }}>{theme.name}</p>
        </ThemeSelector>
      ))}
    </div>
  );
};

export default Settings;
