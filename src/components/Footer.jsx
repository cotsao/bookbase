import logo from "../images/logo.png";
function Footer() {
  return (
    <div className="footer-container">
      <img className="footer-logo" src={logo} alt="" />
      <div className="footer-text">
        <span className="footer-descript">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered duskam alteration variations of passages
        </span>
        <div className="footer-logos">
          <a href="https://github.com/cotsao/bookbase-frontend">
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-github"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="0.5"
              stroke="#895B4A"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
            </svg>
          </a>

          <a href="https://www.linkedin.com/in/cody-t/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-brand-linkedin"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="0.5"
              stroke="#895B4A"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <rect x="4" y="4" width="16" height="16" rx="2" />
              <line x1="8" y1="11" x2="8" y2="16" />
              <line x1="8" y1="8" x2="8" y2="8.01" />
              <line x1="12" y1="16" x2="12" y2="11" />
              <path d="M16 16v-3a2 2 0 0 0 -4 0" />
            </svg>
          </a>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-javascript"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="0.5"
            stroke="#895B4A"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z" />
            <path d="M7.5 8h3v8l-2 -1" />
            <path d="M16.5 8h-2.5a0.5 .5 0 0 0 -.5 .5v3a0.5 .5 0 0 0 .5 .5h1.423a0.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-twitter"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="0.5"
            stroke="#895B4A"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c-.002 -.249 1.51 -2.772 1.818 -4.013z" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="icon icon-tabler icon-tabler-brand-unsplash"
            width="44"
            height="44"
            viewBox="0 0 24 24"
            strokeWidth="0.5"
            stroke="#895B4A"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 11h5v4h6v-4h5v9h-16zm5 -7h6v4h-6z" />
          </svg>
        </div>
        <div className="footer-links">
          <span className="footer-link-el">Trending</span>
          <span className="footer-link-el">Best Seller</span>
          <span className="footer-link-el">All Product</span>
          <span className="footer-link-el">Wishlist</span>
          <span className="footer-link-el">Blog</span>
          <span className="footer-link-el">Contact</span>
        </div>
      </div>
    </div>
  );
}
export default Footer;
