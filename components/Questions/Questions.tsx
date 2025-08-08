import { useState } from "react";
import styles from "./Questions.module.css";
import PageTemplate from "../PageTemplate/PageTemplate";
import Link from "next/link";

const Questions = () => {
  const [questions, setQuestions] = useState([]);

  return (
    <div className={styles.main}>
      <div className={styles.ask_question_con}></div>
      <div className={styles.questions_wrapper}></div>
    </div>
  );
};

export default Questions;
