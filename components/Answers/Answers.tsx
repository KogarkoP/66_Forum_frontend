import styles from "./Answers.module.css";
import { useEffect, useState } from "react";
import { getAnswersByQuestion } from "@/pages/api/fetch";

type AnswersProps = {
  questionId: string;
};

const Answers = ({ questionId }: AnswersProps) => {
  const [answers, setAnswers] = useState([]);

  const fetchAnswers = async (questionId: string) => {
    const response = await getAnswersByQuestion(questionId);
    setAnswers(response.data.answers);
  };
  useEffect(() => {
    fetchAnswers(questionId);
  }, []);
  return (
    <div>
      {answers.map((a) => {
        return <p>{a.answer_text}</p>;
      })}
    </div>
  );
};

export default Answers;
