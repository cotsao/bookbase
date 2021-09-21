import { Link } from "react-router-dom";
import { useState } from "react";
function RelatedSubjectList(props) {
  const [toggleShowAll, setToggleShowAll] = useState(false);
  const renderRelatedSubjectsPart = props.subjects
    .slice(0, 10)
    .map((subject, idx) => {
      const sanitizedSubject = subject
        .toLowerCase()
        .replace(/[ ]/g, "_")
        .replace(/[&\/\\#,+()$~%.":*?<>{}]/g, "");
      return (
        <Link key={idx} to={`/subject/${sanitizedSubject}`}>
          {" "}
          <span>{subject} </span>{" "}
        </Link>
      );
    });
  const renderRelatedSubjectsRest = props.subjects
    .slice(10)
    .map((subject, idx) => {
      const sanitizedSubject = subject
        .toLowerCase()
        .replace(/[ ]/g, "_")
        .replace(/[&\/\\#,+()$~%.":*?<>{}]/g, "");
      return (
        <Link key={idx} to={`/subject/${sanitizedSubject}`}>
          {" "}
          <span>{subject} </span>{" "}
        </Link>
      );
    });
  return (
    <div>
      {renderRelatedSubjectsPart}
      {toggleShowAll ? (
        <span onClick={() => setToggleShowAll(!toggleShowAll)}>Hide</span>
      ) : (
        <span onClick={() => setToggleShowAll(!toggleShowAll)}>Show All</span>
      )}
      <br/>
      {toggleShowAll && renderRelatedSubjectsRest}
    </div>
  );
}
export default RelatedSubjectList;
