import styles from "./DetailedQuestion.module.css";
import { User } from "@/types/user";
import { Question } from "@/types/question";
import { useEffect, useState } from "react";
import { deleteQuestionById } from "@/pages/api/fetch";
import Cookies from "js-cookie";
import { useRouter } from "next/router";
import ModalTemplate from "../ModalTemplate/ModalTemplate";
import NotLoggedInMessage from "../NotLoggedInMessage/NotLoggedInMessage";

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
  const date = new Date(question.createdAt).toISOString().slice(0, 10);

  const onDeleteQuestion = async (id: string) => {
    try {
      const jwt = Cookies.get("@user_jwt");

      if (!jwt) {
        toggleMessage();
        return;
      }

      const response = await deleteQuestionById(id);

      if (response.status === 200) {
        setTimeout(() => {
          router.push("/");
        }, 2000);
      }
    } catch (err) {}
  };

  return (
    <>
      {isShowMessage && (
        <ModalTemplate>
          <NotLoggedInMessage />
        </ModalTemplate>
      )}
      <div className={styles.main}>
        <div className={styles.button_wrapper}>
          <button onClick={() => onDeleteQuestion(question.id)}>
            Delete Question
          </button>
        </div>
        <div className={styles.content_wrapper}>
          <div className={styles.text_wrapper}>
            <h2>{question.title}</h2>
            <p>{question.question_text}</p>
          </div>
          <div className={styles.data_wrapper}>
            <small>Created by: {user?.name || "Unknown"}</small>
            <small>Created at: {date}</small>
          </div>
        </div>
      </div>
    </>
  );
};

export default DetailedQuestion;
