import styles from  "./page.module.css";

function Page() {
  return (
  <>
    <h1>FAQ</h1>
    <section className="accordion">
  <div className={styles["tab"]}>
    <input type="checkbox" name="accordion-1" id="cb1" />
    <label htmlFor="cb1" className={styles["tab__label"]}>Question 1</label>
    <div className={styles["tab__content"]}>
      <p>some answer here</p>
    </div>
  </div>
  <div className={styles["tab"]}>
    <input type="checkbox" name="accordion-1" id="cb2" />
    <label htmlFor="cb2" className={styles["tab__label"]}>Question 2</label>
    <div className={styles["tab__content"]}>
      <p>another answer here</p>
    </div>
  </div>
</section>

  </>);

}

export default Page;
