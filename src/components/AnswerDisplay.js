import React from "react";

// to display the answer and the attribute used in the question
function AnswerDisplay(props) {
  return (
    <p>
      {props.answer}'s <span style={{color: "blue"}}>{props.attribute}</span> attribute was greater.
    </p>
  );
}

export default AnswerDisplay;
