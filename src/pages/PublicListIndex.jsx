import { useState, useEffect } from "react";
import PublicOneList from "../components/PublicOneList";
import loadingAnim from "../images/loading.svg";
const axios = require("axios");
const url = `${process.env.REACT_APP_SERVER_URL}/public`;
function PublicListIndex() {
  const [lists, setLists] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    getIndex(url);
  }, []);

  function getIndex(endPoint) {
    const loadIndex = async () => {
      try {
        const response = await axios.get(endPoint);
        if (typeof response !== "undefined") {
          setLists(response.data);
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    loadIndex();
  }
  const renderLists = lists.map((list, idx) => {
    return (
      <div key={idx}>
        <PublicOneList list={list} />
      </div>
    );
  });
  const loadingSVG = (
    <img
      style={{
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%, -50%)",
      }}
      src={loadingAnim}
      alt=""
    />
  );
  return (
    <div className="personal-list-index-wrapper shove-down">
      <div className="personal-list-index-title-content">
        <span className="personal-list-index-brand">bookbase</span>
        <span className="personal-list-index-title sml-font">Public Lists</span>
      </div>
      {renderLists}
      {loading ? loadingSVG : null}
    </div>
  );
}
export default PublicListIndex;
