import Link from "next/link";
function Layout({ children }) {
  return (
    <>
      <header className="header">
        <h2>Emperial CRM</h2>
        <Link href="/add-customer"> Add customer</Link>
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
