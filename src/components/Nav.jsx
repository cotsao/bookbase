import { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import logo from "../images/Untitled.png";
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
    if (searchText.length >0){
      loadSearch()
      bookSearch.slice(0,5).map((oneBook)=>{
        console.log(oneBook.title)
        matches.push(oneBook)
      })
      console.log(matches)
      setSuggestions(matches)
    }
    /* if (searchText.length > 0) {
      loadSearch();
      if (searchText.length > 0) {
        matches = bookSearch.filter((book) => {
          const sanitized = book.title
            .toLowerCase()
            .replace(/[^a-zA-Z0-9]/g, "");
          return book.title
            .toLowerCase()
            .replace(/[^a-zA-Z0-9]/g, "")
            .match(sanitized);
        });
        setSuggestions(matches);
      }
    } */
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
    <header className="nav-bar lg-container">
      <nav className="nav-container">
        <ul className="nav-flex">
          <div>
            <Link to="/">
              <img
                style={{ maxWidth: 64, maxHeight: 64 }}
                src={logo}
                alt="N/A"
              />
            </Link>
          </div>
          <div className="nav-left">
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
          </div>
          <div></div>
          <div></div>

          <div className="nav-right">
            <img
              style={{ maxWidth: 20, maxHeight: 20 }}
              src="https://w7.pngwing.com/pngs/456/948/png-transparent-computer-icons-desktop-web-search-engine-wordpress-com-search-icon-search-logo-website-circle-wordpresscom.png"
              alt=""
            />
            <div>
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
