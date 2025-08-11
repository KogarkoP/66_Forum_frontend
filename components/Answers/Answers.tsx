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
    <div>
      {[...answers].reverse().map((a) => {
        return (
          <DetailedAnswer
            key={a.id}
            id={a.id}
            answerText={a.answer_text}
            likesCount={a.likes_count}
            dislikesCount={a.dislikes_count}
            questionId={a.question_id}
            userId={a.user_id}
            createdAt={a.createdAt}
            updatedAt={a.updatedAt}
            loggedInUserId={loggedInUserId}
            fetchAnswers={fetchAnswers}
          />
        );
      })}
    </div>
  );
};

export default Answers;
