import styles from "./DetailedQuestion.module.css";
import { User } from "@/types/user";
import { Question } from "@/types/question";

type DetailedQuestionProps = {
  user: User;
  question: Question;
};

const DetailedQuestion = ({ user, question }: DetailedQuestionProps) => {
  return <div>DetailedQuestion</div>;
};

export default DetailedQuestion;
