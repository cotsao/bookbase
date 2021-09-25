import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
function AuthorsList(props) {
  const [authors, setAuthors] = useState([]);

  const url = "https://openlibrary.org";

  useEffect(() => {
    let authorArr = [];

    const loadAuthors = async () => {
      try {
        for (let i = 0; i < props.authors.length; i++) {
          const response = await axios.get(
            `${url}${props.authors[i].author.key}.json`
          );
          authorArr.push(response.data);
        }
      } catch (error) {
        console.log(error);
      }

      setAuthors(authorArr);
    };
    loadAuthors();
  }, [props.authors]);

  const renderAuthors = authors.slice(0, 4).map((author, idx) => {
    return (
      <Link className="book-author" to={author.key}>
        <span key={idx}>
          {author.name}
        </span>
      </Link>
    );
  });
  return <div className="book-author shift-left">by{renderAuthors}</div>;
}
export default AuthorsList;
