const NewsLetterCta = () => {
  return (
    <div className="newsletter-cta">
      <div className="newsletter-cta-content">
        <p id="title">
          STAY <span>UP TO</span> DATE WITH OUR LATEST OFFERS
        </p>

        <div className="cta-input">
          <input type="text" placeholder="Enter your e-mail address" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetterCta;
