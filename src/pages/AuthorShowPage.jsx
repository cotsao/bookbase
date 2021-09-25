import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const axios = require("axios");
function AuthorShowPage(props) {
  const [authorData, setauthorData] = useState({});
  const [authorWorks, setAuthorWorks] = useState({});
  const [imgUrl, setImgUrl] = useState("");
  const [toggleShowAll, setToggleShowAll] = useState(true);
  const [works, setWorks] = useState([]);
  useEffect(() => {
    const authorURL = `https://openlibrary.org/authors/${props.match.params.authorID}.json`;
    const worksURL = `https://openlibrary.org/authors/${props.match.params.authorID}/works.json`;
    const loadAuthor = async () => {
      const response = await axios.get(authorURL).catch(function (error) {
        console.log(error);
      });
      const worksResponse = await axios.get(worksURL).catch(function (error) {
        console.log(error);
      });
      setAuthorWorks(worksResponse.data);
      setauthorData(response.data);
      setImgUrl(response.data.photos[0]);
    };
    loadAuthor();
  }, [props.match.params.authorID]);
  useEffect(() => {
    console.log(authorWorks.entries?.slice(0, 9))
    setWorks(authorWorks.entries?.slice(0, 9))
  }, [authorWorks]);

  let descript = "";
  if (typeof authorData.bio !== "undefined") {
    if (toggleShowAll) {
      if (typeof authorData.bio === "string") {
        descript = authorData.bio.split(" ").slice(0, 80).join(" ") + "...";
      } else {
        descript =
          authorData.bio.value.split(" ").slice(0, 80).join(" ") + "...";
      }
    } else {
      if (typeof authorData.bio === "string") {
        descript = authorData.bio;
      } else {
        descript = authorData.bio.value;
      }
    }
  }
  const renderWorks = works?.map((entry,idx)=>{
    let bookUrl=""
    if(typeof entry.covers !== 'undefined'){
       bookUrl = `http://covers.openlibrary.org/b/id/${entry.covers[0]}-S.jpg`
    }
    let bookDescript = ""
    if (typeof entry.description === "undefined") {
      bookDescript = "N/A";
    } else if (typeof entry.description === "string") {
      bookDescript = entry.description;
    } else {
      bookDescript = entry.description.value;
    }
    let descriptShort = bookDescript.split(" ").slice(0, 20).join(" ") + "...";
    
    return(
      <div className="one-work" key={idx}>
        <img className="one-work-img" src={bookUrl} alt="N/A" />
        <div className="one-work-text">
        <Link className="one-work-title" to={entry?.key}>{entry?.title} </Link> 
        <span className="one-work-description ">{descriptShort}</span>

        </div>
      </div>
    )
  }) 
  

  const photo = `http://covers.openlibrary.org/b/id/${imgUrl}-M.jpg`;
  return (
    <div className="book-showpage-wrapper">
      <div className="book-container">
        <div className="book-left-col">
          <img className="book-image" src={photo} alt="" />
          <p className="b-day">born: {authorData.birth_date}</p>
          { authorData.death_date && <p className="b-day">died: {authorData.death_date}</p> }
          {authorData.wikipedia && <a className="wiki" href={authorData.wikipedia}>wiki</a>}
        </div>
        <div className="book-right-col">
          <h3 className="book-title">{authorData.name}</h3>
          <div className="book-descript">
            {descript}
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
            )}
          </div>
          <div className="works-container">
          {renderWorks}  
          </div>
          
        </div>

      </div>
    </div>
  );
}
export default AuthorShowPage;
