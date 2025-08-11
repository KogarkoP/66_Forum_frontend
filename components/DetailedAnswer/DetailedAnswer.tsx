import styles from "./DetailedAnswer.module.css";
import { deleteAnswerByID } from "@/pages/api/fetch";

type DetailedAnswerProps = {
  id: string;
  answerText: string;
  likesCount: number;
  dislikesCount: number;
  questionId: string;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
  fetchAnswers: (questionId: string) => void;
};

const DetailedAnswer = ({
  id,
  answerText,
  likesCount,
  dislikesCount,
  questionId,
  userId,
  createdAt,
  updatedAt,
  fetchAnswers,
}: DetailedAnswerProps) => {
  const onDelete = async () => {
    const response = await deleteAnswerByID(id);
    console.log(response);
    fetchAnswers(questionId);
  };

  return (
    <>
      <button onClick={onDelete}>Delete Answer</button>
      <div>DetailedAnswer</div>
    </>
  );
};

export default DetailedAnswer;
