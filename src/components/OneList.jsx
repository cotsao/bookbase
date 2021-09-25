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
      const response = await axios.put(updateUrl, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      if (typeof response !== "undefined") {
        setList(response.data);
      }
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
      books: props.list.books,
      _id:props.list._id
    };
    updateList(updatedList);
    setToggleAdd(!toggleAdd);
  }
  const bookList = list.books.map((book, idx) => {
    return (
      <div key={idx}>
        <OneBook deleteBookHandler={deleteBookHandler} book={book} />
        
      </div>
    );
  });
  const updateListForm = (
    <div className="new-list-form-container">
      <span>Update List</span>
      <form className="new-list-form" onSubmit={(e) => createFormSubmit(e)}>
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
  return (
    <div className="one-list">
      <div className="one-list-content">
        <div className="one-list-text">
          <div>
          <h6 className="one-list-title big-font ">{list.title} {" "}<span className="one-list-edit" onClick={(e) => setToggleAdd(!toggleAdd)}>
        (edit)
      </span></h6>
      <span className="one-list-author">created by {list.createdBy}</span>
          </div>
          
          <p className="one-list-description sml-font">{list.description}</p>
        </div>
        <img className="one-list-image" src={list.picture} alt="N/A" />
        <svg
        onClick={() => props.deleteListHandler(props.list._id)}
        xmlns="http://www.w3.org/2000/svg"
        className=" list-delete icon icon-tabler icon-tabler-x"
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

      
      {toggleAdd && updateListForm}

      {bookList}
    </div>
  );
}
export default OneList;
