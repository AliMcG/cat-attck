import React from "react";

function Title(props) {
  return (
    <div>
      <h1>Cat Attack!</h1>
      <h2>When cats attack</h2>
      {props.userName ? (
        <h2>Welcome {props.userName} pepare to pit cat against cat!</h2>
      ) : (
        <h2>Welcome pepare to pit cat against cat!</h2>
      )}
    </div>
  );
}

export default Title;
