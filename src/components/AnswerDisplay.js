import React from "react";

// to display the answer and the attributed used in the question
function AnswerDisplay(props) {
  return (
    <p>
      {props.answer} was more {props.attribute}
    </p>
  );
}

export default AnswerDisplay;
