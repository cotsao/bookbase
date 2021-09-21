import { useState, useEffect } from "react";
import axios from "axios";
function AuthorsList(props) {
  const [authors, setAuthors] = useState([]);
  const url = "https://openlibrary.org";

  useEffect(() => {
    let authorArr = [];
    const loadAuthors = async () => {
      try {
        for (let i = 0; i < props.authors.length; i++) {
          const response = await axios
            .get(`${url}${props.authors[i].author.key}.json`)
          authorArr.push(response.data.name);
        }
      }catch(error){
        console.log(error)
      }
      
      setAuthors(authorArr);
    };
    loadAuthors();
  }, [props.authors]);

  const renderAuthors = authors.map((author, idx) => {
    return <p key={idx}>{author}</p>;
  });
  return <div>{renderAuthors}</div>;
}
export default AuthorsList;
