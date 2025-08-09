import { useEffect, useState } from "react";
import styles from "./Questions.module.css";
import QuestionCard from "@/components/QuestionCard/QuestionCard";
import { Question } from "@/types/question";
import { getAllQuestions } from "@/pages/api/fetch";

const Questions = () => {
  const [questions, setQuestions] = useState<Question[]>([]);

  const fetchQuestions = async () => {
    const response = await getAllQuestions();
    setQuestions(response.data.questions);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  return (
    <div className={styles.main}>
      <div className={styles.questions_wrapper}>
        {questions.map((q) => {
          return (
            <QuestionCard
              key={q.id}
              id={q.id}
              title={q.title}
              questionText={q.question_text}
              createdAt={q.createdAt}
              userId={q.user_id}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Questions;
