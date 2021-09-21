import { useState, useEffect } from "react";
import axios from "axios";
function AuthorsList(props) {
  const [authors, setAuthors] = useState([]);
  const url = "https://openlibrary.org";

  useEffect(() => {
    let authorArr = [];
    const loadAuthors = async () => {
      for (let i = 0; i < props.authors.length; i++) {
        const response = await axios
          .get(`${url}${props.authors[i].author.key}.json`)
          .catch(function (error) {
            console.log(error);
          });
        authorArr.push(response.data.name);
      }
      setAuthors(authorArr);
    };
    loadAuthors();
  }, []);

  const renderAuthors = authors.map((author, idx) => {
    return <p key={idx}>{author}</p>;
  });
  return <div>{renderAuthors}</div>;
}
export default AuthorsList;
