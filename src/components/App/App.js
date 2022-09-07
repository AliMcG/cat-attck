import React, { useState, useEffect } from "react"
import './App.css';

function App() {
  const [catId, setCatId] = useState([])
  const [click, setClick] = useState(false)

  useEffect(() => {
    async function fetchBreeds() {
      const response = await fetch(
        `https://api.thecatapi.com/v1/breeds`,
        { headers: { "x-api-key": "14445d3e-4465-488f-bc69-cd1a6c698a4c" } }
      );
      const data = await response.json();
      setCatId(data.map((cat) => {
        return cat.id
      }));
      console.log(catId);
      setClick(true)
      fetchCatById()
      
    }
    async function fetchCatById() {
      const breedId = catId[Math.floor(Math.random() * catId.length)]
      const response = await fetch(
        `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`,
        { headers: { "x-api-key": "14445d3e-4465-488f-bc69-cd1a6c698a4c" } }
      );
      const data = await response.json();
      console.log(data)
    }
    fetchBreeds();
  }, [click]);

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
