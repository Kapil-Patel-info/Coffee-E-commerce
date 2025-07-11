
import "bootstrap/dist/css/bootstrap.min.css";
import "../css/footer.css"; 

const Footer = () => {
  return (
    <>
      <footer className="bg-white text-dark pt-5 pb-3 position-relative">
        <div className="container">
          <div className="row text-center text-md-start">
            {/* Column 1 - Company */}
            <div className="col-6 col-md-3 mb-4">
              <h6 className="text-uppercase mb-3 letter-spacing-3">Company</h6>
              <ul className="list-unstyled">
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Shipping Policy</li>
                <li>Return and Refunds</li>
                <li>Track Your Order</li>
                <li>Terms of Service</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            {/* Column 2 - Coffee Estates */}
            <div className="col-6 col-md-3 mb-4">
              <h6 className="text-uppercase mb-3 letter-spacing-3">Coffee Estates</h6>
              <ul className="list-unstyled">
                <li>Baba Budangiri Estate</li>
                <li>Baarbara Estate</li>
                <li>Thippanahalli Estate</li>
                <li>Thogurihunkal Estate</li>
                <li>Mullayangiri Estate</li>
              </ul>
            </div>

            {/* Column 3 - Sampler Packs */}
            <div className="col-6 col-md-3 mb-4">
              <h6 className="text-uppercase mb-3 letter-spacing-3">Sampler Packs</h6>
              <ul className="list-unstyled">
                <li>Medium Roast - Coffee Sample Pack</li>
                <li>Medium Dark Roast - Coffee Sample Pack</li>
                <li>Dark Roast - Coffee Sample Pack</li>
                <li>Barrel Aged Coffee - Sampler Pack</li>
                <li>Fermented Coffee - Sample Pack</li>
              </ul>
            </div>

            {/* Column 4 - Shop by Brands */}
            <div className="col-6 col-md-3 mb-4">
              <h6 className="text-uppercase mb-3 letter-spacing-3">Shop by Brands (Coffee Accessories)</h6>
              <ul className="list-unstyled">
                <li>Timemore</li>
                <li>Hario</li>
                <li>Origami</li>
                <li>Kalita Co.</li>
                <li>Bialetti</li>
              </ul>
            </div>
          </div>

          <div className="row text-center text-md-start align-items-center mt-4">
            {/* Signup and Save */}
            <div className="col-md-5 mx-auto mb-4">
              <h6 className="text-uppercase mb-3 letter-spacing-3">Sign Up and Save</h6>
              <p className="mb-3">
                Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
              </p>
              <form className="d-flex align-items-center border-bottom pb-1">
                <input
                  type="email"
                  className="form-control border-0 shadow-none p-0"
                  placeholder="Enter your email"
                  aria-label="Email"
                  required
                />
                <button type="submit" className="btn btn-link p-0 ms-2" aria-label="Subscribe">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="bi bi-envelope"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4z" />
                    <path d="M.05 4.555.5 4.888l7 4.2 7-4.2.45-.333a.5.5 0 0 0-.5-.556l-7 4.201-7-4.2a.5.5 0 0 0-.45.555z" />
                  </svg>
                </button>
              </form>
              <div className="mt-3 d-flex justify-content-start gap-3 fs-4">
                {/* Instagram */}
                <a href="https://www.instagram.com" aria-label="Instagram" target="_blank" rel="noreferrer" className="text-dark">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    className="bi bi-instagram"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C5.243 0 4.947.014 3.59.072c-1.355.057-2.285.256-3.1.543a5.92 5.92 0 0 0-2.14 1.354 5.936 5.936 0 0 0-1.355 2.14c-.286.815-.486 1.745-.542 3.1C-.02 4.948 0 5.243 0 8c0 2.757.014 3.054.072 4.41.056 1.355.256 2.286.542 3.1.32.92.796 1.704 1.354 2.14a5.92 5.92 0 0 0 2.14 1.354c.815.287 1.745.487 3.1.543 1.356.058 1.653.072 4.41.072s3.054-.014 4.41-.072c1.355-.056 2.286-.256 3.1-.543a5.922 5.922 0 0 0 2.14-1.354 5.92 5.92 0 0 0 1.354-2.14c.287-.814.487-1.744.543-3.1.058-1.357.071-1.654.071-4.41s-.013-3.054-.071-4.41c-.056-1.355-.256-2.285-.543-3.1a5.92 5.92 0 0 0-1.354-2.14 5.92 5.92 0 0 0-2.14-1.354c-.815-.286-1.745-.486-3.1-.543C11.053.014 10.757 0 8 0zm0 1.437c2.68 0 3.0.012 4.068.06 1.013.047 1.56.213 1.922.36.486.2.833.44 1.198.806.365.366.606.712.806 1.197.147.363.313.909.36 1.922.049 1.068.06 1.388.06 4.068 0 2.68-.011 3-.06 4.068-.047 1.013-.213 1.56-.36 1.923a2.63 2.63 0 0 1-.806 1.197 2.63 2.63 0 0 1-1.197.806c-.363.147-.91.313-1.923.36-1.068.05-1.387.06-4.068.06-2.68 0-3-.01-4.068-.06-1.013-.047-1.56-.213-1.922-.36a2.615 2.615 0 0 1-1.197-.805 2.615 2.615 0 0 1-.806-1.197c-.147-.363-.313-.91-.36-1.922-.05-1.068-.06-1.387-.06-4.068 0-2.68.011-3 .06-4.068.047-1.013.213-1.56.36-1.922a2.63 2.63 0 0 1 .806-1.197 2.63 2.63 0 0 1 1.197-.806c.362-.147.91-.313 1.922-.36 1.068-.049 1.386-.06 4.067-.06zm0 3.93a3.638 3.638 0 1 0 0 7.275 3.638 3.638 0 0 0 0-7.275zm0 6.005a2.367 2.367 0 1 1 0-4.733 2.367 2.367 0 0 1 0 4.733zm4.96-6.32a.875.875 0 1 1-1.75 0 .875.875 0 0 1 1.75 0z" />
                  </svg>
                </a>

                {/* Facebook */}
                <a href="https://www.facebook.com" aria-label="Facebook" target="_blank" rel="noreferrer" className="text-dark">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    className="bi bi-facebook"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8.94 5.741H10.5V4H8.94c-1.346 0-1.847.89-1.847 1.84v1.155H6V9.49h1.093v5.54h2.684v-5.54h1.746l.278-2.504H9.77V6.514a.537.537 0 0 1 .433-.773z" />
                  </svg>
                </a>


                <a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noreferrer" className="text-dark">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    fill="currentColor"
                    className="bi bi-twitter"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5 9.341-9.334 0-.143 0-.284-.01-.425A6.668 6.668 0 0 0 16 3.54a6.548 6.548 0 0 1-1.89.518 3.29 3.29 0 0 0 1.447-1.817 6.574 6.574 0 0 1-2.08.797A3.28 3.28 0 0 0 7.875 6.034 9.325 9.325 0 0 1 1.112 2.1 3.28 3.28 0 0 0 2.13 7.172 3.18 3.18 0 0 1 0 6.88v.04a3.28 3.28 0 0 0 2.633 3.218 3.203 3.203 0 0 1-.865.115 3.22 3.22 0 0 1-.615-.058 3.283 3.283 0 0 0 3.067 2.278A6.588 6.588 0 0 1 .78 13.58 6.32 6.32 0 0 1 0 13.54a9.32 9.32 0 0 0 5.026 1.467" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Logo in center for md and above */}
            <div className="col-md-2 d-none d-md-flex justify-content-center mb-4">
              <div
                style={{
                  width: "80px",
                  height: "80px",
                  backgroundColor: "#2c2c2c",
                  borderRadius: "15%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#fff",
                  fontSize: "0.7rem",
                  fontWeight: "600",
                  textAlign: "center",
                  fontFamily: "'Arial', sans-serif",
                }}
              >
                toffee<br />
                coffee<br />
                roasters
              </div>
            </div>

            <div className="col-md-5 text-center text-md-end mb-4">
              <small>© 2025 Toffee Coffee Roasters</small>
            </div>
          </div>
        </div>

        {/* WhatsApp floating button bottom right */}
        <a
          href="https://wa.me/1234567890"
          target="_blank"
          rel="noreferrer"
          aria-label="WhatsApp Chat"
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 1050,
            backgroundColor: "#25D366",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="#fff"
            className="bi bi-whatsapp"
            viewBox="0 0 16 16"
          >
            <path d="M13.601 2.326A7.746 7.746 0 0 0 8.048.02C3.734.02.27 3.483.259 7.796a7.72 7.72 0 0 0 1.26 4.182L.08 15.825l3.97-1.318a7.73 7.73 0 0 0 3.982 1.055h.009c4.313 0 7.776-3.463 7.787-7.776a7.76 7.76 0 0 0-2.228-5.36Zm-5.553 9.675a5.72 5.72 0 0 1-2.917-.8l-.209-.12-2.35.779.79-2.293-.136-.238a5.732 5.732 0 0 1-.877-3.397c.002-3.161 2.58-5.74 5.741-5.742a5.7 5.7 0 0 1 4.054 1.68 5.633 5.633 0 0 1 1.688 4.055c-.01 3.161-2.59 5.74-5.75 5.74Zm3.068-4.154c-.168-.084-.996-.491-1.15-.546-.152-.062-.263-.083-.373.08-.11.162-.425.546-.52.658-.094.11-.188.123-.35.041a4.507 4.507 0 0 1-1.334-.826 5.04 5.04 0 0 1-.93-1.15c-.1-.177-.01-.275.077-.362.078-.078.175-.203.262-.305a.62.62 0 0 0 .09-.155.346.346 0 0 0-.02-.31c-.123-.31-.555-1.333-.76-1.82-.2-.476-.403-.41-.554-.41a1.051 1.051 0 0 0-.39.058c-.13.056-.498.243-.76.517-.29.3-1.106 1.08-1.106 2.624 0 1.543 1.134 3.037 1.292 3.248.16.212 2.23 3.428 5.4 4.8a5.312 5.312 0 0 0 2.393.384c.728-.035 2.235-.911 2.554-1.796.28-.73.28-1.356.196-1.79-.068-.34-.27-.55-.45-.72Z" />
          </svg>
        </a>
      </footer>

      {/* <style jsx>{`
        .letter-spacing-3 {
          letter-spacing: 3px;
        }
        footer ul li {
          cursor: pointer;
          margin-bottom: 0.5rem;
          font-weight: 400;
          font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
          font-size: 0.9rem;
        }
        footer ul li:hover {
          text-decoration: underline;
        }
      `}</style> */}
    </>
  );
};

export default Footer;

