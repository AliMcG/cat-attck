import React from "react";
import DisplayCard from "./DisplayCard";
import verus from "../../images/versus-icon.svg";
import EmptyImage from "../EmptyImage/emptyImage";
import Question from "../Question/Question";
import AnswerDisplay from "../AnswerDisplay";
// import PlayAgainButton from "../PlayAgainButton.js";
import Scoreboard from "../Scoreboard";

// to use useRef in component React.forwardRef is needed
const Display = React.forwardRef(({ cat1, cat2, checkAnswer, answer, score, attribute}) => (
  <>
  <Scoreboard score={score} />
  {!answer ? (
    <Question attribute={attribute} />
  ) : (
    <AnswerDisplay answer={answer} attribute={attribute} />
  )}
  <div className="cat-display">
    {cat1 ? (<DisplayCard url={cat1[0].url} onClick={checkAnswer} name={cat1[0].breeds[0].name} />) : (<EmptyImage />)}
    <img className="verus" src={verus} alt="" />
    
    {cat2 ? (<DisplayCard url={cat2[0].url} onClick={checkAnswer} name={cat2[0].breeds[0].name} />) : (<EmptyImage />)}
  </div></>
  
));

export default Display;