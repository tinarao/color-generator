import styles from "./column.module.css";
import { useEffect, useState } from "react";
import { Color } from "../../color-generator";

import Reload from "../../assets/reload.svg";

const Column = () => {
  const [currentColor, setCurrentColor] = useState<string>("#ffffff");

  const generateColor = () => {
    const color = Color.generate();
    setCurrentColor(color);
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(currentColor);
  };

  useEffect(() => {
    generateColor();
  }, []);

  return (
    <div
      className={styles.column}
      style={{ width: "full", background: currentColor }}
    >
      <div className={styles.buttons}>
        <button
          onClick={copyToClipboard}
          title="Скопировать"
          className={styles.color_label}
        >
          {currentColor}
        </button>
        <button className={styles.color_label} onClick={generateColor}>
          <img src={Reload} width={25} />
        </button>
      </div>
    </div>
  );
};

export default Column;
