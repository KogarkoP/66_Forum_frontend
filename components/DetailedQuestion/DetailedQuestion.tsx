import styles from "./DetailedQuestion.module.css";
import { User } from "@/types/user";
import { Question } from "@/types/question";
import { useEffect, useState } from "react";
import { deleteQuestionById } from "@/pages/api/fetch";
import Cookies from "js-cookie";
import { useRouter } from "next/router";

type DetailedQuestionProps = {
  user: User;
  question: Question;
};

const DetailedQuestion = ({ user, question }: DetailedQuestionProps) => {
  const jwt = Cookies.get("@user_jwt");
  const router = useRouter();
  const [isLoggedIn, setLoggedIn] = useState(false);

  const onDeleteQuestion = async (id: string) => {
    try {
      const response = await deleteQuestionById(id);
      console.log(response);

      if (response.status === 200) {
        setTimeout(() => {
          router.push("/");
        }, 2000);
      }
    } catch (err) {}
  };

  useEffect(() => {
    if (jwt) {
      setLoggedIn(true);
    }
  }, [jwt]);

  return (
    <div>
      {isLoggedIn && (
        <button onClick={() => onDeleteQuestion(question.id)}>
          Delete Question
        </button>
      )}
      DetailedQuestion
    </div>
  );
};

export default DetailedQuestion;
