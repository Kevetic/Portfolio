import React from "react";
import AnimatedCursor from "react-animated-cursor";

function CustomCursor() {
  return (
    <AnimatedCursor
      innerSize={5}
      outerSize={30}
      color="255, 0, 0"
      outerAlpha={0.1}
      innerScale={0.7}
      outerScale={5}
      clickables={[
        "a",
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        "label[for]",
        "select",
        "textarea",
        "button",
        ".link",
      ]}
    />
  );
}

export default CustomCursor;
