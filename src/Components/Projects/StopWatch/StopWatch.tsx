import styles from "./StopWatch.module.css";
import "../../../index.css";
import { useEffect, useState } from "react";
import SukModal from "../../hModal/sukModal";
import Code from "../../Code/Code";
// showing code modal and start stop
const codeTsx = ``;
const codeOldTsx = `export default function Watch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [showCss, setShowCss] = useState(false);
  const [copy, setCopy] = useState(false);
  const [activeStart, setActiveStart] = useState(false);
  const [activeReset, setActiveReset] = useState(false);

  useEffect(() => {
    let interval: number;
    if (isRunning) {
      interval = setInterval(() => setTime((prevTime) => prevTime + 10), 10);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const startStop = () => setIsRunning(!isRunning);
  const milliseconds = time % 1000;
  const seconds = Math.floor((time / 1000) % 60);
  const minutes = Math.floor((time / 60000) % 60);
  const hours = Math.floor(time / 3600000);

  const handleCss = () => setShowCss(true);
  const handleTsx = () => setShowCss(false);
  const handleCopy = () => {
    showCss ? codeCss : codeTsx;
    const text = navigator.clipboard.writeText(showCss ? codeCss : codeTsx);
    setCopy(true);

    setInterval(() => setCopy(false), 2000);
    console.log({ text });
    console.clear();
  };

  const formatTime = (time: number, digits: number = 2) =>
    time.toString().padStart(digits, "0");
  const formatMilliseconds = (time: number) =>
    Math.floor(time / 10)
      .toString()
      .padStart(2, "0");
  const reset = () => {
    setTime(0);
    setIsRunning(false);
  };
  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key == " " || e.key == "Enter") {
      startStop();
      setActiveStart(true);
    } else if (e.key == "r") {
      reset();
      setActiveReset(true);
    }
  };
  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.key == " " || e.key == "Enter") setActiveStart(false);
    else if (e.key == "r") setActiveReset(false);
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  });
  return (
    <div className={\`\${styles.wrapper} grid justify-items-stretch\`}>
      <p className="text-6xl p-3 mt-20 bg-slate-700  rounded-xl">
        {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}:
        {formatMilliseconds(milliseconds)}
      </p>
      <div className={\`\${styles.buttons} grid grid-cols-2 gap-10\`}>
        <button
          onClick={startStop}
          className={\`\${styles.btn} \${styles.btnWhite} \${styles.btnAnimate} \${
            activeStart ? \`\${styles.btnActive} \${styles.btnWhiteActive}\` : ""
          }\`}
        >
          {!isRunning ? "Start" : "Stop"}
        </button>
        <button
          onClick={reset}
          className={\`\${styles.btn} \${styles.btnWhite} \${styles.btnAnimate} \${
            activeReset ? \`\${styles.btnActive} \${styles.btnWhiteActive}\` : ""
          }\`}
        >
          Reset
        </button>
      </div>

      <section className="grid grid-cols-3  gap-x-[185px] mt-4 border w-[800px] ">
        <div>
          <button
            onClick={handleTsx}
            className="w-36 py-2 text-xl font-bold border-2 border-white	hover:bg-gray-500 "
          >
            Tsx
          </button>
        </div>
        <div>
          <button
            onClick={handleCss}
            className="w-36 py-2 text-xl font-bold border-2 border-white	hover:bg-gray-500 "
          >
            css
          </button>
        </div>
        <div className="">
          <button
            className={\`\${styles.copy} w-36 py-2 text-xl font-bold border-2 border-white	hover:bg-gray-500\`}
            onClick={handleCopy}
          >
            {copy ? <span>&#9989;</span> : "Copy"}
          </button>
        </div>

        <div className={styles.code}>
          <pre className="text-lg">{showCss ? codeCss : codeTsx}</pre>
        </div>
      </section>
      <SukModal
        title="stopWatch"
        text={text}
        problems={problems}
        front="React Vite, Typescript"
      />
    </div>
  );
}`;
const codeCss = `body {
  background-image: url(https://images.pexels.com/photos/5624978/pexels-photo-5624978.jpeg);
  background-repeat: no-repeat;
  /* background-size: cover; */
  background-attachment: fixed;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  color: white;
  background-color: black;
}
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn {
  margin: 30px 0 30px 0;
  font-size: 2rem;
  padding: 35px 80px;
  display: inline-block;
  border-radius: 100px;
  transition: all 0.2s;
  position: relative;
  -webkit-transition: all 0.2s;
  -moz-transition: all 0.2s;
  -ms-transition: all 0.2s;
  -o-transition: all 0.2s;
}

.btn:hover {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.btn:active {
  transform: translateY(-1px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.btnWhite {
  background-color: #fff;
  color: #777;
}

.btn::after {
  content: "";
  display: inline-block;
  height: 100%;
  width: 100%;
  border-radius: 100px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: all 0.4s;
}

.btnWhite::after {
  background-color: #fff;
}

.btn:hover::after {
  transform: scaleX(1.4) scaleY(1.6);
  opacity: 0;
  -webkit-transform: scaleX(1.4) scaleY(1.6);
  -moz-transform: scaleX(1.4) scaleY(1.6);
  -ms-transform: scaleX(1.4) scaleY(1.6);
  -o-transform: scaleX(1.4) scaleY(1.6);
}

.btnAnimated {
  -webkit-animation: moveInBottom 5s ease-out;
  animation: moveInBottom 5s ease-out;
  -webkit-animation-fill-mode: backwards;
  animation-fill-mode: backwards;
}

.btnActive {
  transform: translateY(-1px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  content: "";
  display: inline-block;
  display: flex;
  z-index: -1;
  transition: all 0.4s;
  -webkit-transition: all 0.4s;
  -moz-transition: all 0.4s;
  -ms-transition: all 0.4s;
  -o-transition: all 0.4s;
}

.btnActive::after {
  opacity: 0;
  transform: scaleX(1.4) scaleY(1.6);
  -webkit-transform: scaleX(1.4) scaleY(1.6);
  -moz-transform: scaleX(1.4) scaleY(1.6);
  -ms-transform: scaleX(1.4) scaleY(1.6);
  -o-transform: scaleX(1.4) scaleY(1.6);
}
.btnWhiteActive {
  background-color: #fff;
  color: #777;
}
@-webkit-keyframes moveInBottom {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

@keyframes moveInBottom {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

.code {
  overflow: auto;
  height: 540px;
  width: 800px;
}
`;

const text = `The stopwatch is a simple yet functional time-tracking tool designed to measure the duration of an event or task. It features a user-friendly interface that allows users to start, stop, and reset the timer with ease. The stopwatch displays the elapsed time in a clear and precise format, showing hours, minutes, seconds, and milliseconds.`;
const problems = `The problem that I encountered was with setInterval. the function would not count if it wasn't in active tab, also I needed to adjust how it counts(intervals) because it worked differently than it should bu logic. the time wasn't matching phone's stopWatch. Both Problems solved via Date.now() function`;
// const newTsx = ``;
export default function StopWatch() {
  const [activeStart, setActiveStart] = useState(false);
  const [activeReset, setActiveReset] = useState(false);
  const [start, setStart] = useState(false);
  const [time, setTime] = useState(0);
  const [startTime, setStartTime] = useState<number | null>(0);
  const [elapsedTime, setElapsedTime] = useState(0);
  const Start = () => {
    if (!start) {
      const currentTime = Date.now();
      setStartTime(currentTime - elapsedTime);
      setStart(true);
    } else {
      setElapsedTime(Date.now() - (startTime || 0));
      setStart(false);
    }
  };

  const Reset = () => {
    setTime(0);
    setStartTime(null);
    setElapsedTime(0);
    setStart(false);
  };
  useEffect(() => {
    let interval: number;
    if (start && startTime !== null) {
      interval = window.setInterval(() => {
        setTime(Date.now() - startTime);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [start, startTime]);

  const Milliseconds = time % 1000;
  const Seconds = Math.floor((time / 1000) % 60);
  const Minutes = Math.floor((time / 60000) % 60);
  const Hours = Math.floor(time / 3600000);

  const formatTime = (time: number, digits: number = 2) =>
    time.toString().padStart(digits, "0");
  const formatMilliseconds = (time: number) =>
    Math.floor(time / 10)
      .toString()
      .padStart(2, "0");

  const handleKeydown = (e: KeyboardEvent) => {
    if (e.key == " " || e.key == "Enter") {
      Start();
      setActiveStart(true);
    } else if (e.key == "r") {
      Reset();
      setActiveReset(true);
    }
  };
  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.key == " " || e.key == "Enter") setActiveStart(false);
    else if (e.key == "r") setActiveReset(false);
  };
  useEffect(() => {
    window.addEventListener("keydown", handleKeydown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  });
  return (
    <div className={`${styles.wrapper} grid justify-items-stretch`}>
      <p className="text-6xl p-3 mt-20 bg-slate-700  rounded-xl">
        {formatTime(Hours)}:{formatTime(Minutes)}:{formatTime(Seconds)}:
        {formatMilliseconds(Milliseconds)}
      </p>

      <div className={`${styles.buttons} grid grid-cols-2 gap-10`}>
        <button
          onClick={Start}
          className={`${styles.btn} ${styles.btnWhite} ${styles.btnAnimate} ${
            activeStart ? `${styles.btnActive} ${styles.btnWhiteActive}` : ""
          }`}
        >
          {!start ? "Start" : "Stop"}
        </button>
        <button
          onClick={Reset}
          className={`${styles.btn} ${styles.btnWhite} ${styles.btnAnimate} ${
            activeReset ? `${styles.btnActive} ${styles.btnWhiteActive}` : ""
          }`}
        >
          Reset
        </button>
      </div>
      {/*  gap-x-[185px] */}
      <Code
        gridCols="grid-cols-4"
        marginT="mt-1"
        width="w-[800px]"
        gap="gap-x-[76px]"
        tsx="TSX"
        TsxText={codeTsx}
        css="CSS"
        CssText={codeCss}
        other="TsxOld"
        OtherText={codeOldTsx}
      />
      <SukModal
        title="stopWatch"
        text={text}
        problems={problems}
        front="React Vite, Typescript"
      />
    </div>
  );
}
