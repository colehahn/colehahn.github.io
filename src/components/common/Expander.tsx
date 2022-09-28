import React, { ReactNode } from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";

/*
I started out using <details> and <summary> because this is what I wanted.
Then I realized I wanted them to be animated, which means I basically had to 
override most of the default behaviour, and it might have been better to start
from scratch.
issue with getting NaN on first animation, but it seems to work!
we should also animate the little arrow turning down by getting rid of it and adding our own
*/

const StyledDetails = styled.details`
  :not([open]) summary {
    background-color: lightgray;
  }
  & summary {
    background-color: gray;
  }

  transition: all 0.3s;
`;

const StyledSummary = styled.summary`
  cursor: pointer;

  & > * {
    display: inline;
  }
`;

export const Expander: React.FC<{
  summary: ReactNode;
  content: ReactNode;
  open?: boolean;
}> = (props) => {
  const reference = React.useRef<HTMLDivElement>(null);

  const [isOpen, setOpen] = React.useState(true); // they all start open so that we can calculate their height
  const [contentHeight, setContentHeight] = React.useState(-1);

  React.useEffect(() => {
    if (reference.current) {
      console.log(reference.current.offsetHeight);
      setContentHeight(reference.current.offsetHeight);
    }

    setOpen(props.open || false);
  }, []);

  const springStyle = useSpring({
    overflow: "hidden",
    height: contentHeight === -1 ? "auto" : isOpen ? contentHeight : 0,
  });

  return (
    <StyledDetails
      open
      onClick={(e) => {
        e.preventDefault();
        setOpen(!isOpen);
      }}
    >
      <StyledSummary>{props.summary}</StyledSummary>
      <animated.div ref={reference} style={springStyle}>
        {props.content}
      </animated.div>
    </StyledDetails>
  );
};

export default Expander;
