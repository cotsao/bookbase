import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import OneList from "../components/OneList";
import loadingAnim from "../images/loading.svg";
const axios = require("axios");
const url = `${process.env.REACT_APP_SERVER_URL}/list`;
function ReadListIndex() {
  const { user, getAccessTokenSilently } = useAuth0();
  const [lists, setLists] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newPicture, setNewPicture] = useState("");
  const [toggleAdd, setToggleAdd] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getIndex(url);
  }, [getAccessTokenSilently]);

  function getIndex(endPoint) {
    const loadIndex = async () => {
      const token = await getAccessTokenSilently();
      try {
        const response = await axios.get(endPoint, {
          headers: { Authorization: `Bearer ${token}` },
        });
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
  async function createList(newList) {
    const data = JSON.stringify({ auth0ID: user.sub, newList: newList });

    const token = await getAccessTokenSilently();
    try {
      await axios.post(url, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      getIndex(url);
    } catch (error) {
      console.log(error);
    }
  }
  function deleteListHandler(listId) {
    const deleteList = async () => {
      const data = JSON.stringify({ auth0ID: user.sub });
      const token = await getAccessTokenSilently();
      try {
        await axios.delete(`${url}/${listId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          data: data,
        });
        getIndex(url);
      } catch (error) {
        console.log(error);
      }
    };
    deleteList();
  }
  function createFormSubmit(event) {
    event.preventDefault();
    let list = {
      title: newTitle,
      description: newDescription,
      picture: newPicture,
      createdBy: user.nickname,
      books: [],
    };
    setNewTitle("");
    setNewDescription("");
    setNewPicture("");
    createList(list);
    setLoading(true);
    setToggleAdd(!toggleAdd);
  }

  const addListForm = (
    <div className="new-list-form-container">
      <span>New List</span>
      <form className="new-list-form" onSubmit={(e) => createFormSubmit(e)}>
        <input
          onChange={(e) => setNewTitle(e.target.value)}
          placeholder="title"
        ></input>
        <textarea
          onChange={(e) => setNewDescription(e.target.value)}
          placeholder="description"
        ></textarea>
        <input
          onChange={(e) => setNewPicture(e.target.value)}
          placeholder="picture"
        ></input>
        <button type="submit">Create List</button>
      </form>
      <svg
        onClick={(e) => setToggleAdd(!toggleAdd)}
        xmlns="http://www.w3.org/2000/svg"
        className="close-create-form icon icon-tabler icon-tabler-x"
        width="22"
        height="22"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#2d373c"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </div>
  );
  const renderLists = lists.map((list, idx) => {
    return (
      <div key={idx}>
        <OneList list={list} deleteListHandler={deleteListHandler} key={idx} />
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
        <span className="personal-list-index-title sml-font">My Lists</span>
        <span
          className="create-list-button sml-font"
          onClick={(e) => setToggleAdd(!toggleAdd)}
        >
          Create a new List
        </span>
        {toggleAdd && addListForm}
      </div>
      {renderLists}
      {loading ? loadingSVG : null}
      {toggleAdd && addListForm}
    </div>
  );
}
export default ReadListIndex;
