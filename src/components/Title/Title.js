import React from "react";

// to introduce the game with a username?
function Title(props) {
  return (
    <header>
      <h1>Cat Attack!</h1>
      <h2>When cats attack</h2>
      {props.userName ? (
        <h3>Welcome {props.userName} prepare to pit cat against cat!</h3>
      ) : (
        <h3>Welcome prepare to pit cat against cat!</h3>
      )}
      <p>Each round will compare (fight) each cat based on a random attribute</p>
    </header>
  );
}

export default Title;
