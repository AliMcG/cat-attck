import React from "react";

function Question(props) {
  return (
    <section>
      <p>Which cat's <span style={{color: "blue"}}>{props.attribute}</span> attribute is greater?</p>
    </section>
  );
}

export default Question;
