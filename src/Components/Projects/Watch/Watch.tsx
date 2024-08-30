import styles from "./Watch.module.css";
import "../../../index.css";
import { useEffect, useState } from "react";

export default function Watch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [showCss, setShowCss] = useState(false);
  const [copy, setCopy] = useState(false);
  const codeTsx = `import styles from "./Watch.module.css";
import "../../../index.css";
import { useEffect, useState } from "react";

export default function Watch() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval: number;
    if (isRunning) {
      interval = setInterval(() => setTime((prevTime) => prevTime + 10), 10);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isRunning]);

  const startStop = () => setIsRunning(!isRunning);

  const milliseconds = time % 1000;
  const seconds = Math.floor((time / 1000) % 60);
  const minutes = Math.floor((time / 60000) % 60);
  const hours = Math.floor(time / 3600000);

  const formatTime = (time: number, digits: number = 2) =>
    time.toString().padStart(digits, "0");

  return (
    <div className={styles.wrapper }>
      <p className="text-6xl p-3 mt-52 bg-slate-700  rounded-xl">
        <span className="">{formatTime(hours)}</span>:
        <span className="">{formatTime(minutes)}</span>:{formatTime(seconds)}:
        {formatTime(milliseconds)}
      </p>

      <button
        onClick={startStop}
      >
        {!isRunning ? "Start" : "Stop"}
      </button>
    </div>
  );
}
`;
  const codeCss = `body {
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
  margin: 50px 0 0 0;
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
  height: 500px;
}
.codeSection {
  margin: 50px 0 0 0;
  border: 1px solid white;
}
.codeButton:hover {
  background-color: white;
  color: black;
}
`;
  useEffect(() => {
    let interval: number;
    if (isRunning) {
      interval = setInterval(() => setTime((prevTime) => prevTime + 10), 10);
    }
    return () => {
      clearInterval(interval);
    };
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
  return (
    <div className={`${styles.wrapper} grid justify-items-stretch`}>
      <p className="text-6xl p-3 mt-20 bg-slate-700  rounded-xl">
        {formatTime(hours)}:{formatTime(minutes)}:{formatTime(seconds)}:
        {formatMilliseconds(milliseconds)}
      </p>
      <button onClick={reset}>Reset</button>
      <button
        onClick={startStop}
        className={`${styles.btn} ${styles.btnWhite} ${styles.btnAnimate}`}
      >
        {!isRunning ? "Start" : "Stop"}
      </button>
      <section className="grid grid-cols-3  gap-x-[185px] mt-4 border w-[800px]">
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
            className={`${styles.copy} w-36 py-2 text-xl font-bold border-2 border-white	hover:bg-gray-500`}
            onClick={handleCopy}
          >
            {copy ? <span>&#9989;</span> : "Copy"}
          </button>
        </div>

        <div className={styles.code}>
          <pre className="text-lg">{showCss ? codeCss : codeTsx}</pre>
        </div>
      </section>
    </div>
  );
}
