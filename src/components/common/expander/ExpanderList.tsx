import React, { ReactNode } from "react";
import Expander from "./Expander";

export const ExpanderList: React.FC<{
  defaultOpen?: number;
  children: any[];
}> = (props) => {
  const [openExpanderIndex, setOpenExpander] = React.useState(
    props.defaultOpen
  );

  return (
    <div>
      {props.children.map((child, i) => (
        <Expander
          open={i === openExpanderIndex}
          summary={child.props.summary}
          content={child.props.content}
          onClick={() => {
            i === openExpanderIndex ? setOpenExpander(-1) : setOpenExpander(i);
          }}
          key={i}
        />
      ))}
    </div>
  );
};

export default ExpanderList;
