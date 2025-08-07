import styles from "./register.module.css";
import PageTemplate from "@/components/PageTemplate/PageTemplate";
import RegistrationForm from "@/components/RegistrationForm/RegistrationForm";

const Register = () => {
  return (
    <PageTemplate>
      <div className={styles.main}>
        <RegistrationForm />
      </div>
    </PageTemplate>
  );
};

export default Register;
