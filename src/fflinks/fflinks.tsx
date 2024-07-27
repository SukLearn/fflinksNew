import styles from "./fflinks.module.css";
import { useState, FormEvent } from "react";
import axios from "axios";
import Footer from "./Components/Footer/footer";
import Flicker from "./Components/Flicker/Flicker";
import ShowDelete from "./Components/Button/Show-Delete/Show-Delete";
import Hide from "./Components/Button/Hide/Hide";
import Gatsby from "./Components/Button/Hide/GatsbyImg/Gatsby";
export default function Fflinks() {
  const [inputValue, setInputValue] = useState("");
  const [display, setDisplay] = useState("block");

  const showHide = () => {
    const hide = display === "block" ? "none" : "block";
    setDisplay(hide);
  };
  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const response = await axios.post(
        "https://suk-learn-api.vercel.app/api/fflinks/POST",
        { text: inputValue },
        { headers: { "Content-Type": "application/json" } }
      );
      console.log("Form submitted with response:", response.data);
      window.location.reload();
    } catch (err) {
      console.error("Error submitting form", err);
    }
  };

  const handlePasterFromClipboard = async () => {
    try {
      const text = await navigator.clipboard.readText();
      setInputValue(text);
      const simulatedEvent = new Event("submit", {
        bubbles: true,
        cancelable: true,
      });

      handleSubmit(simulatedEvent as unknown as FormEvent);
    } catch (err) {
      console.error("Failed to read clipboard contents: ", err);
    }
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
          <button id={styles.middle} type="submit">
            Paste
          </button>
          <ShowDelete />
        </form>
        <Hide display={display} showHide={showHide} />
      </div>
      <Gatsby display={display} />
      <Flicker />
      <Footer />
    </div>
  );
}
