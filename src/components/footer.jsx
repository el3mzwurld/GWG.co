import NewsLetterCta from "./newsletter_cta";
import {
  FaFacebookF,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaCcVisa,
  FaCcMastercard,
  FaCcPaypal,
  FaCcApplePay,
} from "react-icons/fa";
import { useState, useEffect } from "react";
const Footer = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className="footer-container">
      <NewsLetterCta />

      <div className="footer-content">
        <div className="container">
          <div className="footer-logo">
            <p className="logo">
              <span>GWG</span>.CO
            </p>
            <p className="logo-txt">
              We have clothes that suits your style and which you’re proud to
              wear. From women to men.
            </p>
          </div>
          <div className="socials">
            <span className="link">
              <FaFacebookF size={20} color="black" />
            </span>
            <span className="link">
              <FaTwitter size={20} color="black" />
            </span>{" "}
            <span className="link">
              <FaInstagram size={20} color="black" />
            </span>{" "}
            <span className="link">
              <FaGithub size={20} color="black" />
            </span>
          </div>
          <div className="links">
            <div className="link-container">
              <div className="header">
                <p>COMPANY</p>
              </div>
              <ul>
                <li>About</li>
                <li>Features</li>
                <li>Work for us</li>
                <li>Career</li>
                <li>Our Partners</li>
              </ul>
            </div>
            <div className="link-container">
              <div className="header">
                <p>FAQ</p>
              </div>
              <ul>
                <li>Account</li>
                <li>Manage Deliveries</li>
                <li>Orders</li>
                <li>Payment</li>
              </ul>
            </div>
            <div className="link-container">
              <div className="header">
                <p>HELP</p>
              </div>
              <ul>
                <li>Return Policy</li>
                <li>Features</li>
                <li>Terms and Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className="footer-end">
            <p className="txt">GWG.CO.&copy; 2025 All rights reserved.</p>

            <div className="cards">
              <span className="card">
                {windowWidth < 520 && (
                  <FaCcVisa size={35} color="black"></FaCcVisa>
                )}
                {windowWidth >= 520 && windowWidth < 768 && (
                  <FaCcVisa size={40} color="black"></FaCcVisa>
                )}{" "}
                {windowWidth >= 768 && (
                  <FaCcVisa size={50} color="black"></FaCcVisa>
                )}
              </span>
              <span className="card">
                {windowWidth < 520 && (
                  <FaCcMastercard size={35} color="black"></FaCcMastercard>
                )}
                {windowWidth >= 520 && windowWidth < 768 && (
                  <FaCcMastercard size={40} color="black"></FaCcMastercard>
                )}{" "}
                {windowWidth >= 768 && (
                  <FaCcMastercard size={50} color="black"></FaCcMastercard>
                )}
              </span>{" "}
              <span className="card">
                {windowWidth < 520 && (
                  <FaCcApplePay size={35} color="black"></FaCcApplePay>
                )}
                {windowWidth >= 520 && windowWidth < 768 && (
                  <FaCcApplePay size={40} color="black"></FaCcApplePay>
                )}{" "}
                {windowWidth >= 768 && (
                  <FaCcApplePay size={50} color="black"></FaCcApplePay>
                )}
              </span>{" "}
              <span className="card">
                {windowWidth < 520 && (
                  <FaCcPaypal size={35} color="black"></FaCcPaypal>
                )}
                {windowWidth >= 520 && windowWidth < 768 && (
                  <FaCcPaypal size={40} color="black"></FaCcPaypal>
                )}{" "}
                {windowWidth >= 768 && (
                  <FaCcPaypal size={50} color="black"></FaCcPaypal>
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
