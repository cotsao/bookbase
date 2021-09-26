import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
const axios = require("axios");
const url = `${process.env.REACT_APP_SERVER_URL}/list`;
function AddToReadList(props) {
  const { user, getAccessTokenSilently } = useAuth0();
  const [listId, setListId] = useState("");
  const renderOptions = props.lists.map((list, idx) => {
    return (
      <option key={idx} value={list._id}>
        {list.title}
      </option>
    );
  });
  function onSelectChange(id) {
    setListId(id);
  }

  async function onButtonClick() {
    const data = JSON.stringify({ auth0ID: user.sub, books: props.bookKey });
    const token = await getAccessTokenSilently();
    console.log(`${url}/${listId}/books`);
    try {
      axios.post(`${url}/${listId}/books`, data, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      });
      props.toggleDropDown(props.index);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="add-dropdown">
      <select onChange={(e) => onSelectChange(e.target.value)}>
        <option value="" selected>
          Select List
        </option>
        {renderOptions}
      </select>
      <button className="add-list-btn" onClick={() => onButtonClick()}>Add to Selected List</button>
    </div>
  );
}
export default AddToReadList;
