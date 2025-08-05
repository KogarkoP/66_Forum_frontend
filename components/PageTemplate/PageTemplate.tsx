import styles from "./PageTemplate.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

type PageTemplateProps = {
  children: React.ReactNode;
};

const PageTemplate = ({ children }: PageTemplateProps) => {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>{children}</div>
      <Footer />
    </>
  );
};

export default PageTemplate;
