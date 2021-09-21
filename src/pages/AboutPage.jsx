import image1 from "../images/teammember1.png";
import image2 from "../images/teammember2.png";
function AboutPage() {
  const teamInfo = [
    {
      picture: image1,
      name: "General Giraffe",
      title: "team designation",
    },
    {
      picture: image2,
      name: "Captain Capy",
      title: "team designation",
    },
    {
      picture: image1,
      name: "Prince Placeholder",
      title: "team designation",
    },
  ];
  const renderTeam = teamInfo.map((member, idx) => {
    return (
      <div className="team-card">
        <img className="team-image" src={member.picture} alt="N/A" />
        <h6>{member.name}</h6>
        <p>{member.title}</p>
      </div>
    );
  });
  return (
    <div className="About-Page">
      <section class="about-masthead" role="img" aria-label="Image Description">
        <h1 className="about-hero-text">About Us</h1>
      </section>
      <div className="med-container aboutpage-container">
        <div className="who-we-are">
          <h4>Who We Are</h4>
          <p>
            Bookbase is the world’s largest site for readers and book
            recommendations. Our mission is to help people find and share books
            they love. Goodreads launched in January 2007.{" "}
          </p>
          <h4>A Few Things You Can Do On Bookbase</h4>
          <p>Track the books you want to read</p>
          <p>Lorem</p>
          <p>Lorem</p>
          <p>Lorem</p>
        </div>
        <div className="team-container">
          <div className="team-title">
            <h4>Our Team</h4>
            <p>Meet Our Team of Experts</p>
          </div>

          <div className="team-section">{renderTeam}</div>
        </div>
      </div>
    </div>
  );
}
export default AboutPage;
