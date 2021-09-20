function OneList(props){
    const bookList = props.list.books.map((book,idx)=>{
        return <p key={idx}>{book}</p>
    })
    return(
        <div>
            <h6>{props.list.title}</h6>
            <p>{props.list.description}</p>
            <img src={props.list.picture} alt="N/A" />
            {bookList}
        </div>
    )
}
export default OneList