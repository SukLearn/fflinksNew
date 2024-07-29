import { Link } from "react-router-dom";
import styles from "./SukLearn.module.css";
import { useEffect, useRef } from "react";
export default function SukLearn() {
  const cursorRef = useRef(null);
  useEffect(() => {
    const cursor = cursorRef.current;
    if (cursor) {
      console.log("element ", cursor);
    }
  }, []);

  const handleMouseMove = (event: React.MouseEvent) => {
    // console.log("mouse pos: ", event.clientX, event.clientY);
    const leftPos = event.clientX;
    const topPost = event.clientY;
  };

  return (
    <>
      <div onMouseMove={handleMouseMove}>
        <div className={styles.cursor} ref={cursorRef}>
          <h1>test</h1>
        </div>
        {/* <div className={styles.rounded}>
          <div className={styles.pointed}></div>
        </div> */}
        <Link className={styles.links} to="/fflinks">
          fflinks
        </Link>
        <br />
        <Link className={styles.links} to="/projects">
          Projects
        </Link>
        <br />
        <Link className={styles.links} to="/contact">
          contact
        </Link>
        <br />
        <Link className={styles.links} to="/honors">
          honors
        </Link>
      </div>
    </>
  );
}
