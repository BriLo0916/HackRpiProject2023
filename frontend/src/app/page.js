import styles from './page.module.css';
import Image from 'next/image';


export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Welcome to MedMind: our Medical Chatbot</h1>
        <p>Empowering mental health through technology.</p>
      </header>

      <section className={styles.intro}>
        <h2>Our Mission</h2>
        <p>To provide accessible and confidential support for mental health issues through technology.</p>
      </section>

      <section className={styles.chatbot}>
        <h2>Meet Our Chatbot</h2>
        <p>Our advanced AI chatbot is here to help identify and address mental health concerns.
          It is your new knowledgeable friend who is well-versed in a number of areas.
          Including but not limited to:
        </p>
        <div>
            <ul>
              <li>Different mental health conditions</li>
              <li>Self-love</li>
              <li>Trauma</li>
              <li>Recovering from addiction</li>
              <li>Advice for highly-sensitive people</li>
              <li>Burnout</li>
              <li>Advice for people healing from emotional pain</li>
              <li>Advice for understanding family trauma</li>
            </ul>
          </div>
        <button className={styles.button}>Get Started</button> {/* Added className */}
      </section>

      <footer className={styles.footer}>
        <a 
          href="https://github.com/BriLo0916/HackRpiProject2023"
          className={styles.footerLink}
        >
          <Image 
            src="/github.svg"
            alt="github logo" 
            width={24}
            height={24}
          />
            <p> This project was made with <span style={{color:"red"}}>&lt;3</span> during HackRPI 2023</p>
          
        </a>
        <p>For your privacy, no data is being collected.</p>
      </footer>
    </div>
  );
}
