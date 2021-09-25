
import PublicOneBook from "./PublicOneBook";
import { useState } from "react";
function PublicOneList(props) {
  const [list] = useState(props.list);
  const bookList = list.books.map((book, idx) => {
    return (
      <div key={idx}>
        <PublicOneBook book={book} />        
      </div>
    );
  });
  return (
    <div className="one-list">
      <div className="one-list-content">
        <div className="one-list-text">
          <div>
            <h6 className="one-list-title big-font ">
              {list.title}{" "}
            </h6>
            <span className="one-list-author">created by {list.createdBy}</span>
          </div>
          <p className="one-list-description sml-font">{list.description}</p>
        </div>
        <img className="one-list-image" src={list.picture} alt="N/A" />
      </div>
      {bookList}
    </div>
  );
}
export default PublicOneList
