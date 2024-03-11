import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../templates/SignupPage.module.css";

function SignUpUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  useEffect(() => {
    fetch("/api/user")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success")
          window.location.href = "/dashboard/dashboard";
      });
  }, []);

  const signUpHandler = async () => {
    const res = await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (data.status === "success") router.push("/signin");
  };
  return (
    // <div className="customer-page">
    //   <h4>Registration Form</h4>
    //   <div className="form-input">
    //     <div>
    //       <input
    //         type="text"
    //         placeholder="Email"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //       />
    //     </div>
    //     <div>
    //       <input
    //         type="text"
    //         placeholder="Password"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //       />
    //     </div>
    //   </div>
    //   <div className="customer-page__buttons">
    //     <button className="second" onClick={signUpHandler}>
    //       SignUp
    //     </button>
    //   </div>
    // </div>
    <div className={styles.form}>
      <h4>Registration account</h4>
      
        <label>Email :</label>
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password : </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button  onClick={signUpHandler}>
          SignUp
        </button>
      
      <p>
        You have Account? <Link href="/signin/signin">SignIn</Link>
      </p>
    </div>
  );
}

export default SignUpUser;
