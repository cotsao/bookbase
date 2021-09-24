import { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import OneList from "../components/OneList";
const axios = require("axios");
const url = `${process.env.REACT_APP_SERVER_URL}/list`;
function ReadListIndex() {
  const { user, getAccessTokenSilently } = useAuth0();
  const [lists, setLists] = useState([]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newPicture, setNewPicture] = useState("");
  const [toggleAdd, setToggleAdd] = useState(false);

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
      axios.post(url, data, {
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
      const data = JSON.stringify({auth0ID:user.sub})
      const token = await getAccessTokenSilently();
      try {
        await axios.delete(`${url}/${listId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          data:data
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
    };
    createList(list);
    setToggleAdd(!toggleAdd);
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
      <div key={idx}>
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
