import axios from "axios";
import { useEffect, useState } from "react";
function OneBook(props) {
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
        setCoverIds(response.data.covers)
      }
    };
    loadBook()
    
  }, []);
  const imgUrl=`http://covers.openlibrary.org/b/id/${coverIds[0]}-S.jpg`
  return (<div>
      <img src={imgUrl} alt="N/A" />
      <br/>
      {bookDetails.title}
      </div>)
}
export default OneBook;