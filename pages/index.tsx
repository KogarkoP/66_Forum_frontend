import styles from "@/styles/Home.module.css";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import Questions from "@/components/Questions/Questions";
import GreetingsCon from "@/components/GreetingsCon/GreetingsCon";

const MainPage = () => {
  return (
    <PageTemplate>
      <div className={styles.main}>
        <GreetingsCon />
        <Questions />
      </div>
    </PageTemplate>
  );
};

export default MainPage;
