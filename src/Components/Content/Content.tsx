import { Link } from "react-router-dom";
import styles from "./Content.module.css";
import { useAnimation } from "../../Functions/AnimationContext";

export default function Content() {
  const { animation } = useAnimation();
  return (
    <>
      <div className={styles.content}>
        <div
          className={`${styles.greetingContainer} ${
            animation ? styles.animationGreeting : ""
          }`}
        >
          <p id={styles.greeting}>&lt;p&gt; Hi my name is &lt;p&gt;</p>
        </div>
        <div
          className={`${styles.authorContainer} ${
            animation ? styles.animationAuthor : ""
          }`}
        >
          <p id={styles.author}>&lt; Luka Tarkhnishvili &gt;</p>
        </div>
        <div
          className={`${styles.main} ${animation ? styles.animationMain : ""}`}
        >
          <p>&lt; I build things for web &gt;</p>
        </div>
        <div
          className={`${styles.contentText} ${
            animation ? styles.animationContentText : ""
          }`}
        >
          <p>
            I am a beginner in web development, with a strong passion for
            developing and coding logic. Currently, I am focused on honing my
            skills and expanding my knowledge in this field.
          </p>
        </div>

        <Link
          className={`${styles.checkout} ${
            animation ? styles.animationCheckOut : ""
          }`}
          to="/projects"
        >
          Check Out my Projects
        </Link>
      </div>
    </>
  );
}
