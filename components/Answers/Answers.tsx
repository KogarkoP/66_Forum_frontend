import styles from "./Answers.module.css";
import { useEffect, useState } from "react";
import { Answer } from "@/types/answer";
import DetailedAnswer from "../DetailedAnswer/DetailedAnswer";

type AnswersProps = {
  answers: Answer[];
  fetchAnswers: (questionId: string) => void;
};

const Answers = ({ answers, fetchAnswers }: AnswersProps) => {
  const [loggedInUserId, setLoggedInUserId] = useState("");

  useEffect(() => {
    const authenticatedInUserId = localStorage.getItem("userId");

    if (authenticatedInUserId) {
      setLoggedInUserId(authenticatedInUserId);
    }
  }, []);

  return (
    <div className={styles.main}>
      <h2>Answers</h2>
      {[...answers].reverse().map((a) => {
        return (
          <DetailedAnswer
            key={a.id}
            id={a.id}
            answerText={a.answer_text}
            likesCount={a.likes_count}
            dislikesCount={a.dislikes_count}
            questionId={a.question_id}
            createdAt={a.createdAt}
            userId={a.user_id}
            loggedInUserId={loggedInUserId}
            fetchAnswers={fetchAnswers}
          />
        );
      })}
    </div>
  );
};

export default Answers;
