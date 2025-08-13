import styles from "./QuestionForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { insertQuestion } from "@/pages/api/fetch";
import ModalTemplate from "../ModalTemplate/ModalTemplate";

const QuestionForm = () => {
  const [title, setTitle] = useState("");
  const [questionText, setQuestionText] = useState("");
  const [isSubmitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const onSubmit = async () => {
    try {
      const newErrors: { [key: string]: string } = {};
      if (!title.trim()) newErrors.title = "Title is required field";
      if (!questionText.trim()) {
        newErrors.questionText = "Problem description field is required";
      } else if (questionText.trim().length < 30) {
        newErrors.questionText =
          "Problem description must be at least 30 characters";
      }

      if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors);
        return;
      }

      const question = {
        title: title,
        question_text: questionText,
      };

      const response = await insertQuestion(question);

      if (response.status === 201) {
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
      }

      setTitle("");
      setQuestionText("");
    } catch (err) {}
  };

  return (
    <>
      {isSubmitted && (
        <ModalTemplate>
          <div className={styles.message}>
            <FontAwesomeIcon className={styles.success} icon={faCircleCheck} />
            <p>The Question was Submited</p>
          </div>
        </ModalTemplate>
      )}
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
              onChange={(e) => {
                setTitle(e.target.value);
                setErrors((prev) => {
                  const { title, ...rest } = prev;
                  return rest;
                });
              }}
            />
            {errors.title && (
              <p className={styles.field_error}>{errors.title}</p>
            )}
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
              onChange={(e) => {
                setQuestionText(e.target.value);
                setErrors((prev) => {
                  const { questionText, ...rest } = prev;
                  return rest;
                });
              }}
            />
            {errors.questionText && (
              <p className={styles.field_error}>{errors.questionText}</p>
            )}
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
