import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
function PublicOneBook(props) {
  const [bookDetails, setBookDetails] = useState({});
  const [coverIds, setCoverIds] = useState([]);
  useEffect(() => {
    const url = `https://openlibrary.org${props.book}.json`;
    const loadBook = async () => {
      const response = await axios.get(url).catch(function (error) {
        console.log(error);
      });
      if (typeof response !== "undefined") {
        setBookDetails(response.data);
        setCoverIds(response.data.covers);
      }
    };
    loadBook();
  }, [props.book]);
  let descript = "";

  if (typeof bookDetails.description === "undefined") {
    descript = "N/A";
  } else if (typeof bookDetails.description === "string") {
    descript = bookDetails.description;
  } else {
    descript = bookDetails.description.value;
  }
  let descriptShort = descript.split(" ").slice(0, 20).join(" ") + "...";
  const imgUrl = `http://covers.openlibrary.org/b/id/${coverIds[0]}-S.jpg`;
  return (
    <div className="one-book-container">
      <div className="temp-flex">
        <img className="one-book-img" src={imgUrl} alt="N/A" />

        <div className="one-book-text">
          <Link className="one-book-title" to={props.book}>
            {" "}
            {bookDetails.title}
          </Link>
          <span className="one-book-description">{descriptShort}</span>
        </div>
      </div>
    </div>
  );
}
export default PublicOneBook;
