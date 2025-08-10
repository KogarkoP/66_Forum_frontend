import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPeace } from "@fortawesome/free-solid-svg-icons";
import Cookies from "js-cookie";
import { useState } from "react";
import styles from "./GreetingsCon.module.css";
import { useRouter } from "next/router";
import ModalTemplate from "../ModalTemplate/ModalTemplate";

const GreetingsCon = () => {
  const router = useRouter();
  const [isShowMessage, setShowMessage] = useState(false);

  const toggleMessage = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  const onClick = () => {
    const jwt = Cookies.get("@user_jwt");

    if (!jwt) {
      toggleMessage();
      return;
    }

    router.push("/ask");
  };
  return (
    <>
      {isShowMessage && <ModalTemplate>LiLiLI</ModalTemplate>}
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
        <button className={styles.ask_bttn} onClick={onClick}>
          Ask Question
        </button>
      </div>
    </>
  );
};

export default GreetingsCon;
