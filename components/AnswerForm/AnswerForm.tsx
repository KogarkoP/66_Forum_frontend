import { useState, useEffect } from "react";
import styles from "./AnswerForm.module.css";
import { insertAnswer } from "@/pages/api/fetch";
import ModalTemplate from "../ModalTemplate/ModalTemplate";
import Cookies from "js-cookie";

type AnswerProps = {
  questionId: string;
  isShowMessage: boolean;
  toggleMessage: () => void;
  fetchAnswers: (questionId: string) => void;
};

const AnswerForm = ({
  questionId,
  toggleMessage,
  isShowMessage,
  fetchAnswers,
}: AnswerProps) => {
  const [answerText, setAnswerText] = useState("");

  const onSubmit = async () => {
    const jwt = Cookies.get("@user_jwt");

    if (!jwt) {
      toggleMessage();
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
      {isShowMessage && <ModalTemplate>LA la la</ModalTemplate>}
      <div className={styles.form_row}>
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
