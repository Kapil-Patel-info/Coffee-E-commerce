import React from "react";
import { BsPlusLg, BsInstagram, BsTwitter, BsAt, BsFacebook, BsYoutube } from "react-icons/bs";
import { FaFire, FaBoxOpen } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../../css/users/userFooter.css";

const UserFooter = () => {
  return (
    <>
     

      <div className="top-bar">
        READ THE STORY OF OUR INSTANT COFFEE
        <BsPlusLg />
      </div>

      <div className="footer-body d-flex justify-content-between footer-flex">
        {/* Coffee Section */}
        <div className="list-section">
          <h6>COFFEE</h6>
          <ul>
            <li>
              <FaFire style={{ color: "#ff4500" }} />
              Incredible DEALS
            </li>
            <li>
              <span role="img" aria-label="star">
                ⭐
              </span>
              Premium Instant
            </li>
            <li>Cold Brew</li>
            <li>5-Minute Bags</li>
            <li>Arabica Beans</li>
            <li>Ready to Drink</li>
          </ul>
        </div>
        {/* Curated Section */}
        <div className="list-section">
          <h6>CURATED</h6>
          <ul>
            <li>
              <FaFire style={{ color: "#ff4500" }} />
              Best Sellers
            </li>
            <li>Deal of the Week</li>
            <li>Merchandise</li>
          </ul>
        </div>
        {/* Sleepy Owl Section */}
        <div className="list-section">
          <h6>SLEEPY OWL</h6>
          <ul>
            <li>
              Reviews
              <span className="reviews-badge" aria-label="1056 reviews">
                1,056
              </span>
            </li>
            <li>About Us</li>
            <li>
              <FaBoxOpen style={{ marginRight: "8px" }} />
              Sustain Packs
            </li>
            <li>Returns</li>
            <li>Contact Us</li>
            <li>Terms of Use</li>
            <li>Compliance</li>
            <li>Sitemap</li>
            <li>Blog</li>
          </ul>
        </div>
        {/* Owl + newsletter + icons section */}
        <div className="owl-wrapper" style={{ maxWidth: "320px" }}>
          <div className="owl-section">
            {/* Owl icons */}
            <svg
              aria-hidden="true"
              className="owl-icon"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M7.5 8a2.5 2.5 0 1 1 5 0h-5Z" />
              <path d="M7 13.5a2.5 2.5 0 1 1 5 0h-5Z" />
              <path d="M18 12.25c0 .97-.342 1.97-1.192 2.836a5.963 5.963 0 0 0 1.87-7.346 8.871 8.871 0 0 1-1.948 4.93c-.368.5-1.071 1.034-1.713 1.442-.309.2-.577.329-.7.38a.75.75 0 0 1-.6 0c-.12-.05-.39-.18-.7-.38-.646-.415-1.354-.95-1.712-1.44a8.876 8.876 0 0 1-1.947-4.93 5.963 5.963 0 0 0 1.87 7.345c-.85-.865-1.192-1.866-1.192-2.839a3 3 0 1 1 6 0Z"></path>
            </svg>

            <svg
              aria-hidden="true"
              className="owl-icon"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8 5a3 3 0 0 0-3 3v.5a.5.5 0 0 0 .5.5H8v-1H6.5v-.5a1.5 1.5 0 1 1 3 0v.5h.5V8h-1v4h1v-1h2v2h-3v1h2.5v-2h.5a3 3 0 0 0 0-6h-3ZM6.5 10.5v2h3v-2h-3Z" />
            </svg>

            <svg
              aria-hidden="true"
              className="owl-icon"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M7 7.75A2.75 2.75 0 1 1 12 7v.75a3.75 3.75 0 0 1-5 3.36V7.75Z" />
              <path d="M11.99 19a5.54 5.54 0 0 1-3.46-1.21C9.46 17.93 10 18 10.5 18c3.5 0 7-2 7-7.25H8v-.36A6.25 6.25 0 0 0 19.16 9c.4.27.8.56 1.14.9a9.21 9.21 0 0 1-8.31 9.1Z" />
            </svg>
          </div>
          <p className="owl-text" aria-label="Owl story description">
            Our journey started with three friends with a shared vision. It was
            simple– introduce people to{" "}
            <em>
              <b>real good coffee</b>
            </em>
            . Today, we’re making high-quality, freshly roasted coffee accessible
            to everyone with our exclusive products.
          </p>
          <form
            className="newsletter-container"
            onSubmit={(e) => e.preventDefault()}
            aria-label="Email newsletter subscription form"
          >
            <input
              type="email"
              placeholder="Email Newsletter"
              className="newsletter-input"
              aria-label="Email Newsletter Input"
              required
            />
            <button
              type="submit"
              className="newsletter-button"
              aria-label="Submit newsletter subscription"
            >
              <BsPlusLg style={{ transform: "rotate(45deg)" }} />
            </button>
          </form>
          <div className="social-icons" aria-label="Social media links">
            <BsInstagram tabIndex={0} aria-label="Instagram" />
            <BsTwitter tabIndex={0} aria-label="Twitter" />
            <BsAt tabIndex={0} aria-label="Email" />
            <BsFacebook tabIndex={0} aria-label="Facebook" />
            <BsYoutube tabIndex={0} aria-label="YouTube" />
          </div>
        </div>
      </div>

      <div className="footer-bottom" aria-label="Footer copyright and legal">
        © 2025 Sleepy Owl Coffee &nbsp;•&nbsp;
        <a href="#" tabIndex={0}>
          Privacy
        </a>
        &nbsp;•&nbsp;
        <a href="#" tabIndex={0}>
          Terms of Use
        </a>
      </div>
    </>
  );
};

export default UserFooter;

