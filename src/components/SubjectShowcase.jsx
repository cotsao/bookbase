import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";
function SubjectShowcase(props) {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 3,
    },
  };
  const subjectData = [
    {
      title: "Art",
      picture: "https://openlibrary.org/static/images/categories/art.svg",
    },
    {
      title: "Science Fiction",
      picture:
        "https://openlibrary.org/static/images/categories/science_fiction.svg",
    },
    {
      title: "Fantasy",
      picture: "https://openlibrary.org/static/images/categories/fantasy.svg",
    },
    {
      title: "Biographies",
      picture:
        "https://openlibrary.org/static/images/categories/biographies.svg",
    },
    {
      title: "Romance",
      picture: "https://openlibrary.org/static/images/categories/romance.svg",
    },
    {
      title: "Children",
      picture: "https://openlibrary.org/static/images/categories/children.svg",
    },
    {
      title: "History",
      picture: "https://openlibrary.org/static/images/categories/history.svg",
    },
    {
      title: "Religion",
      picture: "https://openlibrary.org/static/images/categories/religion.svg",
    },
    {
      title: "Medicine",
      picture: "https://openlibrary.org/static/images/categories/medicine.svg",
    },
    {
      title: "Mystery",
      picture:
        "https://openlibrary.org/static/images/categories/mystery_and_detective_stories.svg",
    },
    {
      title: "Science",
      picture: "https://openlibrary.org/static/images/categories/science.svg",
    },
    {
      title: "Music",
      picture: "https://openlibrary.org/static/images/categories/music.svg",
    },
  ];
  const cardElements = subjectData.map((subject, idx) => {
    const linkurl = `/subject/${subject.title}`;
    return (
      <div key={idx}>
        <p>{subject.title}</p>
        <Link to={linkurl}>
          <img className="subject-img" src={subject.picture} alt="n/a" />
        </Link>
      </div>
    );
  });
  return (
    <div className="med-container">
      <h1>Browse by Subject</h1>
      <Carousel responsive={responsive} infinite={true} arrows={false}>
        {cardElements}
      </Carousel>
    </div>
  );
}
export default SubjectShowcase;
