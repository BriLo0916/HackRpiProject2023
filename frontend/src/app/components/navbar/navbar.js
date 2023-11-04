import Link from "next/link";

import styles from "./navbar.module.css";

function Navbar() {
  return ( 
    <>
    <div className={styles["nav-container"]}>
      <h2>MedMind</h2>
      <div className={styles["gap"]} />
      <Link href="/"> Home </Link>
      <Link href="/resources"> Resources</Link>
      <Link href="/faq">FAQ </Link>
      <Link href="/privacy">Privacy </Link>
      </div>
    </>
  );
}

export default Navbar;
