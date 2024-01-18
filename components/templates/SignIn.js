import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function SignInUser() {
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

  const signInHandler = async () => {
    const res = await fetch("/api/auth/signin", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    if (data.status === "success") router.push("/dashboard/dashboard");
  };
  return (
    <div className="customer-page">
      <h4>Log In Form</h4>
      <div className="form-input">
        <div>
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      <div className="customer-page__buttons">
        <button className="second" onClick={signInHandler}>
          Login
        </button>
      </div>
    </div>
  );
}

export default SignInUser;
