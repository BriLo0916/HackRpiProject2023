import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1>Welcome to our Medical ChatBot</h1>
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
        <p>&copy; 2023 Medical ChatBot. All rights reserved.</p>
      </footer>
    </div>
  );
}
