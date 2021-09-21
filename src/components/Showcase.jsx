import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";
import AddToReadList from "./AddToReadList";
const axios = require("axios");
const url = "http://localhost:4000/api/list";
function Showcase() {
  const [showBooks, setShowBooks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("fantasy");
  const [dropdown, setDropdown] = useState(false);
  const [index, setIndex] = useState(0);
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const loadBooks = async () => {
      const response = await axios.get(
        `https://openlibrary.org/subjects/${searchTerm
          .replace(/\s+/g, "-")
          .toLowerCase()}.json?details=true`
      );
      if (typeof response != "undefined") {
        console.log(response.data);
        setShowBooks(response.data.works);
      }
    };
    loadBooks();
  }, [searchTerm]);
  useEffect(() => {
    getIndex(url);
  }, []);
  function getIndex(endPoint) {
    const loadIndex = async () => {
      const reponse = await axios.get(endPoint).catch(function (error) {
        console.log(error);
      });
      console.log(reponse.data);
      setLists(reponse.data);
    };
    loadIndex();
  }
  const cardElements = showBooks.slice(0, 8).map((book, idx) => {
    console.log(`${book}`);
    const imgUrl = `http://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`;
    return (
      <div className="card showcase-card" key={idx}>
        <article className="content showcase-content">
          <Link to={book.key}>
            <img
              className="content-img book-img showcase-img"
              src={imgUrl}
              alt="N/A"
            />
          </Link>
          <div className="context-text">
            <h3 className="title">{book.title}</h3>
          </div>
        </article>
        <h2 onClick={() => toggleDropdown(idx)} className="add-btn">
          Add
        </h2>
        {dropdown && idx === index && (
          <AddToReadList
            lists={lists}
            bookKey={book.key}
            toggleDropDown={toggleDropdown}
            index={idx}
          />
        )}
      </div>
    );
  });
  function toggleDropdown(idx) {
    setDropdown(!dropdown);
    setIndex(idx);
  }
  function handleSubjClick(subject) {
    setSearchTerm(subject);
  }
  const subj = ["Fantasy", "Science Fiction", "Romance", "History"];
  const subjBtn = subj.map((subject, idx) => {
    return (
      <span key={idx} onClick={() => handleSubjClick(subject)}>
        {subject}
      </span>
    );
  });
  return (
    <div className="med-container showcase-container">
      <h1>Search by Subject</h1>
      <h6>
        Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups.
      </h6>
      <div className="showcase-btn">{subjBtn}</div>
      <h1>{searchTerm} books</h1>
      <div className="showcase-grid-container">{cardElements}</div>
    </div>
  );
}
export default Showcase;
