export type User = {
  id: string;
  name: string;
  liked_answers_id: string[];
  disliked_answers_id: string[];
  createdAt: Date;
  updatedAt: Date;
};
