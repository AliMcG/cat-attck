import React from "react"


function Question(props) {
  
  return ( 
    <section>
      <p>Which cat's {props.attribute} attribute is greater?</p>
    </section>
   );
}

export default Question;