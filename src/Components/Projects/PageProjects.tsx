import { Link } from "react-router-dom";
import "../../index.css";
import Header from "../Header/Header";
import styles from "./PageProjects.module.css";
export default function Projects() {
  const easyProjects = ["StopWatch"];
  return (
    <>
      <div className={`${styles.wrapper} bg-black text-white`}>
        <Header backgroundColor="black" />
        <section
          id="section1"
          className={`flex items-center justify-center  ${styles.snapItem}`}
        >
          <div>
            <p className={`text-8xl font-extrabold	text-gray-50	`}>
              turning ideas into <br />
              <span id={styles.creative}>creative solutions</span>
            </p>
          </div>
        </section>
        <section id="section2" className={`${styles.snapItem}`}>
          <div className={styles.dropDown}>
            <button className={styles.dropBtn}>Menu</button>
            <div className={styles.dropDownContent}>
              {easyProjects.map((project) => (
                <Link key={project} to={`${project}`}>
                  {project}
                </Link>
              ))}
            </div>
          </div>
        </section>
        {/* <section id="section3" className={`${styles.snapItem}`}>
          Section 3
        </section>
        <section id="section4" className={`${styles.snapItem}`}>
          Section 4
        </section>
        <section id="section5" className={`${styles.snapItem}`}>
          Section 5
        </section> */}
      </div>
    </>
  );
}

{
  /* <svg
  height="100"
  width="300"
  className={`${styles.linesSvg}`}
  xmlns="http://www.w3.org/2000/svg"
>
  <line
    x1="0"
    y1="0"
    x2="0"
    y2="400"
    className={`${styles.lines}`}
    pathLength={1}
  />
  Sorry, your browser does not support inline SVG.
</svg> */
}
