import { useNavigate } from "react-router-dom";
import styles from "./Show-Delete.module.css";
import axios from "axios";

export default function ShowDelete() {
  const navigate = useNavigate();

  const handleShow = async () => {
    navigate("show");
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
    <>
      <div className={styles.bottom}>
        <button type="button" onClick={handleShow}>
          Show
        </button>

        <button type="button" onClick={handleDelete}>
          Clear
        </button>
      </div>
    </>
  );
}
