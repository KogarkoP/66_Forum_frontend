import styles from "./QuestionForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { insertQuestion } from "@/pages/api/fetch";
import ModalTemplate from "../ModalTemplate/ModalTemplate";

const QuestionForm = () => {
  const [title, setTitle] = useState("");
  const [questionText, setQuestionText] = useState("");
  const [isSubmited, setSubmited] = useState(false);

  const onSubmit = async () => {
    const question = {
      title: title,
      question_text: questionText,
    };

    const response = await insertQuestion(question);

    if (response.status === 201) {
      setSubmited(true);
      setTimeout(() => setSubmited(false), 3000);
    }

    setTitle("");
    setQuestionText("");
  };

  return (
    <>
      {isSubmited && <ModalTemplate>The question Was Submited</ModalTemplate>}
      <div className={styles.main}>
        <div className={styles.wrapper}>
          <h1>
            <FontAwesomeIcon icon={faGraduationCap} />
            Ask a question
          </h1>
          <div className={styles.form_row}>
            <label htmlFor="title">Title</label>
            <p className={styles.subtitle}>
              Be specific and imagine you’re asking a question to another
              person.
            </p>
            <input
              id="title"
              type="text"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className={styles.form_row}>
            <label htmlFor="problem_details">
              Describe your issue in detail
            </label>
            <p className={styles.subtitle}>
              Explain the issue and provide more details. Use at least 30
              characters.
            </p>
            <textarea
              id="problem_details"
              placeholder="Explain the problem you’re facing…"
              value={questionText}
              onChange={(e) => setQuestionText(e.target.value)}
            />
          </div>
          <button className={styles.submit_bttn} onClick={onSubmit}>
            Submit Question
          </button>
        </div>
      </div>
    </>
  );
};

export default QuestionForm;
