import styles from "./QuestionForm.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const QuestionForm = () => {
  return (
    <div className={styles.main}>
      <div className={styles.wrapper}>
        <h1>
          <FontAwesomeIcon icon={faGraduationCap} />
          Ask a question
        </h1>
        <div className={styles.form_row}>
          <label htmlFor="title">Title</label>
          <p className={styles.subtitle}>
            Be specific and imagine you’re asking a question to another person.
          </p>
          <input id="title" type="text" placeholder="Title" />
        </div>
        <div className={styles.form_row}>
          <label htmlFor="problem-details">Describe your issue in detail</label>
          <p className={styles.subtitle}>
            Explain the issue and provide more details. Use at least 30
            characters.
          </p>
          <textarea
            id="problem-details"
            placeholder="Explain the problem you’re facing…"
          ></textarea>
        </div>
        <button className={styles.submit_bttn}>Submit Question</button>
      </div>
    </div>
  );
};

export default QuestionForm;
