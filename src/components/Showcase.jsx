import { useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel';
import { Link } from 'react-router-dom'
import 'react-multi-carousel/lib/styles.css';
const axios = require('axios');
function Showcase() {

    const [showBooks, setShowBooks] = useState([])
    const [searchTerm, setSearchTerm] = useState("fantasy");
    const [dropdown, setDropdown] = useState(false);
    const [index, setIndex] = useState(0);
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 6
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    useEffect(() => {
        const loadBooks = async () => {
            const response = await axios.get(`https://openlibrary.org/subjects/${searchTerm.replace(/\s+/g, '-').toLowerCase()}.json?details=true`)
            if (typeof response != 'undefined') {
                console.log(response.data)
                setShowBooks(response.data.works)
            }
        }
        loadBooks()
    }, [searchTerm])
    const cardElements = showBooks.map((book, idx) => {
        console.log(`${book}`)
        const imgUrl = `http://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`
        return (
            <div className="card" key={idx}>
                <article style={{ maxHeight: 250 }} className="content">
                    <Link to={book.key}>
                        <img style={{ maxHeight: 250 }} className="content-img book-img" src={imgUrl} alt="N/A" />
                    </Link>
                    <div className="context-text">
                        <h3 className="title">
                            {book.title}
                        </h3>
                    </div>
                </article>
                <h2 onClick={()=>toggleDropdown(idx)} className="add-btn">Add</h2>
                {dropdown && (idx===index)&& book.title}
            </div>
        )
    })
    function toggleDropdown(idx){
        setDropdown(!dropdown)
        setIndex(idx)
    }
    function handleSubjClick(subject) {
        setSearchTerm(subject)
    }
    const subj = ["Fantasy", "Biography", "Children", "History"]
    const subjBtn = subj.map((subject, idx) => {
        return (
            <span key={idx} onClick={() => handleSubjClick(subject)}>{subject}</span>
        )
    })
    return (
        <div className="med-container showcase-container">
            <h1>Search by Subject</h1>
            <h6>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</h6>
            <div className="subj-btn">
                {subjBtn}
            </div>
            <h1>{searchTerm} books</h1>
            <div>
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    arrows={false}
                >
                    {cardElements}
                </Carousel>
            </div>

        </div>
    )
}
export default Showcase