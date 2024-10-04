import styles from "./Calculator.module.css";
import "../../../index.css";
import { Center } from "@mantine/core";
import Header from "../../Header/Header";
import { useState } from "react";

const Calculator = () => {
  const [display, setDisplay] = useState({ sign: "", num: 0, res: 0 });
  const btnValue = [
    ["C", "+/-", "%", "/"],
    [7, 8, 9, "X"],
    [4, 5, 6, "-"],
    [1, 2, 3, "+"],
    [0, ".", "⌫", "="],
  ];
  const handleClick = (value: number) => {
    if (typeof value === "number")
      setDisplay((prev) => ({ ...prev, num: value }));
    else {
      setDisplay((prev) => ({ ...prev, sign: value }));
    }
  };
  return (
    <>
      <Header backgroundColor="#3d2f2f" />
      <div className={` ${styles.wrapper}`}>
        <Center>
          <div className={`${styles.calcWrapper}`}>
            <div className={`${styles.display}`}>{display.num}</div>
            <div className={`${styles.calcBody}`}>
              {btnValue.flat().map((value, i) => {
                return (
                  <button
                    key={i}
                    value={value}
                    className={` ${
                      value === "C"
                        ? `bg-red-600 ${styles.redButton}`
                        : `${styles.buttons}`
                    }`}
                    onClick={() =>
                      typeof value === "number" && handleClick(value)
                    }
                  >
                    {value}
                  </button>
                );
              })}
            </div>
          </div>
        </Center>
      </div>
    </>
  );
};

export default Calculator;
