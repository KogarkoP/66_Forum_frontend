import styles from "./LoginForm.module.css";
import Cookies from "js-cookie";
import ModalTemplate from "../ModalTemplate/ModalTemplate";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";
import { login } from "@/pages/api/fetch";
import { useRouter } from "next/router";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isError, setError] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(false);

  const router = useRouter();

  const onSubmit = async () => {
    try {
      const loginData = {
        email: email,
        password: password,
      };

      const response = await login(loginData);
      console.log(response);

      if (response.status === 200) {
        Cookies.set("@user_jwt", response.data.jwt);
        const userId = response.data.user.id;
        localStorage.setItem("userId", userId);
        setLoggedIn(true);
        setTimeout(() => router.push("/"), 3000);
      }
      console.log(response);
      setEmail("");
      setPassword("");
    } catch (err) {
      setError(true);
      setTimeout(() => setError(false), 4000);
    }
  };

  return (
    <>
      {isError && (
        <ModalTemplate>
          <p className={styles.error}>Your email or password is wrong</p>
        </ModalTemplate>
      )}
      {isLoggedIn && (
        <ModalTemplate>
          <div className={styles.message}>
            <FontAwesomeIcon className={styles.success} icon={faCircleCheck} />
            <p>You Have Successfully Logeed In</p>
          </div>
        </ModalTemplate>
      )}
      <div className={styles.main}>
        <h2>Login</h2>
        <p className={styles.indication}>
          Enter your email and password to access your account
        </p>
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
        <button onClick={onSubmit}>Login</button>
        <div className={styles.register_con}>
          <p>
            Don&apos;t Have An Account?
            <span>
              <Link href={"/register"}>Register Now</Link>
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
