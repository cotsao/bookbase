import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "../App.css";
function About() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  const lorem =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.";
  const cardData = [
    {
      image:
        "https://images.unsplash.com/photo-1607473128383-0cf6c96f0689?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      title: "Lorem Ipsum",
      description: lorem,
    },
    {
      image:
        "https://images.unsplash.com/photo-1579017308347-e53e0d2fc5e9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=634&q=80",
      title: "Lorem Ipsum",
      description: lorem,
    },
    {
      image:
        "https://images.unsplash.com/photo-1515541965486-309946b5572b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      title: "Lorem Ipsum",
      description: lorem,
    },
    {
      image:
        "https://images.unsplash.com/photo-1592680097831-8b0ffa4fed78?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&q=80",
      title: "Lorem Ipsum",
      description: lorem,
    },
    {
      image:
        "https://images.unsplash.com/photo-1533304514136-3ed78add7277?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      title: "Lorem Ipsum",
      description: lorem,
    },
    {
      image:
        "https://images.unsplash.com/photo-1533657514923-ab571f60b9d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=725&q=80",
      title: "Lorem Ipsum",
      description: lorem,
    },
    {
      image:
        "https://images.unsplash.com/photo-1487695652027-48e475bfa86f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
      title: "Lorem Ipsum",
      description: lorem,
    },
  ];
  const cards = cardData.map((card, idx) => {
    return (
      <div key={idx}>
        <article className="about-article">
          <img className="about-img" src={card.image} alt="N/A" />
          <h6 className="about-card-title">{card.title}</h6>
          <p className="about-card-text">{card.description}</p>
        </article>
      </div>
    );
  });
  return (
    <div className="about-container sml-font">
      <div className="med-container">
        <div className="about-showcase-title">
          <span>
            The only thing that matches the joy of reading is sharing that joy
            with others.
          </span>
        </div>

        <div className="about-carousel">
          <Carousel responsive={responsive} infinite={true}>
            {cards}
          </Carousel>
        </div>
      </div>
    </div>
  );
}
export default About;
