import styles from "./SukLearn.module.css";
// import { useEffect, useRef, useState } from "react";
// import AnimatedCursor from "react-animated-cursor";

// import Content from "../Content/Content";
// import Header from "../Header/Header";
// import { AnimationProvider } from "../../Functions/AnimationContext";
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
      <div className={styles.forTime}>
        <h1>Website is under development</h1>
        <p>due acquiring new skills, I am changing website design and logic</p>
      </div>
      {/* <div className={styles.wrapper}>
        <Header backgroundColor="#09192f" />
        <AnimationProvider>
          <Content />
        </AnimationProvider>
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
      </div> */}
    </>
  );
}
