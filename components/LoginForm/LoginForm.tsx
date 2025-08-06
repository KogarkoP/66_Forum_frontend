import styles from "./LoginForm.module.css";
import React from "react";
import Link from "next/link";

const LoginForm = () => {
  return (
    <div className={styles.main}>
      <h2>Login</h2>
      <p className={styles.indication}>
        Enter your email and password to access your account
      </p>
      <div className={styles.form_row}>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" placeholder="Email" />
      </div>
      <div className={styles.form_row}>
        <label htmlFor="password">Password</label>
        <input id="password" type="password" placeholder="Password" />
      </div>
      <button>Login</button>
      <div className={styles.register_con}>
        <p>
          Don&apos;t Have An Account?
          <span>
            <Link href={"/register"}>Register Now</Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;
