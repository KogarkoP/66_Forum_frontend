import styles from "./Question.module.css";

type QuestionProps = {
  id: string;
  questionText: string;
  createdAt: Date;
  userId: string;
};

const Question = ({ id, questionText, createdAt, userId }: QuestionProps) => {
  return <div>Question</div>;
};

export default Question;
