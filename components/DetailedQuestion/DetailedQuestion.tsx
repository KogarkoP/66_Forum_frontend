import styles from "./DetailedQuestion.module.css";
import { User } from "@/types/user";
import { Question } from "@/types/question";
import { useEffect, useState } from "react";
import { deleteQuestionById } from "@/pages/api/fetch";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import ModalTemplate from "../ModalTemplate/ModalTemplate";

type DetailedQuestionProps = {
  user: User;
  question: Question;
  isShowMessage: boolean;
  toggleMessage: () => void;
};

const DetailedQuestion = ({
  user,
  question,
  isShowMessage,
  toggleMessage,
}: DetailedQuestionProps) => {
  const router = useRouter();

  const onDeleteQuestion = async (id: string) => {
    try {
      const jwt = Cookies.get("@user_jwt");

      if (!jwt) {
        if (!jwt) {
          toggleMessage();
          return;
        }
      }
      const response = await deleteQuestionById(id);
      console.log(response);

      if (response.status === 200) {
        setTimeout(() => {
          router.push("/");
        }, 2000);
      }
    } catch (err) {}
  };

  return (
    <>
      {isShowMessage && <ModalTemplate>Li Li Li</ModalTemplate>}
      <div>
        <button onClick={() => onDeleteQuestion(question.id)}>
          Delete Question
        </button>
        DetailedQuestion
      </div>
    </>
  );
};

export default DetailedQuestion;
