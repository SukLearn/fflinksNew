import styles from "./fflinks.module.css";
import { useState, FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "./Components/Footer/footer";
export default function Fflinks() {
  const [display, setDisplay] = useState("block");
  const [inputValue, setInputValue] = useState("");

  const navigate = useNavigate();

  const handleShow = async () => {
    navigate("/show");
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
  const showHide = () => {
    const hide = display === "block" ? "none" : "block";
    setDisplay(hide);
  };

  const handleDelete = async () => {
    try {
      const response = await axios.delete(
        "https://suk-learn-api.vercel.app/api/fflinks/DELETE"
      );
      console.log(response.data);
      window.location.reload();
    } catch (err) {
      console.error("Error occurred", err);
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
          <div className={styles.bottom}>
            <button type="button" onClick={handleShow}>
              Show
            </button>
            <button type="button" onClick={handleDelete}>
              Clear
            </button>
          </div>
        </form>
        <button id={styles.hideShow} onClick={showHide}>
          {display === "block" ? "Hide" : "Show"}
        </button>
      </div>
      <img
        style={{ display: display }}
        src="assets\images\test.avifs"
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
