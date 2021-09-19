import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
const axios = require('axios')
function SubjectShowPage(props) {
    const [subject, setSubject] = useState([]);
    const [infoCard, setInfoCard] = useState("");
    const [delayHandler, setDelayHandler] = useState(null);

    useEffect(() => {
        const subjectUrl = `https://openlibrary.org/subjects/${props.match.params.subjectName.toLowerCase().replace(/[^a-zA-Z0-9]/g, '_')}.json?details=true`
        const loadSubject = async () => {
            const response = await axios.get(subjectUrl)
                .catch(function (error) {
                    console.log(error)
                })
            console.log(response.data)
            setSubject(response.data.works)
        }
        loadSubject()

    }, [props.match.params.subjectName]);
    function handleLeave() {
        clearTimeout(delayHandler)
        setInfoCard("")
    }
    function handleHover(book) {
        const bookUrl = `https://openlibrary.org${book.key}.json`
        setDelayHandler(setTimeout(() => {
            const loadBook = async () =>{
                const response = await axios.get(bookUrl).catch(function (error){console.log(error)})
                console.log(response.data)
                let descript ="" 
                if (response.data.description.value){
                    descript = response.data.description.value
                }
                else{
                    descript =response.data.description
                }
                const cardInfo = 
                    <div className="info-card">
                        <h5>{response.data.title}</h5>
                        <h6>{descript}</h6>
                    </div>
                    setInfoCard(cardInfo)
            }
            loadBook()
            
        }, 500))
    }
    const allSubjectBooks = subject.map((book, idx) => {
        let imgUrl = ""
        if (book.cover_id === '-1') {
            imgUrl = "https://shenandoahcountyva.us/bos/wp-content/uploads/sites/4/2018/01/picture-not-available-clipart-12.jpg"
        }
        else {
            imgUrl = `http://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`
        }
        return (
            <div className="card" key={idx}>
                <article className="content">
                    <Link to={book.key}>
                        <img
                            className="content-img book-img"
                            src={imgUrl}
                            alt="N/A"
                            onMouseOver={() => { handleHover(book) }}
                            onMouseLeave={handleLeave}
                            value={book}
                        />
                    </Link>
                                     
                </article>
            </div>
        )
    })
    return (
        <div>
            <h3>{props.match.params.subjectName}</h3>

            <div className="grid-body">
                {allSubjectBooks}
                {infoCard}
            </div>
               



        </div>
    )
}
export default SubjectShowPage