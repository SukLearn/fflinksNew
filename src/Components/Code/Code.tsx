import { useState } from "react";
import "../../index.css";
import { CopyButton, ActionIcon, Tooltip, rem } from "@mantine/core";
import { IconCopy, IconCheck } from "@tabler/icons-react";

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

  return (
    <section
      className={`grid  ${gridCols} ${gap} ${marginT} border ${width} bg-[#212121] `}
    >
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
      <div>
        <CopyButton value={getCode()!} timeout={2000}>
          {({ copied, copy }) => (
            <Tooltip
              label={copied ? "Copied" : "Copy"}
              withArrow
              position="right"
            >
              <ActionIcon
                className={`${styles.copyButton} w-64`}
                color={copied ? "teal" : "gray"}
                variant="subtle"
                onClick={copy}
                size={50}
              >
                {copied ? (
                  <IconCheck size={rem(50)} />
                ) : (
                  <IconCopy size={rem(50)} style={{ stroke: "white" }} />
                )}
              </ActionIcon>
            </Tooltip>
          )}
        </CopyButton>
      </div>

      <div className={styles.code}>
        <pre className="text-lg">{getCode()}</pre>
      </div>
    </section>
  );
};
export default Code;
