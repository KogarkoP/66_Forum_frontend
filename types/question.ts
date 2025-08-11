export type Question = {
  id: string;
  title: string;
  question_text: string;
  user_id: string;
  answers_count: number;
  createdAt: Date;
};

export type QuestionInsert = {
  title: string;
  question_text: string;
};
