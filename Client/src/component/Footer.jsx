import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { GiCoffeeCup } from "react-icons/gi";

const Footer = () => {
  return (
    <footer className="bg-light text-dark pt-5 pb-3">
      <div className="container">
        <div className="row">
          {/* Coffee Section */}
          <div className="col-md-3 col-6 mb-4">
            <h5 className="fw-bold mb-3">COFFEE</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Incredible DEALS</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Premium Instant</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Cold Brew</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-dark">5-Minute Bags</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Arabica Beans</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Ready to Drink</a></li>
            </ul>
          </div>

          {/* Curated Section */}
          <div className="col-md-3 col-6 mb-4">
            <h5 className="fw-bold mb-3">CURATED</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Best Sellers</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Deal of the Week</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Merchandise</a></li>
            </ul>
          </div>

          {/* Sleepy Owl Section */}
          <div className="col-md-3 col-6 mb-4">
            <h5 className="fw-bold mb-3">SLEEPY OWL</h5>
            <ul className="list-unstyled">
              <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Reviews</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-dark">About Us</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Sustain Packs</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Returns</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Contact Us</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Terms of Use</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Compliance</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Sitemap</a></li>
              <li className="mb-2"><a href="#" className="text-decoration-none text-dark">Blog</a></li>
            </ul>
          </div>

          {/* About & Newsletter Section */}
          <div className="col-md-3 col-6 mb-4">
            <div className="mb-4">
              <h5 className="fw-bold mb-3">OUR STORY</h5>
              <p className="small">
                Our journey started with three friends with a shared vision. It was simple - introduce people to real good coffee. Today, we're making high-quality, freshly roasted coffee accessible to everyone with our exclusive products.
              </p>
            </div>

            <div>
              <h5 className="fw-bold mb-3">EMAIL NEWSLETTER</h5>
              <div className="input-group mb-3">
                <input 
                  type="email" 
                  className="form-control" 
                  placeholder="Your email address" 
                  aria-label="Your email address"
                />
                <button className="btn btn-dark" type="button">Subscribe</button>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="row pt-3 border-top">
          <div className="col-md-6 mb-3 mb-md-0">
            <div className="d-flex gap-3">
              <a href="#" className="text-dark"><FaFacebook size={20} /></a>
              <a href="#" className="text-dark"><FaInstagram size={20} /></a>
              <a href="#" className="text-dark"><FaTwitter size={20} /></a>
              <a href="#" className="text-dark"><FaLinkedin size={20} /></a>
            </div>
          </div>
          <div className="col-md-6 text-md-end">
            <p className="small mb-0">
              © 2025 Sleepy Owl Coffee • <a href="#" className="text-decoration-none text-dark">Privacy</a> • <a href="#" className="text-decoration-none text-dark">Terms of Use</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;