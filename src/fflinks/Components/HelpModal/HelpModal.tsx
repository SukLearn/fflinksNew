import { useEffect, useState } from "react";
import Modal from "react-modal";
import styles from "./HelpModal.module.css";

export default function HelpModal() {
  const [help, setHelp] = useState(false);
  const [keySequence, setKeySequence] = useState<string[]>([]);

  function closeModal() {
    setHelp(false);
    console.log(keySequence);
  }
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const target = event.target as HTMLElement;
      if (
        target.tagName.toLowerCase() === "input" ||
        target.tagName.toLowerCase() === "textarea"
      ) {
        return;
      }
      setKeySequence((prevSequence) => {
        const newSequence = [...prevSequence, event.key.toLowerCase()];
        const sequenceString = newSequence.join("");
        if (sequenceString.includes("fflinks")) {
          window.open("https://fflinks.net");
          return [];
        } else if (sequenceString.includes("suk")) {
          window.location.replace("https://suklearn.com");
        }
        return newSequence;
      });
      if (event.key === "h" || event.key === "H") {
        setHelp(true);
      }
    };
    window.addEventListener("keyup", handleKeyDown);
    return () => {
      window.removeEventListener("keyup", handleKeyDown);
    };
  });
  return (
    <>
      <Modal
        isOpen={help}
        onRequestClose={closeModal}
        contentLabel="Content"
        ariaHideApp={false}
      >
        <div className={styles.container}>
          <div className={styles.truth}>
            <span className={styles.show}>
              <span>Welcome To Upgraded Fflinks</span>
            </span>
          </div>
          <br /> <br />
          <br />
          <p className={styles.content}>
            <span>The Creator is </span>
            <span id={styles.author}>Luka Tarkhnishvili</span>
          </p>
          <br />
          <p id={styles.text}>
            Here are some helpful key sequences to get you started: <br />
            unfortunately for now we only have developed "h" that stands for
            help and key sequence are "fflinks" and "suk"
          </p>
        </div>
      </Modal>
    </>
  );
}
