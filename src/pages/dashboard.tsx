import React from "react";
import styled from "styled-components";

const StyledImg = styled.img`
  max-width: 90vw;
`;

export const Dashboard: React.FC = () => {
  // TODO: could also add social media links in about page
  return (
    <div>
      <h3>Dashboard</h3>
      <p>Here are some graphs to monitor river levels.</p>
      <a
        href="https://water.weather.gov/ahps2/hydrograph.php?wfo=sew&gage=sncw1"
        target="_blank"
      >
        <StyledImg src="https://water.weather.gov/resources/hydrographs/sncw1_hg.png"></StyledImg>
      </a>
      <a
        href="https://water.weather.gov/ahps2/hydrograph.php?wfo=sew&gage=snfw1"
        target="_blank"
      >
        <StyledImg src="https://water.weather.gov/resources/hydrographs/snfw1_hg.png"></StyledImg>
      </a>
      <a
        href="https://water.weather.gov/ahps2/hydrograph.php?wfo=sew&gage=argw1"
        target="_blank"
      >
        <StyledImg src="https://water.weather.gov/resources/hydrographs/argw1_hg.png"></StyledImg>
      </a>
    </div>
  );
};

export default Dashboard;
