import React, { useState, useEffect, useRef } from "react";
import Title from "../Title/Title";
import Display from "../Display/Display";
import verus from "../../images/versus-icon.svg";
import EmptyImage from "../EmptyImage/emptyImage";
import Question from "../Question/Question";
import listAttributes from "../../Data/catAttributes.js";
import AnswerDisplay from "../AnswerDisplay";
import PlayAgainButton from "../PlayAgainButton.js";
import Scoreboard from "../Scoreboard";
import { catOne, catTwo } from "../../Data/catData";
import InstructionsModal from "../../modals/gameInstructionsModal";
import useFetch from "../../hooks/useFetch";
import "./App.css";


function App() {
  const userName = false;
  const buttonRef = useRef(null);
  const playButtonRef = useRef(null);
  const [round, setRound] = useState(1);
  const [breedsId, setBreedsId] = useState([]);
  const [reset, setReset] = useState(false);
  const [cat1, setCat1] = useState("");
  const [cat2, setCat2] = useState("");
  // answer and click both use "falsey" initial values to help with conditional rendering.
  const [answer, setAnswer] = useState("");
  // Takes one random value(attribute) from the array of attributes and adds to the piece of state.
  const [attribute, setAttribute] = useState("???????");
  const [score, setScore] = useState(0);

 
  useEffect(() => {
    // fetches a list of all breeds from the api.
    // This is used to to do a random search by id for each round of the game
    async function getBreedIds() {
      const response = await fetch(`https://api.thecatapi.com/v1/breeds`, {
        headers: { "x-api-key": process.env.REACT_APP_API_KEY },
      });
      const data = await response.json();
    
      // maps the breed names into a new array.
      const breedsIdList = data.map((cat) => {
        return cat.id
      })
      setBreedsId((previousValue) => breedsIdList)
      // const randomBreedId = breedsIds[Math.floor(Math.random() * breedsIds.length)];
    }
    getBreedIds();
    }, []);

  
  

 
  //   async function fetchCatByIdOne() {
  //     // Takes a random breedId from the catId array of names.
  //     // Makes a GET request to get the cat image and breed info for the one cat.
  //     const breedId = catId[Math.floor(Math.random() * catId.length)];
  //     const response = await fetch(
  //       `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`,
  //       { headers: { "x-api-key": process.env.REACT_APP_API_KEY } }
  //     );
  //     const data = await response.json();
  //     // checks the data exists
  //     console.log(data[0].breeds[0].name);
  //     console.log(data[0].breeds[0][attribute]);
  //     setCat1(data);
  //   }
  //   async function fetchCatByIdTwo() {
  //     const breedId = catId[Math.floor(Math.random() * catId.length)];
  //     const response = await fetch(
  //       `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`,
  //       { headers: { "x-api-key": process.env.REACT_APP_API_KEY } }
  //     );
  //     const data = await response.json();
  //     console.log(data[0].breeds[0].name);
  //     console.log(data[0].breeds[0][attribute]);
  //     setCat2(data);
  //   }
  //   fetchBreeds();
  // }, [reset]);

  function checkAnswer(event) {
    // This stops spam clicking on button
    event.currentTarget.disabled = true;
    // get current attribute from attribute state.
    const catOne = cat1[0].breeds[0][attribute];
    const catTwo = cat2[0].breeds[0][attribute];

    // compares which cat's value is greater and
    // returns the cat with the greater value or returns a draw.
    if (catOne > catTwo) {
      setAnswer(cat1[0].breeds[0].name);

      buttonRef.current.disabled = true;
      if (event.target.innerText === answer) {
        setScore(score + 1);
      }
    } else if (catOne === catTwo) {
      const arrCats = [cat1[0].breeds[0].name, cat2[0].breeds[0].name];

      setAnswer(arrCats[Math.floor(Math.random() * arrCats.length)]);
      buttonRef.current.disabled = true;
      if (event.target.innerText === answer) {
        setScore(score + 1);
      }
    } else {
      setAnswer(cat2[0].breeds[0].name);
      buttonRef.current.disabled = true;
      if (event.target.innerText === answer) {
        setScore(score + 1);
      }
    }
  }
  function playRound() {
    setAttribute(
      listAttributes[Math.floor(Math.random() * listAttributes.length)]
    );
    setCat1(catOne);
    setCat2(catTwo);
    setReset(true);
  }
  // uses the set-SomeValue functions to re-set the game
  function playAgain() {
    setReset(false);
    setAnswer("");
    setAttribute("?????????");
    setCat1("");
    setCat2("");
    setRound(round + 1);
  }

  return (
    <div className="App">
      <Title userName={userName} />
      <InstructionsModal />

      <Scoreboard score={score} />
      {!answer ? (
        <Question attribute={attribute} />
      ) : (
        <AnswerDisplay answer={answer} attribute={attribute} />
      )}
      <div className="cat-display">
        {cat1 ? (
          <Display
            url={cat1[0].url}
            ref={buttonRef}
            onClick={checkAnswer}
            name={cat1[0].breeds[0].name}
          />
        ) : (
          <EmptyImage />
        )}
        <PlayAgainButton
          class="top-button"
          state={reset}
          text="Click to Play"
          onClick={playRound}
        />
        <img className="verus" src={verus} alt="" />
        <PlayAgainButton
          class="bottom-button"
          text="Play next round"
          onClick={playAgain}
        />
        {cat2 ? (
          <Display
            url={cat2[0].url}
            ref={buttonRef}
            onClick={checkAnswer}
            name={cat2[0].breeds[0].name}
          />
        ) : (
          <EmptyImage />
        )}
      </div>
    </div>
  );
}

export default App;
