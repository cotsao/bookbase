import { useState, useEffect } from "react";
import OneList from "../components/OneList";
const axios = require("axios");
const url = "http://localhost:4000/api/list";
function ReadListIndex() {
  const [lists, setLists] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newPicture, setNewPicture] = useState("");

  useEffect(() => {
    getIndex(url);
  }, []);
  function getIndex(endPoint) {
    const loadIndex = async () => {
      const reponse = await axios.get(endPoint).catch(function (error) {
        console.log(error);
      });
      console.log(reponse.data);
      setLists(reponse.data);
    };
    loadIndex();
  }
  function createList(newList) {
    axios.post(url, newList).then(function (res) {
      console.log(res);
      getIndex(url);
    });
  }
  function createFormSubmit(event) {
    event.preventDefault();
    let list = {
      title: newTitle,
      description: newDescription,
      picture: newPicture,
    };
    createList(list);
  }
  function titleInputHandler(title) {
    setNewTitle(title);
  }
  function descriptionHandler(descript) {
    setNewDescription(descript);
  }
  function pictureHandler(picture) {
    setNewPicture(picture);
  }

  const renderLists = lists.map((list, idx) => {
    return <OneList list={list} key={idx} />;
  });
  return (
    <div className="med-container shove-down">
      ReadListIndex
      {renderLists}
      <div>
        <span>New List</span>
        <form onSubmit={(e) => createFormSubmit(e)}>
          <input
            onChange={(e) => titleInputHandler(e.target.value)}
            placeholder="title"
          ></input>
          <textarea
            onChange={(e) => descriptionHandler(e.target.value)}
            placeholder="description"
          ></textarea>
          <input
            onChange={(e) => pictureHandler(e.target.value)}
            placeholder="picture"
          ></input>
          <button type="submit">Create List</button>
        </form>
      </div>
    </div>
  );
}
export default ReadListIndex;
