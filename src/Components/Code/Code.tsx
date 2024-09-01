import { useEffect, useState } from "react";
import "../../index.css";

import styles from "./Code.module.css";
interface ModalProps {
  gridCols: string;
  marginT: string;
  width: string;
  gap?: string;
  tsx: string;
  TsxText: string;
  css: string;
  CssText: string;
  other?: string;
  OtherText?: string;
}

const Code: React.FC<ModalProps> = ({
  gridCols,
  marginT,
  width,
  gap,
  tsx,
  TsxText,
  css,
  CssText,
  other,
  OtherText,
}) => {
  const [activeTab, setActiveTab] = useState<"tsx" | "css" | "other">("tsx");
  const [copy, setCopy] = useState(false);

  const getCode = () => {
    switch (activeTab) {
      case "tsx":
        return TsxText;
      case "css":
        return CssText;
      case "other":
        return OtherText;
      default:
        return "IDK HOW U DID THIS";
    }
  };

  const handleCopy = () => {
    const text = getCode() as string;
    navigator.clipboard.writeText(text).then(() => setCopy(true));
    setCopy(true);
  };

  useEffect(() => {
    if (copy) {
      const timer = setTimeout(() => setCopy(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copy]);

  return (
    <section className={`grid  ${gridCols} ${gap} ${marginT} border ${width}`}>
      <div>
        <button
          onClick={() => setActiveTab("tsx")}
          className="w-36 py-2 text-xl font-bold border-2 border-white	hover:bg-gray-500 "
        >
          {tsx}
        </button>
      </div>
      {other ? (
        <div>
          <button
            onClick={() => setActiveTab("other")}
            className="w-36 py-2 text-xl font-bold border-2 border-white	hover:bg-gray-500 "
          >
            Tsx(Old)
          </button>
        </div>
      ) : (
        ""
      )}
      <div>
        <button
          onClick={() => setActiveTab("css")}
          className="w-36 py-2 text-xl font-bold border-2 border-white	hover:bg-gray-500 "
        >
          {css}
        </button>
      </div>
      <div className="">
        <button
          className={`${styles.copy} w-36 py-2 text-xl font-bold border-2 border-white	hover:bg-gray-500`}
          onClick={handleCopy}
        >
          {copy ? <span>&#9989;</span> : "Copy"}
        </button>
      </div>

      <div className={styles.code}>
        <pre className="text-lg">{getCode()}</pre>
      </div>
    </section>
  );
};
export default Code;
