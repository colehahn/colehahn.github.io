import React from "react";
import styled from "styled-components";

const ResumeDiv = styled.div`
  width: 100%;
  display: block;
`;

const ResumeViewer = styled.iframe`
  display: block;
  height: 100vw;
  width: 100%;
`;

export const Resume: React.FC = () => {
  let reader = new FileReader();

  return (
    <ResumeDiv>
      <p>Here is a recent version of my resume:</p>
      {/* big thank you to Mozilla PDF.js for letting us show pdfs on all browsers 
       
       in the future, it would be cooler to have a web version of my resume instead of a pdf
       that is interactable, animated, and shows off my frontend skills*/}
      <ResumeViewer src="web/viewer.html?file=/Resume--Cole Hahn.pdf" />
      <br />
    </ResumeDiv>
  );
};

export default Resume;
