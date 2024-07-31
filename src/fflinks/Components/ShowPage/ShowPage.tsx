import { useEffect, useState } from "react";
import Modal from "react-modal";
import styles from "./ShowPage.module.css";
import axios from "axios";
import Author from "../../../Components/Author/author";
import Loading from "../LoadingPage/Loading";
import HelpModal from "../HelpModal/HelpModal";
interface DataItem {
  id: number;
  input_value: string;
}

export default function ShowPage() {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [copiedIndex, setCopiedIndex] = useState(-1);
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal(index: number) {
    setIsOpen(true);
    setCopiedIndex(index);
  }

  function closeModal() {
    setIsOpen(false);
    setCopiedIndex(-1);
  }
  function trimming(text: string) {
    if (text.length >= 50) {
      return text.substring(0, 50) + "...";
    } else {
      return text;
    }
  }

  const copyToClipBoard = (text: string, index: number) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopiedIndex(index);
        setTimeout(() => setCopiedIndex(-1), 2000);
      })
      .catch((err) => {
        console.error("Failed to copy Text Due to: ", err);
      });
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://suk-learn-api.vercel.app/api/fflinks/GET"
        );
        console.log("API Response:", response.data);

        if (response.data && Array.isArray(response.data.data)) {
          setData(response.data.data);
        } else {
          throw new Error("Data format is not an array");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <>
        <Loading />
      </>
    );

  return (
    <>
      <div className={styles.showBd}>
        <div className={styles.truth}>
          <span className={styles.show}>
            <span>Show Data</span>
          </span>
        </div>
        <div className={styles.tableContainer}>
          <table>
            <thead>
              <tr>
                <th id={styles.startTh}>ID</th>
                <th className={styles.otherTh}>Value</th>
                <th className={styles.otherTh}>Copy</th>
                <th id={styles.endTh}>View Full</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{trimming(item.input_value)}</td>
                  <td>
                    <button
                      className={styles.copyToClipboard}
                      onClick={() => copyToClipBoard(item.input_value, index)}
                    >
                      {copiedIndex === index ? <span>&#9989;</span> : "Copy"}
                    </button>
                  </td>
                  <td>
                    <button
                      className={styles.modalButton}
                      onClick={() => openModal(index)}
                    >
                      View All
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {modalIsOpen && copiedIndex !== -1 && (
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            contentLabel="Content"
          >
            <div className={styles.content}>
              {data[copiedIndex].input_value}
            </div>
          </Modal>
        )}

        <Author />
        <HelpModal />
      </div>
    </>
  );
}
