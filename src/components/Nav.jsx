import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../images/logo.png";
const axios = require("axios");
function Nav() {
  const [bookSearch, setbookSearch] = useState([]);
  const [searchText, setsearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const searchUrl = `http://openlibrary.org/search.json?title=${searchText}&limit=10`;
    const loadSearch = async () => {
      const response = await axios.get(searchUrl).catch(function (error) {
        console.log(error);
      });
      if (typeof response != "undefined") {
        setbookSearch(response.data.docs);
      }
    };
    let matches = [];
    if (searchText.length > 0) {
      loadSearch();
      bookSearch.slice(0, 5).map((oneBook) => {
        console.log(oneBook.title);
        matches.push(oneBook);
      });
      console.log(matches);
      setSuggestions(matches);
    }
  }, [searchText]);
  const onChangeHandler = (text) => {
    setsearchText(text);
  };
  function searchSubmitHandler(event) {
    event.preventDefault();
    console.log("submitted");
    history.push(suggestions[0].key);
  }
  function suggestionClickHandler() {
    setsearchText("");
    setSuggestions([]);
  }

  return (
    <header className="nav-bar lg-container med-font">
      <nav className="nav-container">
        <ul className="nav-flex">
          <div>
            <Link to="/">
              <img className="nav-logo" src={logo} alt="N/A" />
            </Link>
          </div>
          <Link className="nav-el" to="/">
            <span className="nav-el">home</span>
          </Link>
          <Link className="nav-el" to="/lists">
            {" "}
            <span className="nav-el">lists</span>{" "}
          </Link>
          <Link className="nav-el" to="/about">
            {" "}
            <span className="nav-el">about</span>{" "}
          </Link>
          <span className="nav-el">link 3</span>

          <div className="nav-right">
            <div className="nav-search">
              <svg
                id="nav-search-logo"
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-search"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#2c3e50"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <circle cx="10" cy="10" r="7" />
                <line x1="21" y1="21" x2="15" y2="15" />
              </svg>
              <form onSubmit={(e) => searchSubmitHandler(e)}>
                <input
                  className="suggestion-input"
                  type="text"
                  onChange={(e) => onChangeHandler(e.target.value)}
                  value={searchText}
                  onBlur={() => {
                    setTimeout(() => {
                      setSuggestions([]);
                    }, 500);
                  }}
                />
              </form>

              <div className="suggestion-container">
                {suggestions &&
                  suggestions.map((suggestion, i) => (
                    <div
                      className="suggestion-box"
                      key={i}
                      onClick={() => {
                        suggestionClickHandler();
                      }}
                    >
                      <Link to={suggestion.key}> {suggestion.title}</Link>
                    </div>
                  ))}
              </div>
            </div>
            <span>signup</span>
            <span>login</span>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;
