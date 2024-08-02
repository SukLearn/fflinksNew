import styles from "./Content.module.css";
export default function Content() {
  return (
    <>
      <div className={styles.content}>
        <div className={styles.greetingContainer}>
          <p id={styles.greeting}>&lt;p&gt; Hi my name is &lt;p&gt;</p>
        </div>
        <p id={styles.author}>&lt; Luka Tarkhnishvili &gt;</p>
        <p id={styles.main}>&lt; I build things for web &gt;</p>

        <p id={styles.contentText}>
          I am a beginner in web development, with a strong passion for
          developing and coding logic. Currently, I am focused on honing my
          skills and expanding my knowledge in this field.
        </p>
        <button type="button" className={styles.checkout}>
          Check Out my Projects
        </button>
      </div>
    </>
  );
}
