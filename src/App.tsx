import styles from "./App.module.css";
import { useEffect, useState } from "react";

function App() {
  const [currentColor, setCurrentColor] = useState<string>("#ffffff");

  const generateColor = () => {
    const arr: Array<string> = ["#"];

    for (let i = 0; i < 3; ++i) {
      let code = Math.floor(Math.random() * 100).toString();
      if (code.length !== 2) {
        const flipcoin = Math.floor(Math.random() * 100);
        if (flipcoin % 2 === 0) code += "f";
        else code += "0";
      }

      arr.push(code);
    }

    const color = arr.join("");
    setCurrentColor(color);
  };

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(currentColor);
  };

  useEffect(() => {
    document.title = "Генератор цветов";
    generateColor();
  }, []);

  return (
    <>
      <main className={styles.wrapper}>
        <div
          style={{ width: "full", height: "75%", background: currentColor }}
        />

        <div className={styles.panel}>
          <h1>{currentColor}</h1>
          <div className={styles.buttons}>
            <button onClick={generateColor} className={styles.button}>
              Хочу другой цвет
            </button>
            <button
              style={{ marginLeft: "0.5rem" }}
              onClick={copyToClipboard}
              className={styles.button}
            >
              Скопировать
            </button>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
