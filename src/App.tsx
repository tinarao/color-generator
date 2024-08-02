import styles from "./App.module.css";
import Column from "./components/column/column";

function App() {
  return (
    <>
      <main className={styles.wrapper}>
        <Column />
        <Column />
        <Column />
        <Column />
        <Column />
      </main>
    </>
  );
}

export default App;
