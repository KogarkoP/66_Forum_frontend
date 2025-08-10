import { useState } from "react";
import styles from "./AnswerForm.module.css";
import axios from "axios";
import { insertAnswer } from "@/pages/api/fetch";

type AnswerProps = {
  questionId: string;
};

const AnswerForm = ({ questionId }: AnswerProps) => {
  const [answerText, setAnswerText] = useState("");

  const onSubmit = async () => {
    const answer = {
      answer_text: answerText,
      question_id: questionId,
    };

    console.log(answer);

    const response = await insertAnswer(answer);
    console.log(response);
  };

  return (
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
  );
};

export default AnswerForm;
