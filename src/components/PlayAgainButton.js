import React from "react";

// a simple button component to hanlde the onClick function to play again.
function PlayAgain(props) {
  return <button className="play-again" onClick={props.onClick}>Click to Fight Again!</button>;
}

export default PlayAgain;
