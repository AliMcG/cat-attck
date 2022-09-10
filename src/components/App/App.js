import React, { useState, useEffect } from "react";
import Title from "../Title/Title";
import Display from "../Display/Display";
import verus from "../../images/versus-icon.svg";
import EmptyImage from "../EmptyImage/emptyImage";
import Question from "../Question/Question";
import "./App.css";

function App() {
  const userName = "{userName}";
  const [catId, setCatId] = useState([]);
  const [click, setClick] = useState(false);
  const [cat1, setCat1] = useState("");
  const [cat2, setCat2] = useState("");

  useEffect(() => {
    async function fetchBreeds() {
      const response = await fetch(`https://api.thecatapi.com/v1/breeds`, {
        headers: { "x-api-key": process.env.REACT_APP_API_KEY },
      });
      const data = await response.json();
      setCatId(
        data.map((cat) => {
          return cat.id;
        })
      );
      console.log(catId);
      setClick(true);
      fetchCatByIdOne();
      fetchCatByIdTwo();
    }
    async function fetchCatByIdOne() {
      const breedId = catId[Math.floor(Math.random() * catId.length)];
      const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`,
        { headers: { "x-api-key": process.env.REACT_APP_API_KEY } }
      );
      const data = await response.json();
      console.log(data);
      console.log(data[0].breeds[0].name);
      setCat1(data);
    }
    async function fetchCatByIdTwo() {
      const breedId = catId[Math.floor(Math.random() * catId.length)];
      const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`,
        { headers: { "x-api-key": process.env.REACT_APP_API_KEY } }
      );
      const data = await response.json();
      console.log(data);
      console.log(data[0].breeds[0].name);
      setCat2(data);
    }
    fetchBreeds();
  }, [click]);

  function checkAnswer(){
    console.log("I was clicked")
  }

  return (
    <div className="App">
      <div className="bg">
        <Title userName={userName} />
        <div className="cat-display">
          {cat1 ? (
            <Display url={cat1[0].url} onClick={checkAnswer} name={cat1[0].breeds[0].name} />
          ) : (
            <EmptyImage />
          )}
          <img className="verus" src={verus} alt="" />
          {cat2 ? (
            <Display url={cat2[0].url} onClick={checkAnswer} name={cat2[0].breeds[0].name} />
          ) : (
            <EmptyImage />
          )}
        </div>
        <Question />
      </div>
    </div>
  );
}

export default App;
