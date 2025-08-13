import { useState, useEffect } from "react";
import styles from "./AnswerForm.module.css";
import { insertAnswer } from "@/pages/api/fetch";
import ModalTemplate from "../ModalTemplate/ModalTemplate";
import Cookies from "js-cookie";
import NotLoggedInMessage from "../NotLoggedInMessage/NotLoggedInMessage";

type AnswerProps = {
  questionId: string;
  fetchAnswers: (questionId: string) => void;
};

const AnswerForm = ({ questionId, fetchAnswers }: AnswerProps) => {
  const [answerText, setAnswerText] = useState("");
  const [isMessageDisplay, setMessageDisplay] = useState(false);

  const onSubmit = async () => {
    const jwt = Cookies.get("@user_jwt");

    if (!jwt) {
      setMessageDisplay(true);
      setTimeout(() => setMessageDisplay(false), 4000);
      return;
    }

    const answer = {
      answer_text: answerText,
      question_id: questionId,
    };

    const response = await insertAnswer(answer);
    console.log(response);

    fetchAnswers(questionId);
  };

  return (
    <>
      {isMessageDisplay && (
        <ModalTemplate>
          <NotLoggedInMessage />
        </ModalTemplate>
      )}
      <div className={styles.form}>
        <label htmlFor="answer">Your Answer</label>
        <textarea
          id="answer"
          placeholder="Write your answer here"
          value={answerText}
          onChange={(e) => setAnswerText(e.target.value)}
        />
        <button className={styles.submit_bttn} onClick={onSubmit}>
          Submit Answer
        </button>
      </div>
    </>
  );
};

export default AnswerForm;
