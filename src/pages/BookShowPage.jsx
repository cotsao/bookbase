import { useState, useEffect } from "react";
import "react-multi-carousel/lib/styles.css";

const axios = require("axios");
function BookShowPage(props) {
  const [book, setBook] = useState({covers:[]});
  const [coverIndex, setCoverIndex] = useState(0);
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    const bookUrl = `https://openlibrary.org/works/${props.match.params.bookID}.json`;
    const loadBook = async () => {
      const response = await axios.get(bookUrl).catch(function (error) {
        console.log(error);
      });
      setBook(response.data);
      setImgUrl(`http://covers.openlibrary.org/b/id/${response.data.covers[coverIndex]}-M.jpg`)
      
      
    };
    loadBook();
  }, [props.match.params.bookID]);
  function imgClickHandler() {
    
    if (coverIndex + 1 >= book.covers.length) {
      setCoverIndex(0);
      setImgUrl(`http://covers.openlibrary.org/b/id/${book.covers[coverIndex]}-M.jpg`)
    } else {
      setCoverIndex(coverIndex + 1);
      setImgUrl(`http://covers.openlibrary.org/b/id/${book.covers[coverIndex]}-M.jpg`)
    }
  }
  
  return (
    <div className="shove-down">
      <div>
        <img onClick={() => imgClickHandler()} src={imgUrl} alt="NOPE" />
      </div>
      <div>
        <h3>{book.title && book.title}</h3>
        <p>{book.description?.value}</p>
      </div>
    </div>
  );
}
export default BookShowPage;
