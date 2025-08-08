import { useState } from "react";
import styles from "./Questions.module.css";
import Question from "@/components/Question/Question";

const Questions = () => {
  const [questions, setQuestions] = useState([]);

  return (
    <div className={styles.main}>
      <div className={styles.questions_wrapper}>
        {questions.map((q) => {
          return (
            <Question
              key={q.id}
              id={q.id}
              questionText={q.questionText}
              createdAt={q.createdAt}
              userId={q.userId}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Questions;
