import {useState,useEffect} from 'react'
import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
const axios = require('axios')
function BookShowPage(props){
    const [book, setBook] = useState({});
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
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
        const bookUrl = `https://openlibrary.org/works/${props.match.params.bookID}.json`
        const loadBook = async ()=>{
            const response = await axios.get(bookUrl) .catch(function (error) {
                console.log(error);
            });
            setBook(response.data)
            console.log("loop")
            
        }
        loadBook()
    },[props.match.params.bookID]);
    let images = []
    if (book.covers){
        images = book.covers.map((cover, idx)=>{
            const imgUrl = `http://covers.openlibrary.org/b/id/${cover}-S.jpg`
            return <img key={idx} src={imgUrl} alt="N/A"/>
        })
    }
    
    
    return(
        <div>
            <div>
            <Carousel className="sml-container"
                responsive={responsive}
                infinite={true}
            >
                {images}
            </Carousel>
            </div>
            <div>
                <h3>{book.title && book.title}</h3>
                <p>{book.description?.value}</p>
            </div>
            
        </div>
    )
}
export default BookShowPage