import React from "react";

// to use useRef in componet React.forwardRef is needed
const Display = React.forwardRef((props, ref) => (
  <div className="display-box">
    <img className="cat-img" src={props.url} alt="" onClick={props.onClick} />
    <p ref={ref}>{props.name}</p>
  </div>
));

export default Display;
