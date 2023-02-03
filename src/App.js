import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [tag, setTag] = useState("love");

  function getQuote() {
    axios
      .get(`https://quotable.io/quotes?tags=${tag}`)
      .then((res) => setQuotes(res.data.results))
      .catch((err) => console.log(err.message));
  }

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="App">
      <div className="container mx-auto text-center pt-20">
        <h1 className="font-bold text-gray-800 text-5xl">
          Get Inspired by Quotes
        </h1>
      </div>

      <form
        onSubmit={handleSubmit}
        className="flex items-center justify-center text-center mt-5"
      >
        <input
          type="text"
          name="tag"
          placeholder="search quote.."
          className="border-2 border-gray-800 px-2 py-2"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
        />
        <button
          type="submit"
          className=" bg-gray-800 text-white px-4 py-2 border-2 border-gray-800 hover:bg-transparent hover:text-gray-800"
        >
          Search
        </button>
      </form>
    </div>
  );
}

export default App;
