import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => {
        console.error('There has been a problem with your fetch operation:', error);
      })
  }, [url]);

  return [data];
};

export default useFetch;
