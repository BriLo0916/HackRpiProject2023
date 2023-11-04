import styles from './page.module.css';
import Image from 'next/image';


export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Welcome to MedMind: our Medical Chatbot</h1>
        <p>Empowering mental health through technology</p>
      </header>

      <section className={styles.intro}>
        <h2>Our Mission</h2>
        <p>Providing accessible and confidential support for mental health issues.</p>
      </section>

      <section className={styles.chatbot}>
        <h2>Meet Our Chatbot</h2>
        <p>Our advanced AI chatbot is here to help identify and address mental health concerns.</p>
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
            <p> This project was made during HackRPI 2023</p>
        </a>
      </footer>
    </div>
  );
}
