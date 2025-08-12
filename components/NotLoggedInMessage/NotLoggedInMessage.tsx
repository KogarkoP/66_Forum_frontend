import styles from "./NotLoggedInMessage.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";

const NotLoggedInMessage = () => {
  return (
    <div className={styles.message}>
      <FontAwesomeIcon icon={faCircleXmark} />
      <p>You Have to Be Logeed In</p>
      <Link className={styles.register} href="/login">
        Login/Register
      </Link>
    </div>
  );
};

export default NotLoggedInMessage;
