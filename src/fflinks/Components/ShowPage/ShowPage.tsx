import { useEffect, useState } from "react";
import styles from "./ShowPage.module.css";
import axios from "axios";

interface DataItem {
  id: number;
  input_value: string;
}

function trimming(text: string) {
  if (text.length >= 50) {
    return text.substring(0, 50) + "...";
  } else {
    return text;
  }
}

export default function ShowPage() {
  const [data, setData] = useState<DataItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [text, setText] = useState("");
  const [copied, setCopied] = useState(false);

  const copyToClipBoard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
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
        <div className={styles.loaderBody}>
          <img
            className={styles.loadingIMG}
            src="https://i.pinimg.com/736x/62/7f/ea/627feabb3ce71527b2ecdf0a6204e661.jpg"
            alt="MEME"
          />
          <div className={styles.loaders}>
            <div className={styles.loader}></div>
            <div className={styles.loaderDifferent}></div>
            <div className={styles.loader}></div>
          </div>
        </div>
      </>
    );

  return (
    <>
      <div className={styles.showBd}>
        <h1 className={styles.show}>Show Data</h1>
        <div className={styles.table}>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Input Value</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{trimming(item.input_value)}</td>
                  <td>Copy</td>
                  <button onClick={() => copyToClipBoard(item.input_value)}>
                    Copy to Clipboard
                  </button>
                  {copied && <span>Copied!</span>}

                  <td>{/* <button onClick={openModal}>View All</button> */}</td>
                </tr>
              ))}
              <tr>
                <td>asdasdasdasdasdasdasdasdasdasdasdasdasdasdasd</td>
                <td>asdasdasd</td>
              </tr>
            </tbody>
          </table>
          <div>
            <textarea value={text} onChange={(e) => setText(e.target.value)} />
          </div>
        </div>
      </div>
    </>
  );
}
