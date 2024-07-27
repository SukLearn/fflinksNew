import styles from "./Gatsby.module.css";

interface Prop {
  display: string;
}
export default function Gatsby({ display }: Prop) {
  return (
    <img
      style={{ display: display }}
      src="assets\images\gatsby.avifs"
      alt="The Great Gatsby Gives Toast"
      id={styles.great}
    />
  );
}
