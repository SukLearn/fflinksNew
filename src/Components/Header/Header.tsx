import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useEffect, useState } from "react";
export default function Header() {
  const [animation, setAnimation] = useState(true);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const item = localStorage.getItem("animation");
    if (item === null) {
      localStorage.setItem("animation", "true");
    } else {
      setAnimation(item === "true");
    }
  }, []);
  function toggleAnimation() {
    const newAnimationState = !animation;
    setAnimation(newAnimationState);
    localStorage.setItem("animation", newAnimationState.toString());
  }

  return (
    <>
      <div className={styles.header}>
        <div id={styles.logo}>
          <Link to="/">
            {/* <img src="assets/images/SuklearnLogo.svg" alt="Logo" /> */}
            <img src="src/images/SuklearnLogo.svg" alt="Logo" />
            <p id={styles.logoName}>uklearn</p>
          </Link>
        </div>
        {width >= 1060 ? (
          <>
            <div className={styles.links}>
              <Link to="/fflinks" title="Made for my Brother">
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
              <button className={styles.change} title="Color Palette Button">
                change
              </button>
              <button
                className={` ${
                  animation
                    ? styles.animationButtonOn
                    : styles.animationButtonOff
                }`}
                title="Animation Show button"
                onClick={toggleAnimation}
              ></button>
            </div>
          </>
        ) : (
          <>
            <div>
              <div className={styles.dropDown}>
                <button className={styles.dropBtn}>Menu</button>
                <div className={styles.dropDownContent}>
                  <Link to="/fflinks">
                    <span>1.</span> fflinks
                  </Link>
                  <Link to="/projects">
                    <span>2.</span> Projects
                  </Link>
                  <Link to="/contact">
                    <span>3.</span> Contact
                  </Link>
                  <Link to="/honors">
                    <span>4.</span> Honors
                  </Link>
                </div>
              </div>
              {/* <button className={styles.change}>change</button>
              <button className={styles.change}>animation</button> */}
            </div>
          </>
        )}
      </div>
    </>
  );
}
