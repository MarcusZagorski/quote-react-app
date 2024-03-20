import { useState, useEffect, useRef } from "react";
import "./App.scss";

function App() {
  const [quotes, setQuotes] = useState(null);
  const fetched = useRef(true);
  console.log(fetched.current);

  useEffect(() => {
    if (fetched.current) {
      fetched.current = false;
      fetch("https://quoteapi-sl03rxte3npt.runkit.sh/quotes/random")
        .then((res) => res.json())
        .then((data) => setQuotes(data));
    }
  }, []);

  if (quotes === null) {
    return <div className="quotes loading">Loading...</div>;
  } else {
    return (
      <div className="quotes">
        <p className="quotes__author">{quotes.author}</p>
        <p className="quotes__quote">“{quotes.quote}”</p>
      </div>
    );
  }
}

export default App;
