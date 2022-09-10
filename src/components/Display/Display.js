import React from "react";

function Display(props) {
  return (
    <div className="display-box">
      <img className="cat-img" src={props.url} alt="" />
      <p onClick={props.onClick}>{props.name}</p>
    </div>
  );
}

export default Display;
