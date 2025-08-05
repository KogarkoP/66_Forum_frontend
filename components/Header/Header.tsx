import styles from "./Header.module.css";
import Link from "next/link";
import logo from "@/assets/images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
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
    </div>
  );
};

export default Header;
