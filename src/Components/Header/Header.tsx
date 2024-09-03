import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import { useEffect, useState } from "react";
import logo from "../../images/SuklearnLogo.svg";

interface HeaderProps {
  backgroundImage?: string;
  backgroundColor?: string;
}
const Header: React.FC<HeaderProps> = ({
  backgroundColor,
  backgroundImage,
}) => {
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
      <div
        style={{ backgroundColor, backgroundImage }}
        className={styles.header}
      >
        <div id={styles.logo}>
          <Link to="/">
            <img src={logo} alt="Logo" id={styles.logo} />
            <p id={styles.logoName}>uklearn</p>
          </Link>
        </div>
        {width >= 1060 ? (
          <>
            <div className={styles.links}>
              <Link to="/fflinks" title="Made for my Brother">
                <span>01.</span> fflinks
              </Link>
              <Link to="/honors">
                <span>02.</span> Honors
              </Link>
              <Link to="/contact">
                <span>03.</span> Contact
              </Link>
              <Link to="">
                <span>04.</span> Instructions
              </Link>
              <button>
                <svg
                  className={styles.change}
                  fill="#ffff"
                  height="100"
                  width="40px"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 457.32 457.32"
                >
                  <g>
                    <path
                      d="M228.66,112.692c-63.945,0-115.968,52.022-115.968,115.967c0,63.945,52.023,115.968,115.968,115.968
		s115.968-52.023,115.968-115.968C344.628,164.715,292.605,112.692,228.66,112.692z"
                    />
                    <path
                      d="M401.429,228.66l42.467-57.07c2.903-3.9,3.734-8.966,2.232-13.59c-1.503-4.624-5.153-8.233-9.794-9.683
		l-67.901-21.209l0.811-71.132c0.056-4.862-2.249-9.449-6.182-12.307c-3.934-2.858-9.009-3.633-13.615-2.077l-67.399,22.753
		L240.895,6.322C238.082,2.356,233.522,0,228.66,0c-4.862,0-9.422,2.356-12.235,6.322l-41.154,58.024l-67.4-22.753
		c-4.607-1.555-9.682-0.781-13.615,2.077c-3.933,2.858-6.238,7.445-6.182,12.307l0.812,71.132l-67.901,21.209
		c-4.641,1.45-8.291,5.059-9.793,9.683c-1.503,4.624-0.671,9.689,2.232,13.59l42.467,57.07l-42.467,57.07
		c-2.903,3.9-3.734,8.966-2.232,13.59c1.502,4.624,5.153,8.233,9.793,9.683l67.901,21.208l-0.812,71.132
		c-0.056,4.862,2.249,9.449,6.182,12.307c3.934,2.857,9.007,3.632,13.615,2.077l67.4-22.753l41.154,58.024
		c2.813,3.966,7.373,6.322,12.235,6.322c4.862,0,9.422-2.356,12.235-6.322l41.154-58.024l67.399,22.753
		c4.606,1.555,9.681,0.781,13.615-2.077c3.933-2.858,6.238-7.445,6.182-12.306l-0.811-71.133l67.901-21.208
		c4.641-1.45,8.291-5.059,9.794-9.683c1.502-4.624,0.671-9.689-2.232-13.59L401.429,228.66z M228.66,374.627
		c-80.487,0-145.968-65.481-145.968-145.968S148.173,82.692,228.66,82.692s145.968,65.48,145.968,145.967
		S309.147,374.627,228.66,374.627z"
                    />
                  </g>
                </svg>
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
};
export default Header;
