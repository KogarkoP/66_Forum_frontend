import styles from "./PageTemplate.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

type PageTemplateProps = {
  children: React.ReactNode;
};

const PageTemplate = ({ children }: PageTemplateProps) => {
  return (
    <div className={styles.content_wrapper}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default PageTemplate;
