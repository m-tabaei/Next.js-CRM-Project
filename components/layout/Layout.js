import Link from "next/link";
import { useEffect, useState } from "react";
function Layout({ children }) {
  const [isLoggedIn, setisLoggedIn] = useState(false);
  useEffect(() => {
    fetch("/api/user")
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          setisLoggedIn(true);
        }
      });
  }, []);
  const signOuthandler = async () => {
    const res = await fetch("/api/auth/signout");
    window.location.href = "/";
    alert("Signed out successfully!");
  };

  return (
    <>
      <header className="header">
        <h2>
          <Link href="/"> Emperial CRM</Link>
        </h2>
        {isLoggedIn ? (
          <>
            <Link href="/add-customer"> Add customer</Link>
            <button onClick={signOuthandler}>SignOut</button>
            <Link href="/dashboard/order"> DashBoard</Link>
          </>
        ) : (
          <>
            <Link href="/signup/signup"> SignUp</Link>
            <Link href="/signin/signin"> SignIn</Link>
          </>
        )}
      </header>
      <div className="main">{children}</div>
      <footer className="footer">
        <a href="http://www.emperial-co.com" target="_blank" rel="noreferrer">
          {" "}
          Emperial-co
        </a>{" "}
        Nex.js | CRM Project
      </footer>
    </>
  );
}

export default Layout;
