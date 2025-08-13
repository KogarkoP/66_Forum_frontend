import { useState, useEffect } from "react";
import styles from "./AnswerForm.module.css";
import { insertAnswer } from "@/pages/api/fetch";
import ModalTemplate from "../ModalTemplate/ModalTemplate";
import Cookies from "js-cookie";
import NotLoggedInMessage from "../NotLoggedInMessage/NotLoggedInMessage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";

type AnswerProps = {
  questionId: string;
  fetchAnswers: (questionId: string) => void;
};

const AnswerForm = ({ questionId, fetchAnswers }: AnswerProps) => {
  const [answerText, setAnswerText] = useState("");
  const [isMessageDisplay, setMessageDisplay] = useState("");
  const [error, setError] = useState("");

  const onSubmit = async () => {
    try {
      const jwt = Cookies.get("@user_jwt");

      if (!answerText.trim()) {
        setError("Answer field is required");
        return;
      } else if (answerText.trim().length < 40) {
        setError("Answer must be at least 40 characters long");
        return;
      }

      if (!jwt) {
        setMessageDisplay("error");
        setTimeout(() => setMessageDisplay(""), 4000);
        return;
      }

      const answer = {
        answer_text: answerText,
        question_id: questionId,
      };

      const response = await insertAnswer(answer);

      if (response.status === 201) {
        setMessageDisplay("success");
        setTimeout(() => setMessageDisplay(""), 3000);
      }

      setAnswerText("");
      fetchAnswers(questionId);
    } catch (err) {}
  };

  return (
    <>
      {isMessageDisplay === "error" && (
        <ModalTemplate>
          <NotLoggedInMessage />
        </ModalTemplate>
      )}
      {isMessageDisplay === "success" && (
        <ModalTemplate>
          <div className={styles.message}>
            <FontAwesomeIcon className={styles.success} icon={faCircleCheck} />
            <p>The Answer Was Submitted</p>
          </div>
        </ModalTemplate>
      )}
      <div className={styles.form}>
        <label htmlFor="answer">Your Answer</label>
        <textarea
          id="answer"
          placeholder="Write your answer here"
          value={answerText}
          onChange={(e) => {
            setAnswerText(e.target.value);
            setError("");
          }}
        />
        {error && <p className={styles.field_error}>{error}</p>}
        <button className={styles.submit_bttn} onClick={onSubmit}>
          Submit Answer
        </button>
      </div>
    </>
  );
};

export default AnswerForm;
