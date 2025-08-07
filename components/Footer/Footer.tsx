import styles from "./Footer.module.css";
import logo from "@/assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faLinkedin,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";

const Footer = () => {
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <div className={styles.logo_con}>
          <div className={styles.logo}>
            <img src={logo.src} alt="Logo" />
          </div>
          <p>
            Bringing frontend developers together to share knowledge and ideas
            that enhance user experiences.
          </p>
          <ul className={styles.social_media}>
            <li>
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faXTwitter} />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.site_map}>
          <h4>Site Map</h4>
          <ul>
            <li>
              <Link href={"/"}>Home</Link>
            </li>
            <li>
              <Link href={"#"}>About Us</Link>
            </li>
            <li>
              <Link href={"#"}>Sponsorship</Link>
            </li>
            <li>
              <Link href={"#"}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className={styles.legal}>
          <h4>Legal</h4>
          <ul>
            <li>
              <Link href={"#"}>Privacy Policy</Link>
            </li>
            <li>
              <Link href={"#"}>Terms of Services</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.copyright_con}>
        Copyright &#169; 2025, TechForum.org, All Rights Reserved
      </div>
    </div>
  );
};

export default Footer;
