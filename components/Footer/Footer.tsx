import styles from "./Footer.module.css";
import logo from "@/assets/images/logo.png";
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
          <div className={styles.social_media}></div>
        </div>
        <div className={styles.site_map}>
          <h4>Site Map</h4>
          <ul></ul>
        </div>
        <div className={styles.legal}>
          <h4>Legal</h4>
          <ul>
            <li></li>
            <li></li>
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
