import React from "react";
import styled from "styled-components";

const ContentDiv = styled.div`
  flex-grow: 1;
`;

export const Content: React.FC = () => {
  return (
    <ContentDiv>
      Content: use react router. home page will be plain landing page, will have
      pages for about, links for school
    </ContentDiv>
  );
};

export default Content;
