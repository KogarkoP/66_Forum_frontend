import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPeace } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import styles from "./GreetingsCon.module.css";

const GreetingsCon = () => {
  return (
    <div className={styles.ask_question_con}>
      <div className={styles.heading}>
        <FontAwesomeIcon icon={faHandPeace} />
        <div className={styles.greetings_con}>
          <h2>Welcome to TechForum</h2>
          <p className={styles.subtitle}>
            Find answers to your technical questions and help others answer
            theirs.
          </p>
        </div>
      </div>
      <Link className={styles.ask_bttn} href={"/ask"}>
        Ask Question
      </Link>
    </div>
  );
};

export default GreetingsCon;
