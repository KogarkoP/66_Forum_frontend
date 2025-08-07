import styles from "./RegistrationForm.module.css";
import Link from "next/link";

const RegistrationForm = () => {
  return (
    <div className={styles.main}>
      <h2>Registration</h2>
      <p className={styles.indication}>
        Enter your credentials to create your account
      </p>
      <div className={styles.form_row}>
        <label htmlFor="name">Name</label>
        <input id="name" type="text" placeholder="Name" />
      </div>
      <div className={styles.form_row}>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" placeholder="Email" />
      </div>
      <div className={styles.form_row}>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" placeholder="Password" />
      </div>
      <div className={styles.checkbox}>
        <input id="terms" type="checkbox" />
        <label htmlFor="terms">
          I agree to the
          <span>
            <Link href={"/"}>Terms</Link>
          </span>
          &
          <span>
            <Link href={"/"}>Privacy</Link>
          </span>
        </label>
      </div>
      <button>Register</button>
      <div className={styles.login_con}>
        <p>
          Already have an account?
          <span>
            <Link href={"/login"}>Login</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegistrationForm;
