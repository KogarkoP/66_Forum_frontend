import { use, useEffect, useState } from "react";
import styles from "./Questions.module.css";
import QuestionCard from "@/components/QuestionCard/QuestionCard";
import { Question } from "@/types/question";
import { getAllQuestions } from "@/pages/api/fetch";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBan } from "@fortawesome/free-solid-svg-icons";

const Questions = () => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [isLoading, setLoading] = useState(false);
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
    setLoading(true);
    fetchQuestions();
    setLoading(false);
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
      {isLoading ? (
        <div className={styles.loader_con}>
          <div className={styles.loader}></div>
        </div>
      ) : (
        <div className={styles.questions_wrapper}>
          {filteredQuestions.length > 0 ? (
            [...filteredQuestions]
              .reverse()
              .map((q) => (
                <QuestionCard
                  key={q.id}
                  id={q.id}
                  title={q.title}
                  questionText={q.question_text}
                  createdAt={q.createdAt}
                  userId={q.user_id}
                  answersCount={q.answers_count}
                />
              ))
          ) : (
            <div className={styles.nothing_found_con}>
              <FontAwesomeIcon
                className={styles.nothing_found_icon}
                icon={faBan}
              />
              <h3>No Questions Found</h3>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Questions;
