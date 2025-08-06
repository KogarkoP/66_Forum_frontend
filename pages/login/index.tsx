import styles from "./login.module.css";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import LoginForm from "@/components/LoginForm/LoginForm";

const Login = () => {
  return (
    <PageTemplate>
      <div className={styles.main}>
        <LoginForm />
      </div>
    </PageTemplate>
  );
};

export default Login;
