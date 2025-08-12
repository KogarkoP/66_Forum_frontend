import { useEffect, useState } from "react";
import styles from "./Questions.module.css";
import QuestionCard from "@/components/QuestionCard/QuestionCard";
import { Question } from "@/types/question";
import { getAllQuestions } from "@/pages/api/fetch";

const Questions = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [filter, setFilter] = useState<
    "All" | "withAnswers" | "withoutAnswers"
  >("All");
  const withAnswersCount = questions.filter((q) => q.answers_count > 0).length;
  const withoutAnswersCount = questions.filter(
    (q) => q.answers_count <= 0
  ).length;
  const totalCount = questions.length;

  const fetchQuestions = async () => {
    const response = await getAllQuestions();
    setQuestions(response.data.questions);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const filteredQuestions =
    filter === "withAnswers"
      ? questions.filter((q) => q.answers_count > 0)
      : filter === "withoutAnswers"
      ? questions.filter((q) => q.answers_count <= 0)
      : questions;

  return (
    <>
      <div className={styles.button_wrapper}>
        <button
          className={filter === "All" ? styles.active : styles.not_active}
          onClick={() => setFilter("All")}
        >
          All Questions ({totalCount})
        </button>
        <button
          className={
            filter === "withAnswers" ? styles.active : styles.not_active
          }
          onClick={() => setFilter("withAnswers")}
        >
          With Answers ({withAnswersCount})
        </button>
        <button
          className={
            filter === "withoutAnswers" ? styles.active : styles.not_active
          }
          onClick={() => setFilter("withoutAnswers")}
        >
          Without Answers ({withoutAnswersCount})
        </button>
      </div>
      <div className={styles.questions_wrapper}>
        {[...filteredQuestions].reverse().map((q) => {
          return (
            <QuestionCard
              key={q.id}
              id={q.id}
              title={q.title}
              questionText={q.question_text}
              createdAt={q.createdAt}
              userId={q.user_id}
              answersCount={q.answers_count}
            />
          );
        })}
      </div>
    </>
  );
};

export default Questions;
