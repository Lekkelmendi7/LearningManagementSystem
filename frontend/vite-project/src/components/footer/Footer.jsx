
import "./footer.css";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillLinkedin
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>
          &copy; 2024 Your E-Learning App. All rights reserved. <br /> Created by <a href="https://www.linkedin.com/in/lek%C3%AB-kelmendi/">Leke Kelmendi</a> <br/>
          Bachelor thesis mentor: Msc. Liridon Hoti
        </p>
        <div className="social-links">
          <a href="https://www.facebook.com/profile.php?id=61560795113653">
            <AiFillFacebook />
          </a>
          <a href="https://www.linkedin.com/in/lek%C3%AB-kelmendi/">
            <AiFillLinkedin />
          </a>
          <a href="https://www.instagram.com/lek.kelmendi/">
            <AiFillInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;