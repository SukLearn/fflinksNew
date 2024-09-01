import "../../index.css";
import Header from "../Header/Header";
import "./PageProjects.css";
export default function Projects() {
  return (
    <>
      <Header backgroundColor="black" />
      <section className="flex items-center justify-center bg-black section-1">
        {/* <svg
          height="100"
          width="300"
          className="lines-svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="0"
            y1="0"
            x2="0"
            y2="400"
            className="lines"
            pathLength={1}
          />
          Sorry, your browser does not support inline SVG.
        </svg> */}
        <div>
          <p className="text-8xl font-extrabold	text-gray-50	">
            turning ideas into <br />{" "}
            <span id="creative">creative solutions</span>
          </p>
          {/* <div className="animation">asdasd</div> */}
        </div>
      </section>
      {/* <div className="snap-container">
        <section className="snap-item">Section 1</section>
        <section className="snap-item">Section 2</section>
        <section className="snap-item">Section 3</section>
        <section className="snap-item">Section 4</section>
      </div> */}
    </>
  );
}
