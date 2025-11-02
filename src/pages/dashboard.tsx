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
        href="https://water.weather.gov/ahps2/hydrograph.php?wfo=sew&gage=snzw1"
        target="_blank"
      >
        <StyledImg src="https://apps.ecology.wa.gov/ContinuousFlowAndWQ/StationData/Prod/05B090/05B090_STG_SD.PNG"></StyledImg>
      </a>
      <a
        href="https://water.weather.gov/ahps2/hydrograph.php?wfo=sew&gage=argw1"
        target="_blank"
      >
        <StyledImg src="https://waterdata.usgs.gov/nwisweb/graph?agency_cd=USGS&site_no=12167000&parm_cd=00065&period=7"></StyledImg>
      </a>
    </div>
  );
};

export default Dashboard;
