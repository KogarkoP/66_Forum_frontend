import { useEffect, useState, useCallback, use } from "react";
import styles from "./DetailedAnswer.module.css";
import { User } from "@/types/user";
import {
  deleteAnswerByID,
  getUserById,
  updateAnswerLikeDislike,
} from "@/pages/api/fetch";
import Cookies from "js-cookie";
import ModalTemplate from "../ModalTemplate/ModalTemplate";
import NotLoggedInMessage from "../NotLoggedInMessage/NotLoggedInMessage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faThumbsDown } from "@fortawesome/free-regular-svg-icons";

type DetailedAnswerProps = {
  id: string;
  answerText: string;
  likesCount: number;
  dislikesCount: number;
  questionId: string;
  createdAt: Date;
  userId: string;
  loggedInUserId: string;
  fetchAnswers: (questionId: string) => void;
};

const DetailedAnswer = ({
  id,
  answerText,
  likesCount,
  dislikesCount,
  questionId,
  userId,
  loggedInUserId,
  createdAt,
  fetchAnswers,
}: DetailedAnswerProps) => {
  const [reactionStatus, setReactionStatus] = useState<string>("");
  const [isDisplayMessage, setDisplayMessage] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const date = new Date(createdAt).toISOString().slice(0, 10);

  const onLikeDislike = async (type: string) => {
    const jwt = Cookies.get("@user_jwt");

    if (!jwt) {
      setDisplayMessage(true);
      setTimeout(() => setDisplayMessage(false), 4000);
      return;
    }

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
    const jwt = Cookies.get("@user_jwt");

    if (!jwt) {
      setDisplayMessage(true);
      setTimeout(() => setDisplayMessage(false), 4000);
      return;
    }
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

  const fetchUser = async (userId: string) => {
    const response = await getUserById(userId);
    setUser(response.data.user);
    console.log(response);
  };

  useEffect(() => {
    if (userId) {
      fetchUser(userId);
    }
  }, [userId]);

  useEffect(() => {
    if (loggedInUserId) {
      userExpression(loggedInUserId);
    }
  }, [loggedInUserId, likesCount, dislikesCount, userExpression]);

  return (
    <>
      {isDisplayMessage && (
        <ModalTemplate>
          <NotLoggedInMessage />
        </ModalTemplate>
      )}
      <div className={styles.main}>
        <div>{answerText}</div>
        <div className={styles.button_wrapper}>
          <div className={styles.like_dislike_bttn}>
            <button
              className={`${reactionStatus === "liked" && styles.liked} ${
                styles.default
              }`}
              onClick={() => onLikeDislike("like")}
            >
              <FontAwesomeIcon icon={faThumbsUp} />
              {likesCount}
            </button>
            <button
              className={`${reactionStatus === "disliked" && styles.disliked} ${
                styles.default
              }`}
              onClick={() => onLikeDislike("dislike")}
            >
              <FontAwesomeIcon icon={faThumbsDown} />
              {dislikesCount}
            </button>
          </div>
          <div className={styles.delete_bttn_con}>
            <button onClick={onDeleteAnswer}>Delete Answer</button>
          </div>
        </div>
        <div className={styles.data}>
          <small>Created by {user?.name || "Unknown"}</small>
          <small>Created at: {date}</small>
        </div>
      </div>
    </>
  );
};

export default DetailedAnswer;
