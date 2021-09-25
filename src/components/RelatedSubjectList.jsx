import { Link } from "react-router-dom";
import { useState } from "react";
function RelatedSubjectList(props) {
  const [toggleShowAll, setToggleShowAll] = useState(true);

  let renderedSubjects = "";
  if (toggleShowAll) {
    renderedSubjects = props.subjects.slice(0, 10).map((subject, idx) => {
      const sanitizedSubject = subject
        .toLowerCase()
        .replace(/[ ]/g, "_")
        .replace(/[&\/\\#,+()$~%.":*?<>{}]/g, "");
      return (
        <Link
          className="book-subject"
          key={idx}
          to={`/subject/${sanitizedSubject}`}
        >
          {" "}
          <span>{subject} </span>{" "}
        </Link>
      );
    });
  } else {
    renderedSubjects = props.subjects.map((subject, idx) => {
      const sanitizedSubject = subject
        .toLowerCase()
        .replace(/[ ]/g, "_")
        .replace(/[&\/\\#,+()$~%.":*?<>{}]/g, "");
      return (
        <Link
          className="book-subject"
          key={idx}
          to={`/subject/${sanitizedSubject}`}
        >
          {" "}
          <span>{subject} </span>{" "}
        </Link>
      );
    });
  }

  return (
    <div className="related-subjects">
      {renderedSubjects}
      {<br />}
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
      <br />
    </div>
  );
}
export default RelatedSubjectList;
