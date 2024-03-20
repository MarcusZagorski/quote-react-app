import { useState, useEffect, useRef } from "react";
import "./App.scss";

function App() {
  const [quotes, setQuotes] = useState(null);
  const fetched = useRef(true);
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(!clicked);
    console.log(clicked);
  };

  useEffect(() => {
    if (fetched.current) {
      fetched.current = false;
      fetch("https://quoteapi-sl03rxte3npt.runkit.sh/quotes/random")
        .then((res) => res.json())
        .then((data) => {
          setQuotes(data);
          fetched.current = true;
        });
    }
  }, [clicked]);

  return (
    <blockquote className="quotes">
      {quotes ? (
        <>
          <p className="quotes__author">{quotes.author}</p>
          <p className="quotes__quote">“{quotes.quote}”</p>
          <button onClick={handleClick} className="quotes__btn">
            Generate new quote
          </button>
        </>
      ) : (
        <div className="quotes loading">Loading...</div>
      )}
    </blockquote>
  );
}

export default App;
