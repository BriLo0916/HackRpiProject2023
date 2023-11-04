import Link from "next/link";

import styles from "./navbar.module.css";

function Navbar() {
  return ( 
    <>
    <div className={styles["nav-container"]}>
      <h2>MedMind</h2>
      <div className={styles["gap"]} />
      <Link href="/"> Home </Link>
      <a href="http://localhost:8000">Chatbot</a>
      <Link href="/resources"> Resources</Link>
      <Link href="/faq">FAQ </Link>
      </div>
    </>
  );
}

export default Navbar;
