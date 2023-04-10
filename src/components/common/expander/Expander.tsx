import React, { ReactNode } from "react";
import { animated, useSpring } from "react-spring";
import styled from "styled-components";
import useBoop from "../../../hooks/useBoop";

/*
I started out using <details> and <summary> because this is what I wanted.
Then I realized I wanted them to be animated, which means I basically had to 
override most of the default behaviour, and it might have been better to start
from scratch.
issue with getting NaN on first animation, but it seems to work!
we should also animate the little arrow turning down by getting rid of it and adding our own
*/

const borderRadius = "1.5em";

const StyledDetails = styled.details`
  // height controlled with spring
  background-color: rgba(0, 0, 0, 0.1);
  border: 3px solid rgba(255, 255, 255, 0.3);
  margin-top: 0.4em;
  border-radius: ${borderRadius};
`;

const StyledSummary = styled(animated.summary)`
  // background-color controlled with spring
  border-radius: ${borderRadius};
  padding-left: 1em;
  cursor: pointer;
  display: flex;
  justify-content: space-between;

  & > * {
    margin-top: auto;
    margin-bottom: auto;
  }

  ::marker {
    color: transparent !important;
  }
`;

const ArrowDiv = styled(animated.div)`
  // rotation controlled by spring
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  font-size: 1.5em;
  width: 1.5em;
  user-select: none;
`;

const StyledContent = styled(animated.div)`
  padding-left: 1em;
`;

export const Expander: React.FC<{
  summary: ReactNode;
  content: ReactNode;
  open?: boolean;
  onClick?: any; // optional, used by ExpanderList
}> = (props) => {
  const reference = React.useRef<HTMLDivElement>(null);

  const [isOpen, setOpen] = React.useState(true); // they all start open so that we can calculate their height
  const [contentHeight, setContentHeight] = React.useState(-1);
  const [isBoopSpringEnabled, setBoopSpringEnabled] = React.useState(true);

  const onResize = () => {
    if (reference.current) {
      const oldheight = reference.current.style.getPropertyValue("height");
      reference.current.style.setProperty("height", "auto");
      setContentHeight(reference.current.offsetHeight);
      reference.current.style.setProperty("height", oldheight);
    }
  };

  React.useEffect(() => {
    // on mount
    if (reference.current) {
      setContentHeight(reference.current.offsetHeight);
    }
    setOpen(props.open || false);
    window.addEventListener("resize", onResize);

    // on unmount
    return () => {
      window.removeEventListener("resize", onResize);
    };
  }, []);

  React.useEffect(() => {
    setOpen(props.open || false);
  }, [props.open]);

  const springStyle = useSpring({
    overflow: "hidden",
    height: contentHeight === -1 ? "auto" : isOpen ? contentHeight : 0,
  });

  const arrowStyle = useSpring({
    transform: isOpen ? "rotate(180deg)" : "rotate(270deg)",
  });

  const summaryStyle = useSpring({
    "background-color": isOpen ? "rgba(0,0,0,0.1)" : "rgba(0,0,0,0.2)",
  });

  const [style, trigger] = useBoop({
    rotation: 10,
    defaultRotation: isOpen ? 180 : 270,
    scale: 1.1,
  });

  return (
    <StyledDetails open>
      <StyledSummary
        onMouseEnter={trigger as any}
        style={
          summaryStyle as any /*"as any" is a gross hack that shouldn't be needed*/
        }
        onClick={(e) => {
          e.preventDefault();
          setBoopSpringEnabled(false);
          setTimeout(() => {
            setBoopSpringEnabled(true);
          }, 1000);
          props.onClick ? props.onClick() : setOpen(!isOpen);
        }}
      >
        {props.summary}
        <ArrowDiv style={isBoopSpringEnabled ? (style as any) : arrowStyle}>
          &#9650;
        </ArrowDiv>
      </StyledSummary>
      <StyledContent ref={reference} style={springStyle}>
        {props.content}
      </StyledContent>
    </StyledDetails>
  );
};

export default Expander;
