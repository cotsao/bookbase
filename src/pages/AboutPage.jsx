import image1 from "../images/teammember1.png";
import image2 from "../images/teammember2.png";
import image3 from "../images/thanosenterstheworkforce.PNG";
function AboutPage() {
  const teamInfo = [
    {
      picture: image1,
      name: "General Giraffe",
      title: "Mascot",
    },
    {
      picture: image2,
      name: "Captain Capy",
      title: "Chief Technical Officer",
    },
    {
      picture: image3,
      name: "Thanos",
      title: "Executive Producer",
    },
  ];
  const renderTeam = teamInfo.map((member, idx) => {
    return (
      <div className="team-card">
        <img className="team-image" src={member.picture} alt="N/A" />
        <h6 className="team-name">{member.name}</h6>
        <p className="team-titlename">{member.title}</p>
      </div>
    );
  });
  return (
    <div className="About-Page">
      <section class="about-masthead" role="img" aria-label="Image Description">
        <h1 className="about-hero-text">About Us</h1>
      </section>
      <div className="med-container aboutpage-container">
        <div className="about-page-title">
          bookbase
        </div>
        <div className="who-we-are">
          <h4 className="roboto-slab">Who We Are</h4>
          <p className="roboto">
            Bookbase is the world’s largest site for readers and book
            recommendations. Our mission is to help people find and share books
            they love. Bookbase launched in September 2021.{" "}
          </p>
          <h4 className="roboto-slab">A Few Things You Can Do On Bookbase</h4>
          <p className="roboto-slab-title">Track the books you want to read</p>
          <p className="roboto">Search for books</p>
          <p className="roboto">Create your own custom lists</p>
          <p className="roboto">Share with friends</p>
        </div>
        <div className="team-container">
          <div className="team-title">
            <h4 className="roboto-slab">Our Team</h4>
            <p className="roboto-slab-title">Meet Our Team of Experts</p>
          </div>
          <div className="team-section">{renderTeam}</div>
        </div>
      </div>
    </div>
  );
}
export default AboutPage;
