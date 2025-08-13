import styles from "./Header.module.css";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faRightToBracket,
  faBars,
  faXmark,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);
  const router = useRouter();

  const toggleMenu = () => {
    setMenuOpen((prevState) => !prevState);
  };

  const onLogout = () => {
    Cookies.remove("@user_jwt");
    setLoggedIn(false);
    router.reload();
  };

  useEffect(() => {
    document.documentElement.style.overflow = isMenuOpen ? "hidden" : "";
  }, [isMenuOpen]);

  useEffect(() => {
    const jwt = Cookies.get("@user_jwt");
    if (jwt) {
      setLoggedIn(true);
    }
  }, []);

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
          {isLoggedIn ? (
            <button onClick={onLogout}>
              <FontAwesomeIcon icon={faRightFromBracket} />
              Logout
            </button>
          ) : (
            <Link href={"/login"}>
              <FontAwesomeIcon icon={faRightToBracket} />
              Login/Register
            </Link>
          )}
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
                {isLoggedIn ? (
                  <button onClick={onLogout}>
                    <FontAwesomeIcon icon={faRightFromBracket} />
                    Logout
                  </button>
                ) : (
                  <a href={"/login"}>
                    <FontAwesomeIcon icon={faRightToBracket} />
                    Login/Register
                  </a>
                )}
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
