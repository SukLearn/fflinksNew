import styles from "./Content.module.css";
export default function Content() {
  return (
    <>
      <div className={styles.content}>
        <p>Hi my name is</p>
        <p>Luka Tarkhnishvili</p>
        <p>I build things for web.</p>

        {/* small */}
        <p>
          I am a beginner in web development, with a strong passion for
          developing and coding logic. Currently, I am focused on honing my
          skills and expanding my knowledge in this field.
        </p>
        <button>Check Out my Projects</button>
      </div>
    </>
  );
}
