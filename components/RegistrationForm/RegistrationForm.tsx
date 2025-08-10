import { useState } from "react";
import { insertUser } from "@/pages/api/fetch";
import styles from "./RegistrationForm.module.css";
import Link from "next/link";
import axios from "axios";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [termsPrivacy, setTermsPrivacy] = useState(false);
  const [password, setPassword] = useState("");

  const Submit = async () => {
    const user = {
      name: name,
      email: email,
      terms_privacy: termsPrivacy,
      password: password,
    };

    const response = await insertUser(user);
    console.log(response);
  };

  return (
    <div className={styles.main}>
      <h2>Registration</h2>
      <p className={styles.indication}>
        Enter your credentials to create your account
      </p>
      <div className={styles.form_row}>
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className={styles.form_row}>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className={styles.form_row}>
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div className={styles.checkbox}>
        <input
          id="terms"
          type="checkbox"
          checked={termsPrivacy}
          onChange={(e) => setTermsPrivacy(e.target.checked)}
        />
        <label htmlFor="terms">
          I agree to the
          <span>
            <Link href={"/"}>Terms</Link>
          </span>
          &
          <span>
            <Link href={"/"}>Privacy Policy</Link>
          </span>
        </label>
      </div>
      <button onClick={Submit}>Register</button>
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
