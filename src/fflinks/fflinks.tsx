import styles from "./fflinks.module.css";
import { useState, FormEvent } from "react";
import axios from "axios";
import Footer from "./Components/Footer/footer";
export default function Fflinks() {
  const [display, setDisplay] = useState("block");
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://suk-learn-bzl4l7ns2-kuramas-projects.vercel.app/api/submit",
        {
          methid: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ string: inputValue }),
        }
      );
      console.log("Form submitted with response:", response.data);
    } catch (err) {
      console.error("Error submitting form", err);
    }
  };

  const handlePasterFromClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setInputValue(text);
      handleSubmit;
    } catch (err) {
      console.error("Failed to read clipboard contents: ", err);
    }
  };
  const showHide = () => {
    const hide = display === "block" ? "none" : "block";
    setDisplay(hide);
  };

  return (
    <div className={styles.body}>
      <div className={styles.buttons}>
        <form onSubmit={handleSubmit}>
          <button
            id={styles.top}
            type="button"
            onClick={handlePasterFromClipboard}
          >
            ClipBoard
          </button>
          <input
            type="text"
            name="text-holder"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Input Text Here"
            className={styles.input_field}
          />
          <button id={styles.middle} type="submit" onClick={handleSubmit}>
            Paste
          </button>
          <div className={styles.bottom}>
            <button>Show</button>
            <button>Clear</button>
          </div>
        </form>
        <button id={styles.hideShow} onClick={showHide}>
          {display === "block" ? "Hide" : "Show"}
        </button>
      </div>
      <img
        style={{ display: display }}
        src="assets\test.webp"
        alt="The Great Gatsby Gives Toast"
        id={styles.great}
      />
      <div className={styles.sign}>
        <span className={styles.fastFlicker}>F</span>F
        <span className={styles.flicker}>LI</span>N
        <span className={styles.flicker}>K</span>S
      </div>
      <Footer />
    </div>
  );
}
