import axios from "axios";
import OneBook from "./OneBook";
import { useState } from "react";
const url = "http://localhost:4000/api/list";
function OneList(props) {
  const [list, setList] = useState(props.list);
  const [newTitle, setNewTitle] = useState(list.title);
  const [newDescription, setNewDescription] = useState(list.description);
  const [newPicture, setNewPicture] = useState(list.picture);
  const [toggleAdd, setToggleAdd] = useState(false);
  function deleteBookHandler(bookId) {
    const deleteBook = async () => {
      const response = await axios
        .delete(`${url}/${props.list._id}${bookId}`)
        .catch(function (error) {
          console.log(error);
        });
      setList(response.data);
      console.log(response.data);
    };
    deleteBook();
  }
  function updateList(updatedList) {
    const updateUrl = `${url}/${list._id}`
    axios.put(updateUrl, updatedList).then(function (res) {
      console.log(res);
      setList(res.data);
    });
  }
  function createFormSubmit(event) {
    event.preventDefault();
    let updatedList = {
      title: newTitle,
      description: newDescription,
      picture: newPicture,
    };
    updateList(updatedList);
    setToggleAdd(!toggleAdd)
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
      <button onClick={(e)=> setToggleAdd(!toggleAdd)}>Update the List</button>
      {toggleAdd && updateListForm}
      
      {bookList}
    </div>
  );
}
export default OneList;
