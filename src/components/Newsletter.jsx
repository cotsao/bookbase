function Newsletter() {
  return (
    <div className="newsletter-wrapper">
      <div className="newsletter-container"> 
      <img
        className="newsletter-img"
        src="https://source.unsplash.com/collection/1246622/1600x900"
        alt=""
      />
      <div className="newsletter-text-container">
        <div className="newsletter-content-container">
          <h3 className="newsletter-title med-font">stay with us</h3>
          <h6 className="newsletter-text sml-font">
            subscribe to our newsletter to get updates on new features
          </h6>
          <div className="newsletter-input">
            <input type="text" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-news"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#2d373c"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M16 6h3a1 1 0 0 1 1 1v11a2 2 0 0 1 -4 0v-13a1 1 0 0 0 -1 -1h-10a1 1 0 0 0 -1 1v12a3 3 0 0 0 3 3h11" />
              <line x1="8" y1="8" x2="12" y2="8" />
              <line x1="8" y1="12" x2="12" y2="12" />
              <line x1="8" y1="16" x2="12" y2="16" />
            </svg>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
export default Newsletter;
