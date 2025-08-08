import styles from "@/styles/Home.module.css";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import Questions from "@/components/Questions/Questions";

const MainPage = () => {
  return (
    <PageTemplate>
      <div className={styles.main}>
        <Questions />
      </div>
    </PageTemplate>
  );
};

export default MainPage;
