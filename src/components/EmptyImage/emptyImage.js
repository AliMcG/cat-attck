import React from "react"
import questionMark from "../../images/question-mark-icon.svg"

function EmptyImage() {
  return ( <div>
    <img className="question-mark" src={questionMark} alt="" />
    <p>?????????</p>
    </div>
   );
}

export default EmptyImage;