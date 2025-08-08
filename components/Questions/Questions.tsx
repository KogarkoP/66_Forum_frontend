import { useState } from "react";
import styles from "./Questions.module.css";

const Questions = () => {
  const [questions, setQuestions] = useState([]);

  return (
    <div className={styles.main}>
      <div className={styles.questions_wrapper}>
        {questions.map((q) => {
          return <Question />;
        })}
      </div>
    </div>
  );
};

export default Questions;
