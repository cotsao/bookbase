import { useState, useEffect } from "react";
import AuthorsList from "../components/AuthorsList";
import RelatedSubjectList from "../components/RelatedSubjectList";
import { useAuth0 } from "@auth0/auth0-react";
import AddToReadList from "../components/AddToReadList";
const url = `${process.env.REACT_APP_SERVER_URL}/list`;
const axios = require("axios");
function BookShowPage(props) {
  const { isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [lists, setLists] = useState([]);
  const [book, setBook] = useState({});
  const [coverIndex, setCoverIndex] = useState(0);
  const [dropdown, setDropdown] = useState(false);
  const [imgUrl, setImgUrl] = useState("");

  const [toggleShowAll, setToggleShowAll] = useState(true);
  useEffect(() => {
    if (isAuthenticated) {
      getIndex(url);
    }
  }, []);
  function getIndex(endPoint) {
    const loadIndex = async () => {
      const token = await getAccessTokenSilently();
      try {
        const response = await axios.get(endPoint, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (typeof response !== "undefined") {
          setLists(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    loadIndex();
  }
  useEffect(() => {
    const bookUrl = `https://openlibrary.org/works/${props.match.params.bookID}.json`;
    const loadBook = async () => {
      const response = await axios.get(bookUrl).catch(function (error) {
        console.log(error);
      });
      console.log(response.data);
      setBook(response.data);
      if (typeof response.data.covers !== "undefined") {
        setImgUrl(
          `http://covers.openlibrary.org/b/id/${response.data.covers[0]}-M.jpg`
        );
      }
    };
    loadBook();
  }, [props.match.params.bookID]);
  function imgClickHandler() {
    if (coverIndex + 1 >= book.covers.length) {
      setCoverIndex(0);
      if (typeof book.covers !== "undefined") {
        setImgUrl(
          `http://covers.openlibrary.org/b/id/${book.covers[coverIndex]}-M.jpg`
        );
      }
    } else {
      setCoverIndex(coverIndex + 1);
      if (typeof book.covers !== "undefined") {
        setImgUrl(
          `http://covers.openlibrary.org/b/id/${book.covers[coverIndex]}-M.jpg`
        );
      }
    }
  }
  const links = book.links?.map((link, idx) => {
    return (
      <div className="book-links" key={idx}>
        <a href={link.url}>{link.title.split(" ").splice(0, 10).join(" ")}</a>
      </div>
    );
  });
  function toggleDropdown(idx) {
    setDropdown(!dropdown);
  }
  const addSection = (
    <div className="book-add-btn">
      <h2 onClick={() => toggleDropdown()} className=" book-add-txt sml-font">
        add to a list
      </h2>
      {dropdown && (
        <AddToReadList
          lists={lists}
          bookKey={book.key}
          toggleDropDown={toggleDropdown}
        />
      )}
    </div>
  );

  let descript = "";
  if (typeof book.description === "undefined") {
    descript = "N/A";
  } else if (typeof book.description === "string") {
    if (toggleShowAll) {
      descript = book.description.split(" ").slice(0, 80).join(" ");
    } else {
      descript = book.description;
    }
  } else {
    if (toggleShowAll) {
      descript = book.description.value.split(" ").slice(0, 80).join(" ");
    } else {
      descript = book.description.value;
    }
  }

  return (
    <div className="book-showpage-wrapper">
      <div className="book-container">
        <div className="book-left-col">
          <img
            className="book-image"
            onClick={() => imgClickHandler()}
            src={imgUrl}
            alt="N/A"
          />
          {isAuthenticated ? addSection : null}
          <span className="book-publish">
            first published: {book.first_publish_date}
          </span>
          <div className="book-link-flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-link"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#A5967D"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M10 14a3.5 3.5 0 0 0 5 0l4 -4a3.5 3.5 0 0 0 -5 -5l-.5 .5" />
              <path d="M14 10a3.5 3.5 0 0 0 -5 0l-4 4a3.5 3.5 0 0 0 5 5l.5 -.5" />
            </svg>
            <div>
              {/* <h6 className="book-links">links: </h6> */}
              {links}
            </div>
          </div>
        </div>
        <div className="book-right-col">
          <h3 className="book-title">{book.title && book.title}</h3>
          {book.authors && <AuthorsList authors={book.authors} />}
          <div className="book-descript">
            <span>{descript}</span>
            <br />
            {toggleShowAll ? (
              <span
                className="toggle-show"
                onClick={() => setToggleShowAll(!toggleShowAll)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-corner-down-right"
                  width="33"
                  height="33"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#A5967D"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M6 6v6a3 3 0 0 0 3 3h10l-4 -4m0 8l4 -4" />
                </svg>
              </span>
            ) : (
              <span
                className="toggle-show"
                onClick={() => setToggleShowAll(!toggleShowAll)}
              >
                {" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-corner-left-up"
                  width="33"
                  height="33"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="#A5967D"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M18 18h-6a3 3 0 0 1 -3 -3v-10l-4 4m8 0l-4 -4" />
                </svg>
              </span>
            )}{" "}
          </div>
          {book.subjects && <RelatedSubjectList subjects={book.subjects} />}
        </div>
      </div>
    </div>
  );
}
export default BookShowPage;
