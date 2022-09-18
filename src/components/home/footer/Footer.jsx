import React from "react";
import "./footer.css";
import {SiFacebook, SiTwitter, SiLinkedin} from 'react-icons/si'
import {FaMapMarkerAlt, FaPhoneAlt} from 'react-icons/fa'
import {MdAlternateEmail} from 'react-icons/md'

const Footer = () => {
  let url = "";
  return (
    <footer className="footer-distributed">
      <div className="footer-left">
        <p className="footer-links">
          <a href={url} className="link-1">
            Home
          </a>
          <a href={url}>Product</a>
          <a href={url}>About Us</a>
        </p>
        <p className="footer-links">
          <a href={url} className="link-1">
            Privacy Policy
          </a>
          <a href={url}>Refund Policy</a>
          <a href={url}>Terms & Conditions of sale</a>
          <a href={url}>About us</a>
        </p>
        <p className="footer-company-name">© 2007 - 2022 All rights reserved.</p>
      </div>
      <div className="footer-center">
        <div>
          <i className="fa fa-map-marker"><FaMapMarkerAlt/></i>
          <p>
            <span>L4-57, 4th Floor</span>
            One Galle Face Shangril-la
          </p>
        </div>
        <div>
          <i className="fa fa-phone"><FaPhoneAlt/></i>
          <p>+112 457 896</p>
        </div>
        <div>
          <i className="fa fa-envelope"><MdAlternateEmail/></i>
          <p>
            <a href="mailto:support@company.com">support@company.com</a>
          </p>
        </div>
      </div>
      <div className="footer-right">
        <p className="footer-company-about">
          <span>About the company</span>
          The Sathuta Enterprices is established in 2007, it is located in one
          of selling arra for Ceramic industry, Sri Lanka. For past 15 years
          selles top diamand tools all over the Sri Lanka.
        </p>
        <div className="footer-icons">
          <a href={url}>
            <i className="fa fa-facebook"><SiFacebook/></i>
          </a>
          <a href={url}>
            <i className="fa fa-twitter"><SiTwitter/></i>
          </a>
          <a href={url}>
            <i className="fa fa-linkedin"><SiLinkedin/></i>
          </a>
        </div>
        <img
          alt="Credit Card Logos"
          title="Credit Cards"
          src="https://www.shift4shop.com/images/credit-card-logos/cc-sm-4.png"
          width="198"
          height="28"
          border="0"
        />
      </div>
    </footer>
  );
};

export default Footer;
