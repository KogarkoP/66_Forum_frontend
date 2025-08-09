import axios from "axios";

const BASE_URL = "http://localhost:3005";

export const getAllQuestions = async () => {
  const response = await axios.get(`${BASE_URL}/questions`);
  return response;
};

export const getQuestionById = async (questionId: string) => {
  const response = await axios.get(`${BASE_URL}/questions/${questionId}`);
  return response;
};

export const getUserById = async (userId: string) => {
  const response = await axios.get(`${BASE_URL}/users/${userId}`);
  return response;
};
