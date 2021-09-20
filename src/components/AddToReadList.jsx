import { useEffect, useState } from 'react'
const axios = require('axios')
const url = "http://localhost:4000/api/list"
function AddToReadList(props) {
    const [lists, setLists] = useState([]);
    const [listId, setListId] = useState("");
    useEffect(() => {
        getIndex(url)

    }, []);
    function getIndex(endPoint) {
        const loadIndex = async () => {
            const reponse = await axios.get(endPoint).catch(function (error) {
                console.log(error)
            })
            console.log(reponse.data)
            setLists(reponse.data)
        }
        loadIndex()
    }
    const renderOptions = lists.map((list,idx)=>{
        return(
            <option key ={idx} value={list._id}>{list.title}</option>
        )
    })
    function onSelectChange(id){
        setListId(id)
    }
    function onButtonClick(){
        console.log("clicked")
        axios.post(`${url}/${listId}/books`,
        {"books":props.bookKey}
          ).then(function (response) {
            console.log(response);
          }).catch(function(error){console.log(error)})
    }
    /* onMouseLeave={()=>props.mouseLeave(props.index)} */
    return (
        <div  className="add-btn">
            <select  onChange={e=>onSelectChange(e.target.value)}>
                <option value="" selected>Select List</option>
                {renderOptions}
            </select>
            <button onClick={()=>onButtonClick()}>Add to Selected List</button>
        </div>
    )
}
export default AddToReadList