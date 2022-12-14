// wow... HUGE thank you to Joshua Comeau for this
// https://www.joshwcomeau.com/react/boop/

import React from "react";
import { useSpring } from "react-spring";

function useBoop({
  x = 0,
  y = 0,
  rotation = 0,
  defaultRotation = 0,
  scale = 1,
  timing = 150,
  springConfig = {
    tension: 300,
    friction: 10,
  },
}) {
  const [isBooped, setIsBooped] = React.useState(false);
  const style = useSpring({
    transform: isBooped
      ? `translate(${x}px, ${y}px)
         rotate(${rotation + defaultRotation}deg)
         scale(${scale})`
      : `translate(0px, 0px)
         rotate(${defaultRotation}deg)
         scale(1)`,
    config: springConfig,
  });
  React.useEffect(() => {
    if (!isBooped) {
      return;
    }
    const timeoutId = window.setTimeout(() => {
      setIsBooped(false);
    }, timing);
    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [isBooped]);
  const trigger = React.useCallback(() => {
    setIsBooped(true);
  }, []);

  return [style, trigger];
}
export default useBoop;
