import { useState, useEffect } from "react";
import OneList from "../components/OneList";
const axios = require("axios");
const url = "http://localhost:4000/api/list";
function ReadListIndex() {
  const [lists, setLists] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newPicture, setNewPicture] = useState("");
  const [toggleAdd, setToggleAdd] = useState(false);

  useEffect(() => {
    getIndex(url);
  }, []);
  function getIndex(endPoint) {
    const loadIndex = async () => {
      const response = await axios.get(endPoint).catch(function (error) {
        console.log(error);
      });
      console.log(response.data);
      setLists(response.data);
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
    setToggleAdd(!toggleAdd);
  }
  function deleteListHandler(listId) {
    const deleteList = async () => {
      await axios.delete(`${url}/${listId}`).catch(function (error) {
        console.log(error);
      });
      getIndex(url);
    };
    deleteList();
  }

  const addListForm = (
    <div>
      <span>New List</span>
      <form onSubmit={(e) => createFormSubmit(e)}>
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
    </div>
  );
  const renderLists = lists.map((list, idx) => {
    return (
      <div>
        <button onClick={() => deleteListHandler(list._id)}>Delete List</button>
        <OneList list={list} key={idx} />
      </div>
    );
  });
  return (
    <div className="med-container shove-down">
      ReadListIndex
      {renderLists}
      <button onClick={(e) => setToggleAdd(!toggleAdd)}>
        Create a new List
      </button>
      {toggleAdd && addListForm}
    </div>
  );
}
export default ReadListIndex;
