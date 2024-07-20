import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header1}>
      <div className={styles.leftSection}>
        <img src="asd" alt="Logo" className={styles.logo} />
        <div className={styles.titleName}>SukLearn</div>
      </div>
      <nav>
        <p className={styles.menu}>something like menu</p>
      </nav>
    </header>
  );
}
