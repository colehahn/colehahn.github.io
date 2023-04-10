import React from "react";
import styled from "styled-components";

export const FixedSizeImg: React.FC<{
  src: string;
  width: number;
  height: number;
  positionStyle?: object;
  imgStyle?: object;
}> = (props) => {
  return (
    <div
      style={{
        ...props.positionStyle,
        width: props.width,
        height: props.height,
      }}
    >
      <img
        src={props.src}
        style={{ ...props.imgStyle, width: props.width, height: props.height }}
      />
    </div>
  );
};

export default FixedSizeImg;
