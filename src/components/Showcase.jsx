import { useState, useEffect } from 'react'
import Carousel from 'react-multi-carousel';
import {Link} from 'react-router-dom'
import 'react-multi-carousel/lib/styles.css';
const axios = require('axios');
function Showcase(props) {
    
    const [showBooks, setShowBooks] = useState([])
    const searchTerm = props.searchTerm
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
    useEffect (()=>{
        const loadBooks = async ()=>{
            const response = await axios.get(`https://openlibrary.org/subjects/${searchTerm}.json?details=true`)
            setShowBooks(response.data.works)
        }
        loadBooks()
    },[searchTerm])
    const cardElements = showBooks.map((book,idx)=>{
        const imgUrl = `http://covers.openlibrary.org/b/id/${book.cover_id}-M.jpg`
        return (
            <div className="card" key={idx}>
                <article style={{maxHeight:250}} className="content">
                    <Link to={book.key}>
                        <img style={{maxHeight:250}} className="content-img book-img" src={imgUrl} alt="N/A" />
                    </Link>
                    <div className="context-text">
                        <h3 className="title">
                            {book.title}
                        </h3>
                    </div>
                </article>
            </div>
        )
    })
    return (
        <div className="med-container">
            <h1>{searchTerm} books</h1>
            <Carousel 
                responsive={responsive}
                infinite={true}
                arrows={false}
            >
                {cardElements}
            </Carousel>
        </div>
    )
}
export default Showcase