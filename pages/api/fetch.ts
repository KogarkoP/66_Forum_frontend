import axios from "axios";
import { UserInsert } from "@/types/user";
import Cookies from "js-cookie";

const jwt = Cookies.get("@user_jwt");

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

export const insertUser = async (user: UserInsert) => {
  const response = await axios.post(`${BASE_URL}/users/register`, user);
  return response;
};

export const login = async (logindata: { email: string; password: string }) => {
  const response = await axios.post(`${BASE_URL}/users/login`, logindata);
  return response;
};
