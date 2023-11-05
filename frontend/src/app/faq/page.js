import styles from  "./page.module.css";

function Page() {
  return (
  <>
    <h1 style={{marginLeft: "5%"}}>Frequently Asked Questions</h1>
    <div className={styles["accordion-container"]}>
      <section className={styles["accordion"]}>
        <div className={styles["tab"]}>
          <input type="checkbox" name="accordion-1" id="cb1" />
          <label htmlFor="cb1" className={styles["tab__label"]}>What is MedMind?</label>
          <div className={styles["tab__content"]}>
            <p>MedMind is a web-based application that provides self-assessment and guidance for people who are struggling with mental health issues such as depression, anxiety, stress, insomnia, etc. The chatbot uses natural language processing and machine learning to understand your input and respond with appropriate suggestions and resources.</p>
          </div>
        </div>
        <div className={styles["tab"]}>
          <input type="checkbox" name="accordion-1" id="cb2" />
          <label htmlFor="cb2" className={styles["tab__label"]}>How does MedMind work?</label>
          <div className={styles["tab__content"]}>
            <p>MedMind works by asking you a series of questions to assess your current situation and mood. Based on your answers, the chatbot will provide you with personalized feedback and tips to cope with your challenges. The chatbot has been trained on numerous books about mental health and is capable of giving advice relevant to your needs along with sources.</p>
          </div>
        </div>
        <div className={styles["tab"]}>
          <input type="checkbox" name="accordion-1" id="cb3" />
          <label htmlFor="cb3" className={styles["tab__label"]}>What are the benefits of using MedMind?</label>
          <div className={styles["tab__content"]}>
            <p>MedMind can help you in various ways, such as:</p>
            <ul>
              <li>Providing you with a safe and confidential space to express your feelings and thoughts</li>
              <li>Helping you identify and challenge negative or distorted thinking patterns</li>
              <li>Teaching you coping skills and strategies to manage your emotions and behaviors</li>
              <li>Motivating you to take action and make positive changes in your life</li>
              <li>Connecting you with professional help and support if needed</li>
            </ul>
          </div>
        </div>
        <div className={styles["tab"]}>
          <input type="checkbox" name="accordion-1" id="cb4" />
          <label htmlFor="cb4" className={styles["tab__label"]}>Is MedMind a replacement for therapy or medication?</label>
          <div className={styles["tab__content"]}>
            <p>No, MedMind is not a replacement for therapy or medication. The chatbot is designed to provide you with general information and guidance, but it cannot diagnose, treat, or prescribe any medical or psychological condition. The chatbot is not a substitute for professional advice or care from a licensed mental health provider. If you are experiencing a mental health crisis or emergency, please call 911 or contact your local crisis center.</p>
          </div>
        </div>
        <div className={styles["tab"]}>
          <input type="checkbox" name="accordion-1" id="cb5" />
          <label htmlFor="cb5" className={styles["tab__label"]}>How can I access MedMind?</label>
          <div className={styles["tab__content"]}>
            <p>As of now, you will need to host the machine learning model locally in order to acces it. Once you have hosted it, just click on the &quot;chatbot&quot; link on the navbar to access it!</p>
          </div>
        </div>
        <div className={styles["tab"]}>
          <input type="checkbox" name="accordion-1" id="cb6" />
          <label htmlFor="cb6" className={styles["tab__label"]}>How is my privacy and data protected?</label>
          <div className={styles["tab__content"]}>
            <p>We take your privacy and data security very seriously. We use encryption and other security measures to protect your personal information and chat history. We do not share your data with any third parties without your consent. Your chat history is only stored in your browser and we have no way of seeing what you say to MedMind. </p>
          </div>
        </div>
      </section>
  </div>

  </>);

}

export default Page;
