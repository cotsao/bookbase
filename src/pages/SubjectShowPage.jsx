import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
const axios = require('axios')
function SubjectShowPage(props) {
    const [subject, setSubject] = useState([]);
    
    useEffect(() => {
        const subjectUrl = `https://openlibrary.org/subjects/${props.match.params.subjectName.toLowerCase().replace(/[^a-zA-Z0-9]/g,'_')}.json?details=true`
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
    const allSubjects = subject.map((oneSubject, idx) => {
        let imgUrl = ""
        if (oneSubject.cover_id == '-1') {
            imgUrl = "https://shenandoahcountyva.us/bos/wp-content/uploads/sites/4/2018/01/picture-not-available-clipart-12.jpg"
        }
        else {
            imgUrl = `http://covers.openlibrary.org/b/id/${oneSubject.cover_id}-M.jpg`
        }
        return (
            <div className="card" key={idx}>
                <article className="content">
                    <Link to={oneSubject.key}>
                        <img className="content-img book-img" src={imgUrl} alt="N/A" />
                    </Link>
                    <div className="context-text">
                        <h3 className="title">
                            {oneSubject.title}
                        </h3>
                    </div>
                </article>
            </div>
        )
    })
    return (
        <div>
            <h3>{props.match.params.subjectName}</h3>

            <div className="grid-body">
                {allSubjects}
            </div>



        </div>
    )
}
export default SubjectShowPage