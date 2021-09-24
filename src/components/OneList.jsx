import axios from "axios";
import OneBook from "./OneBook";
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
const url = `${process.env.REACT_APP_SERVER_URL}/list`;

function OneList(props) {
  const { user, getAccessTokenSilently } = useAuth0();
  const [list, setList] = useState(props.list);
  const [newTitle, setNewTitle] = useState(list.title);
  const [newDescription, setNewDescription] = useState(list.description);
  const [newPicture, setNewPicture] = useState(list.picture);
  const [toggleAdd, setToggleAdd] = useState(false);

  function deleteBookHandler(bookId) {
    const deleteBook = async () => {
      const data = JSON.stringify({ auth0ID: user.sub });
      const token = await getAccessTokenSilently();
      try {
        let response = await axios.delete(`${url}/${props.list._id}${bookId}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
          data: data,
        });
        if (typeof response !== "undefined") {
          setList(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };
    deleteBook();
  }

  async function updateList(updatedList) {
    const data = JSON.stringify({
      auth0ID: user.sub,
      updatedList: updatedList,
    });
    const token = await getAccessTokenSilently();
    const updateUrl = `${url}/${list._id}`;
    try {
      const response = await axios.put(updateUrl, data,
        {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        
      });
      setList(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  function createFormSubmit(event) {
    event.preventDefault();
    let updatedList = {
      title: newTitle,
      description: newDescription,
      picture: newPicture,
      createdBy: user.nickname,
    };
    updateList(updatedList);
    setToggleAdd(!toggleAdd);
  }
  const bookList = list.books.map((book, idx) => {
    return (
      <div key={idx}>
        <OneBook book={book} />
        <button onClick={() => deleteBookHandler(book)}>delete book</button>
      </div>
    );
  });
  const updateListForm = (
    <div>
      <span>Update List</span>
      <form onSubmit={(e) => createFormSubmit(e)}>
        <input
          onChange={(e) => setNewTitle(e.target.value)}
          value={newTitle}
        ></input>
        <textarea
          onChange={(e) => setNewDescription(e.target.value)}
          value={newDescription}
        ></textarea>
        <input
          onChange={(e) => setNewPicture(e.target.value)}
          value={newPicture}
        ></input>
        <button type="submit">Update List</button>
      </form>
    </div>
  );
  return (
    <div>
      <h6>{list.title}</h6>
      <p>{list.description}</p>
      <img src={list.picture} alt="N/A" />
      <button onClick={(e) => setToggleAdd(!toggleAdd)}>Update the List</button>
      {toggleAdd && updateListForm}

      {bookList}
    </div>
  );
}
export default OneList;
