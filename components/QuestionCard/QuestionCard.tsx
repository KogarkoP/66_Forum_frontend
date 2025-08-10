import { useEffect, useState } from "react";
import { getUserById } from "@/pages/api/fetch";
import { User } from "@/types/user";
import styles from "./QuestionCard.module.css";
import Link from "next/link";

type QuestionProps = {
  id: string;
  title: string;
  questionText: string;
  createdAt: Date;
  userId: string;
};

const Question = ({
  id,
  title,
  questionText,
  createdAt,
  userId,
}: QuestionProps) => {
  const [user, setUser] = useState<User | null>(null);
  const date = new Date(createdAt).toISOString().slice(0, 10);
  const maxLength = 200;
  const shortText =
    questionText.length > maxLength
      ? `${questionText.slice(0, maxLength).trimEnd()}...`
      : questionText;

  const fetchUser = async (userId: string) => {
    const response = await getUserById(userId);
    setUser(response.data.user);
  };

  useEffect(() => {
    fetchUser(userId);
  }, [userId]);

  return (
    <Link href={`question/${id}`}>
      <div className={styles.main}>
        <div className={styles.data_wrapper}>
          <ul>
            <li>Answers</li>
          </ul>
        </div>
        <h2>{title}</h2>
        <p>{shortText}</p>
        <small>Created by:{user?.name || "Unknown"}</small>
        <small>Created at: {date}</small>
      </div>
    </Link>
  );
};

export default Question;
