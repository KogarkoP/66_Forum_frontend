export type User = {
  id: string;
  name: string;
  terms_privacy: boolean;
  liked_answers_id: string[];
  disliked_answers_id: string[];
  createdAt: Date;
  updatedAt: Date;
};

export type UserInsert = {
  name: string;
  email: string;
  password: string;
  terms_privacy: boolean;
};
