// import { FaIconName } from 'react-icons/fa';
import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
      <footer>
        <div class="footer-columns">
          <div class="footer-column">
            <h4>Contact Us</h4>
            <p>123 Main Street</p>
            <p>Anytown, CA 12345</p>
            <p>(123) 456-7890</p>
            <p>email@example.com</p>
          </div>
          <div class="footer-column">
            <h4>Social Media</h4>
            <a href="https://www.facebook.com/example"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/ae/Facebook_icon.svg/1200px-Facebook_icon.svg.png" alt="Facebook"/></a>
            <a href="https://twitter.com/example"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/5/53/Twitter_bird.svg/1200px-Twitter_bird.svg.png" alt="Twitter"/></a>
            <a href="https://www.instagram.com/example"><img src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a3/Instagram_icon.svg/1200px-Instagram_icon.svg.png" alt="Instagram"/></a>
          </div>
        </div>
        <div class="footer-copyright">
          <p>Copyright &copy; 2023 All Rights Reserved</p>
        </div>
      </footer>
    );
  };
  
  export default Footer;