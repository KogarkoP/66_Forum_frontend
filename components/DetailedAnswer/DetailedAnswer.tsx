import { useEffect, useState, useCallback } from "react";
import styles from "./DetailedAnswer.module.css";
import {
  deleteAnswerByID,
  getUserById,
  updateAnswerLikeDislike,
} from "@/pages/api/fetch";

type DetailedAnswerProps = {
  id: string;
  answerText: string;
  likesCount: number;
  dislikesCount: number;
  questionId: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  loggedInUserId: string;
  fetchAnswers: (questionId: string) => void;
};

const DetailedAnswer = ({
  id,
  answerText,
  likesCount,
  dislikesCount,
  questionId,
  loggedInUserId,
  userId,
  createdAt,
  updatedAt,
  fetchAnswers,
}: DetailedAnswerProps) => {
  const [reactionStatus, setReactionStatus] = useState<string>("");

  const onLikeDislike = async (type: string) => {
    const userResponse = await getUserById(loggedInUserId);

    const key = type === "like" ? "liked_answers_id" : "disliked_answers_id";
    const hasReacted = userResponse.data.user[key].includes(id);
    const operation = hasReacted ? "remove" : "add";

    const task = {
      action: type,
      operation: operation,
    };

    await updateAnswerLikeDislike(id, task);

    fetchAnswers(questionId);
  };

  const onDeleteAnswer = async () => {
    const response = await deleteAnswerByID(id);
    fetchAnswers(questionId);
  };

  const userExpression = useCallback(
    async (loggedInUserId: string) => {
      const user = await getUserById(loggedInUserId);
      setReactionStatus(
        user.data.user.liked_answers_id.includes(id)
          ? "liked"
          : user.data.user.disliked_answers_id.includes(id)
          ? "disliked"
          : ""
      );
    },
    [id]
  );

  useEffect(() => {
    if (loggedInUserId) {
      userExpression(loggedInUserId);
    }
  }, [loggedInUserId, likesCount, dislikesCount, userExpression]);

  return (
    <>
      <button onClick={onDeleteAnswer}>Delete Answer</button>
      <div>{answerText}</div>
      <button
        className={reactionStatus === "liked" ? styles.liked : styles.default}
        onClick={() => onLikeDislike("like")}
      >
        Like{likesCount}
      </button>
      <button
        className={
          reactionStatus === "disliked" ? styles.disliked : styles.default
        }
        onClick={() => onLikeDislike("dislike")}
      >
        Dislike{dislikesCount}
      </button>
    </>
  );
};

export default DetailedAnswer;
