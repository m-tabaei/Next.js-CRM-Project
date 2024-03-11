import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "@templates/SignupPage.module.css";
import Link from "next/link";

function SignInUser() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  useEffect(() => {
    fetch("/api/user")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success")
          window.location.href = "/dashboard/order";
      });
  }, []);

  const signInHandler = async () => {
    const res = await fetch("/api/auth/signin", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (data.status === "success") router.push("/dashboard/order");
  };
  return (
    // <div  className={styles.form}>
    //   <h4>LogIn to your account</h4>
    //     <div>
    //       <input
    //         type="text"
    //         placeholder="Email"
    //         value={email}
    //         onChange={(e) => setEmail(e.target.value)}
    //         />
    //     </div>
    //     <div>
    //       <input
    //         type="text"
    //         placeholder="Password"
    //         value={password}
    //         onChange={(e) => setPassword(e.target.value)}
    //         />
    //     </div>

    //   <div className="customer-page__buttons">
    //     <button className="second" onClick={signInHandler}>
    //       Login
    //     </button>
    //   </div>

    // </div>

    <div className={styles.form}>
      <h4>LogIn to your account</h4>

      <label>Email :</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Password : </label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={signInHandler}>Signin</button>

      <p>
        You have not Account? <Link href="/signup/signup">Signup</Link>
      </p>
    </div>
  );
}

export default SignInUser;
