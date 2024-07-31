import { Link } from "react-router-dom";
import styles from "./SukLearn.module.css";
// import { useEffect, useRef, useState } from "react";
import AnimatedCursor from "react-animated-cursor";
import Content from "../Components/Content/Content";
export default function SukLearn() {
  // const [color, setColor] = useState([
  //   "white",
  //   "dark",
  //   "orange",
  //   "pink",
  //   "lightBlue",
  // ]);

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.header}>
          <div id={styles.logo}>
            <Link to="/">
              {/* <img src="assets/images/SuklearnLogo.svg" alt="Logo" /> */}
              <img src="src/images/SuklearnLogo.svg" alt="Logo" />
              <p id={styles.logoName}>uklearn</p>
            </Link>
          </div>
          <div className={styles.links}>
            <Link to="/fflinks">
              <span>01.</span> fflinks
            </Link>
            <Link to="/projects">
              <span>02.</span> Projects
            </Link>
            <Link to="/contact">
              <span>03.</span> Contact
            </Link>
            <Link to="/honors">
              <span>04.</span> Honors
            </Link>
            <button className={styles.change}>change</button>
          </div>
        </div>
        <Content />
        <AnimatedCursor
          innerSize={8}
          outerSize={32}
          color="102, 217, 237"
          outerAlpha={0}
          innerScale={2.5}
          outerStyle={{
            border: "1px solid #66d9ed",
          }}
          outerScale={1}
          showSystemCursor={true}
          trailingSpeed={5}
        />
      </div>
    </>
  );
}
