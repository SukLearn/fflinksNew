import styles from "./SukLearn.module.css";
// import { useEffect, useRef, useState } from "react";
import AnimatedCursor from "react-animated-cursor";

import Content from "../Components/Content/Content";
import Header from "../Components/Header/Header";
import { AnimationProvider } from "../Functions/AnimationContext";
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
        <Header />
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
      </div>
    </>
  );
}
