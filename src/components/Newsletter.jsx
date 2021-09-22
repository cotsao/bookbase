function Newsletter() {
  return (
    <div className="newsletter-container">
      <div className="newsletter-card">
        <img
          className="newsletter-img"
          src="https://images.unsplash.com/photo-1523634921619-37ce98c1877f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
          alt=""
        />
        <div>
          <h3 className="newsletter-title">STAY WITH US</h3>
          <h6 className="newsletter-text">subscribe to our newsletter to get updates on new features</h6>
          <input type="text" />
        </div>
      </div>
    </div>
  );
}
export default Newsletter;
