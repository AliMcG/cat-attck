import React from "react";

function Title(props) {
  return (
    <header>
      <h1>Cat Attack!</h1>
      <h2>When cats attack</h2>
      {props.userName ? (
        <h3>Welcome {props.userName} pepare to pit cat against cat!</h3>
      ) : (
        <h3>Welcome pepare to pit cat against cat!</h3>
      )}
    </header>
  );
}

export default Title;
