import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
function SubjectShowcase(props) {    
    
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
    const subjectData =[
        {
            title:"Art",
            picture:"https://openlibrary.org/static/images/categories/art.svg"
        },
        {
            title:"Science Fiction",
            picture:"https://openlibrary.org/static/images/categories/science_fiction.svg"
        },
        {
            title:"Fantasy",
            picture:"https://openlibrary.org/static/images/categories/fantasy.svg"
        },
        {
            title:"Biographies",
            picture:"https://openlibrary.org/static/images/categories/biographies.svg"
        },
        {
            title:"Romance",
            picture:"https://openlibrary.org/static/images/categories/romance.svg"
        },
        {
            title:"Children",
            picture:"https://openlibrary.org/static/images/categories/children.svg"
        },
        {
            title:"History",
            picture:"https://openlibrary.org/static/images/categories/history.svg"
        },
        {
            title:"Religion",
            picture:"https://openlibrary.org/static/images/categories/religion.svg"
        },
        {
            title:"Medicine",
            picture:"https://openlibrary.org/static/images/categories/medicine.svg"
        },
        {
            title:"Mystery",
            picture:"https://openlibrary.org/static/images/categories/mystery_and_detective_stories.svg"
        },
        {
            title:"Science",
            picture:"https://openlibrary.org/static/images/categories/science.svg"
        },
        {
            title:"Music",
            picture:"https://openlibrary.org/static/images/categories/music.svg"
        },

    ]
    const cardElements = subjectData.map((subject,idx)=>{
        return (
            <div key={idx}>
                <p>{subject.title}</p>
                <img src={subject.picture} alt="n/a" />
            </div>
        )
    })
    return (
        <div className="med-container">
            <h1>Browse by Subject</h1>
            <Carousel 
                responsive={responsive}
                infinite={true}
            >
                {cardElements}
            </Carousel>
        </div>
    )
}
export default SubjectShowcase