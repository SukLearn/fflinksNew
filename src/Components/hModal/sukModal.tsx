import { useEffect, useState } from "react";
import Modal from "react-modal";
import "../../index.css";
import styles from "./sukModal.module.css";
interface ModalProps {
  title: string;
  text: string;
  problems: string;
  front: string;
  back?: string;
}
const SukModal: React.FC<ModalProps> = ({
  title,
  text,
  problems,
  front,
  back = "N/A",
}) => {
  const [help, setHelp] = useState(false);
  const [keySequence, setKeySequence] = useState<string[]>([]);

  function closeModal() {
    setHelp(false);
    setKeySequence([]);
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
        setKeySequence([]); //if i want to check wat user was clicking comment this line
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
        <div className={styles.modal}>
          <h1 className={styles.title}>{title}</h1>

          <div className={styles.content}>
            <p>{text}</p>
            <p>
              technologies used in this project are: <br />
              front:{front} <br />
              back:{back}
            </p>
            <br />
            <p>{problems}</p>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SukModal;
