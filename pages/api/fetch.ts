import axios from "axios";
import { UserInsert } from "@/types/user";
import { QuestionInsert } from "@/types/question";
import Cookies from "js-cookie";

const BASE_URL = "http://localhost:3005";

export const getAllQuestions = async () => {
  const response = await axios.get(`${BASE_URL}/questions`);
  return response;
};

export const getQuestionById = async (questionId: string) => {
  const response = await axios.get(`${BASE_URL}/questions/${questionId}`);
  return response;
};

export const insertQuestion = async (question: QuestionInsert) => {
  const jwt = Cookies.get("@user_jwt");
  const response = await axios.post(`${BASE_URL}/questions`, question, {
    headers: { Authorization: jwt },
  });
  return response;
};

export const deleteQuestionById = async (id: string) => {
  const jwt = Cookies.get("@user_jwt");
  const response = await axios.delete(`${BASE_URL}/questions/${id}`, {
    headers: { Authorization: jwt },
  });
  return response;
};

export const getUserById = async (userId: string) => {
  const response = await axios.get(`${BASE_URL}/users/${userId}`);
  return response;
};

export const insertUser = async (user: UserInsert) => {
  const response = await axios.post(`${BASE_URL}/users/register`, user);
  return response;
};

export const login = async (logindata: { email: string; password: string }) => {
  const response = await axios.post(`${BASE_URL}/users/login`, logindata);
  return response;
};

export const insertAnswer = async (answer: {
  answer_text: string;
  question_id: string;
}) => {
  const jwt = Cookies.get("@user_jwt");
  const response = await axios.post(`${BASE_URL}/answers`, answer, {
    headers: { Authorization: jwt },
  });
  return response;
};

export const getAnswersByQuestion = async (id: string) => {
  const response = await axios.get(`${BASE_URL}/answers/question/${id}`);
  return response;
};

export const deleteAnswerByID = async (answerId: string) => {
  const jwt = Cookies.get("@user_jwt");
  const response = axios.delete(`${BASE_URL}/answers/${answerId}`, {
    headers: { Authorization: jwt },
  });
  return response;
};

export const updateAnswerLikeDislike = async (
  id: string,
  task: { action: string; operation: string }
) => {
  const jwt = Cookies.get("@user_jwt");
  return axios.put(`${BASE_URL}/answers/${id}`, task, {
    headers: { Authorization: jwt },
  });
};
