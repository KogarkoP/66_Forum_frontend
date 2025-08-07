import styles from "./Header.module.css";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket,
  faBars,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  useEffect(() => {
    document.documentElement.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  return (
    <div className={styles.main}>
      <div className={styles.logo_wrapper}>
        <Link href={"/"}>
          <img src={logo.src} alt="TECH Forum" />
        </Link>
      </div>
      <ul className={styles.nav}>
        <li>
          <Link href={"#"}>About Us</Link>
        </li>
        <li>
          <Link href={"#"}>Sponsorship</Link>
        </li>
        <li>
          <Link href={"#"}>Contact</Link>
        </li>
        <li className={styles.login}>
          <Link href={"/login"}>
            <FontAwesomeIcon icon={faRightToBracket} />
            Login/Register
          </Link>
        </li>
      </ul>
      <button className={styles.mobile_menu_bttn} onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
      </button>
      {isMenuOpen && (
        <div className={styles.mobile_menu_wrapper} onClick={toggleMenu}>
          <div
            className={styles.mobile_menu}
            onClick={(e) => e.stopPropagation()}
          >
            <FontAwesomeIcon
              className={styles.close_bttn}
              icon={faXmark}
              onClick={toggleMenu}
            />
            <ul>
              <li className={styles.login_con}>
                <a href={"/login"}>
                  <FontAwesomeIcon icon={faRightToBracket} />
                  Login/Register
                </a>
              </li>
              <li>
                <a href={"#"}>About Us</a>
              </li>
              <li>
                <a href={"#"}>Sponsorship</a>
              </li>
              <li>
                <a href={"#"}>Contact</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
