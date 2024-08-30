import styles from "./Loading.module.css";
import pepeImg from "../../../images/pepe.avif";
export default function Loading() {
  return (
    <>
      <div className={styles.loaderBody}>
        <img className={styles.loadingIMG} src={pepeImg} alt="MEME" />
        <div className={styles.loaders}>
          <div className={styles.loader}></div>
          <div className={styles.loaderDifferent}></div>
          <div className={styles.loader}></div>
        </div>
      </div>
    </>
  );
}
