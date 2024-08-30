import styles from "./Gatsby.module.css";
import gatsbyImg from "../../../../../images/gatsby.avif";
interface Prop {
  display: string;
}
export default function Gatsby({ display }: Prop) {
  return (
    <img
      style={{ display: display }}
      src={gatsbyImg}
      alt="The Great Gatsby Gives Toast"
      id={styles.great}
    />
  );
}
