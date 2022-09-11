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
import "./App.css";

function App() {
  const userName = false;
  const buttonRef = useRef(null);
  const [catId, setCatId] = useState([]);
  const [reset, setReset] = useState("");
  const [cat1, setCat1] = useState("");
  const [cat2, setCat2] = useState("");
  // answer and click both use "falsey" initial values to help with conditional rendering.
  const [answer, setAnswer] = useState("");
  // Takes one random value(attribute) from the array of attributes and adds to the piece of state.
  const [attribute, setAttribute] = useState(
    listAttributes[Math.floor(Math.random() * listAttributes.length)]
  );
  const [score, setScore] = useState(0);

  useEffect(() => {
    async function fetchBreeds() {
      // fetches a list of all breeds from the api.
      const response = await fetch(`https://api.thecatapi.com/v1/breeds`, {
        headers: { "x-api-key": process.env.REACT_APP_API_KEY },
      });
      const data = await response.json();
      // maps the breed names into a new array inside the catID state.
      setCatId(
        data.map((cat) => {
          return cat.id;
        })
      );
      setReset("true");
      fetchCatByIdOne();
      fetchCatByIdTwo();
    }
    async function fetchCatByIdOne() {
      // Takes a random breedId from the catId array of names.
      // Makes a GET request to get the cat image and breed info for the one cat.
      const breedId = catId[Math.floor(Math.random() * catId.length)];
      const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`,
        { headers: { "x-api-key": process.env.REACT_APP_API_KEY } }
      );
      const data = await response.json();
      // checks the data exists
      console.log(data[0].breeds[0].name);
      console.log(data[0].breeds[0][attribute]);
      setCat1(data);
    }
    async function fetchCatByIdTwo() {
      const breedId = catId[Math.floor(Math.random() * catId.length)];
      const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`,
        { headers: { "x-api-key": process.env.REACT_APP_API_KEY } }
      );
      const data = await response.json();
      console.log(data[0].breeds[0].name);
      console.log(data[0].breeds[0][attribute]);
      setCat2(data);
    }
    fetchBreeds();
  }, [reset]);

  function checkAnswer(event) {
    // get current attribute from attribute state.
    const catOne = cat1[0].breeds[0][attribute];
    const catTwo = cat2[0].breeds[0][attribute];

    // compares which cat's value is greater and
    // returns the cat with the greater value or returns a draw.
    if (catOne > catTwo) {
      setAnswer(cat1[0].breeds[0].name);

      // This stops spam clicking on button
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
  // uses the set-SomeValue functions to re-set the game
  function playAgain() {
    setReset("false");
    setAnswer("");
    setAttribute(
      listAttributes[Math.floor(Math.random() * listAttributes.length)]
    );
    buttonRef.current.disabled = false;
  }

  return (
    <div className="App">
      <Title userName={userName} />
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
        <img className="verus" src={verus} alt="" />
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
      <Scoreboard score={score} />
      <PlayAgainButton onClick={playAgain} />
    </div>
  );
}

export default App;
