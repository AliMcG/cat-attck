import React from "react";

// to use useRef in component React.forwardRef is needed
// a simple button component to handle the onClick function to play again.
const PlayAgain = ((props) => {
  return <button disabled={props.state ? true : false} className="play-again" onClick={props.onClick}>{props.text}</button>;
}
)

export default PlayAgain
