import { FaFacebookF, FaInstagram, FaTwitter, FaEnvelope } from "react-icons/fa";
import '../css/footer.css'; // Custom styles

const Footer = () => {
  return (
    <footer className="coffee-footer">
      <div className="footer-container">
        <div className="footer-section">
          <h5>About BrewBean</h5>
          <p>
            BrewBean is your go-to destination for premium handpicked coffee beans and gourmet blends.
            Taste the richness of tradition with every sip.
          </p>
        </div>

        <div className="footer-section">
          <h5>Quick Links</h5>
          <ul>
            <li><a href="/home">Home</a></li>
            <li><a href="/products">Shop</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h5>Support</h5>
          <ul>
            <li><a href="/faq">FAQs</a></li>
            <li><a href="/shipping">Shipping & Returns</a></li>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms & Conditions</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h5>Follow Us</h5>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaEnvelope /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2025 www.myshopping.com — All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
