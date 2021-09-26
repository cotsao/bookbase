function Testimonials() {
  return (
    <div className="testimonial-wrapper">
      <div className="testimonial-content">
        <div className="testimonial-title-section">
          <h3 className="testimonial-title">Why People Believe in Us</h3>
          <p className="testimonial-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
        </div>
        <div className="testimonial-card-section">
          <div className="testimonial-card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-receipt-2"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="#895B4A"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M5 21v-16a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v16l-3 -2l-2 2l-2 -2l-2 2l-2 -2l-3 2" />
              <path d="M14 8h-2.5a1.5 1.5 0 0 0 0 3h1a1.5 1.5 0 0 1 0 3h-2.5m2 0v1.5m0 -9v1.5" />
            </svg>
            <h6 className="testimonial-card-title">We're Free</h6>
            <p className="testimonial-card-description">
              {" "}
              bookbase is the results of tens of hours, allowing you to compile
              lists in a fraction of that time. Despite that, our service will always be free.
            </p>
          </div>
          <div className="testimonial-card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-trending-up"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="#895B4A"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <polyline points="3 17 9 11 13 15 21 7" />
              <polyline points="14 7 21 7 21 14" />
            </svg>
            <h6 className="testimonial-card-title">Limitless growth</h6>
            <p className="testimonial-card-description">
              While we boast an impressive count of 0 users, bookbase is ready
              to expand. Trajectories show that there is nowhere to go but up
              for us.
            </p>
          </div>
          <div className="testimonial-card">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-palette"
              width="44"
              height="44"
              viewBox="0 0 24 24"
              strokeWidth="1"
              stroke="#895B4A"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M12 21a9 9 0 1 1 0 -18a9 8 0 0 1 9 8a4.5 4 0 0 1 -4.5 4h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25" />
              <circle cx="7.5" cy="10.5" r=".5" fill="currentColor" />
              <circle cx="12" cy="7.5" r=".5" fill="currentColor" />
              <circle cx="16.5" cy="10.5" r=".5" fill="currentColor" />
            </svg>
            <h6 className="testimonial-card-title">I don't really know</h6>
            <p className="testimonial-card-description">
              Honestly, this section is only here so I could have another accent
              color section.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Testimonials;
