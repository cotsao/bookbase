import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import loadingAnim from '../images/loading.svg'
const axios = require("axios");
function SubjectShowPage(props) {
  const [subject, setSubject] = useState([]);
  const [infoCard, setInfoCard] = useState("");
  const [delayHandler, setDelayHandler] = useState(null);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const subjectUrl = `https://openlibrary.org/subjects/${props.match.params.subjectName
      .toLowerCase()}.json?details=true`;
    const loadSubject = async () => {
      const response = await axios.get(subjectUrl).catch(function (error) {
        console.log(error);
      });
      if (typeof response != "undefined") {
        setSubject(response.data.works);
        setLoading(false)
      }
    };
    loadSubject();
  }, [props.match.params.subjectName]);
  function handleLeave() {
    clearTimeout(delayHandler);
    setInfoCard("");
  }
  function handleHover(book, idx) {
    const bookUrl = `https://openlibrary.org${book.key}.json`;
    setDelayHandler(
      setTimeout(() => {
        const loadBook = async () => {
          const response = await axios.get(bookUrl).catch(function (error) {
            console.log(error);
          });
          let descript = "";
          console.log(response.data);
          if (typeof response.data.description === "undefined") {
            descript = "N/A";
          } else if (typeof response.data.description === "string") {
            descript = response.data.description;
          } else {
            descript = response.data.description.value;
          }
          const cardInfo = (
            
            <div className="info-card">
              <h5>{response.data.title}</h5>
              <h6>{descript}</h6>
            </div>
            
          );
          setInfoCard(cardInfo);
        };
        loadBook();
        setIndex(idx);
      }, 500)
    );
  }
  const allSubjectBooks = subject.map((book, idx) => {
    let imgUrl = "";
    if (book.cover_id === "-1") {
      imgUrl =
        "https://shenandoahcountyva.us/bos/wp-content/uploads/sites/4/2018/01/picture-not-available-clipart-12.jpg";
    } else {
      imgUrl = `http://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`;
    }
    return (
      <div className="card" key={idx}>
        <article className="card-content">
          <Link to={book.key}>
            <img
              className="card-img "
              src={imgUrl}
              alt="N/A"
              onMouseOver={() => {
                handleHover(book, idx);
              }}
              onMouseLeave={handleLeave}
              value={book}
            />
          </Link>
          {idx === index && infoCard}
        </article>
      </div>
    );
  });
  return (
    <div className="subject-showpage-container">
      <span className="personal-list-index-brand">bookbase</span>
        <span className="personal-list-index-title sml-font">{props.match.params.subjectName}</span>
      
        {loading ? <img src={loadingAnim} alt="" />:<div className="grid-body">{allSubjectBooks}</div>}
    </div>
  );
}
export default SubjectShowPage;
