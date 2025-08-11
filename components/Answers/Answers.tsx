import styles from "./Answers.module.css";
import { useEffect, useState } from "react";
import { getAnswersByQuestion } from "@/pages/api/fetch";
import { Answer } from "@/types/answer";

type AnswersProps = {
  answers: Answer;
};

const Answers = ({ answers }: AnswersProps) => {
  return (
    <div>
      {answers.map((a) => {
        return <p>{a.answer_text}</p>;
      })}
    </div>
  );
};

export default Answers;
