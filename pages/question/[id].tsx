import styles from "./question.module.css";
import { User } from "@/types/user";
import { Question } from "@/types/question";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  getUserById,
  getQuestionById,
  getAnswersByQuestion,
} from "../api/fetch";
import DetailedQuestion from "@/components/DetailedQuestion/DetailedQuestion";
import AnswerForm from "@/components/AnswerForm/AnswerForm";
import Answers from "@/components/Answers/Answers";
import { Answer } from "@/types/answer";

const QuestionPage = () => {
  const router = useRouter();
  const [question, setQuestion] = useState<Question | null>(null);
  const [user, setUser] = useState<User | null>(null);
  const [isShowMessage, setShowMessage] = useState(false);
  const [answers, setAnswers] = useState<Answer[] | null>(null);

  const toggleMessage = () => {
    setShowMessage(true);
    setTimeout(() => setShowMessage(false), 3000);
  };

  const fetchQuestion = async (id: string) => {
    const response = await getQuestionById(id);
    setQuestion(response.data.question);
  };

  const fetchUser = async (userId: string) => {
    const response = await getUserById(userId);
    setUser(response.data.user);
  };

  const fetchAnswers = async (questionId: string) => {
    const response = await getAnswersByQuestion(questionId);
    setAnswers(response.data.answers);
  };

  useEffect(() => {
    if (router.query.id) {
      fetchQuestion(router.query.id as string);
    }
  }, [router.query.id]);

  useEffect(() => {
    if (question?.user_id) {
      fetchUser(question.user_id);
    }
  }, [question?.user_id]);

  useEffect(() => {
    if (question?.id) {
      fetchAnswers(question.id);
    }
  }, [question?.id]);

  return (
    <PageTemplate>
      <div className={styles.main}>
        {question && user && answers ? (
          <>
            <DetailedQuestion
              question={question}
              user={user}
              isShowMessage={isShowMessage}
              toggleMessage={toggleMessage}
            />
            <Answers answers={answers} fetchAnswers={fetchAnswers} />
            <AnswerForm questionId={question.id} fetchAnswers={fetchAnswers} />
          </>
        ) : (
          <p>Loading.....</p>
        )}
      </div>
    </PageTemplate>
  );
};

export default QuestionPage;
