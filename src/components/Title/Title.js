import React from "react";

// to introduce the game with a username?
function Title() {
  return (
    <header>
      <h1>Cat Attack!</h1>
      <h3>When cats attack</h3>
      <p>Each round will compare (fight) each cat based on a random attribute</p>
      <p>Click on which cat you think has the highest score</p>
      <p>(in case of a draw, one cat will randomly win that round.)</p>
    </header>
  );
}

export default Title;
