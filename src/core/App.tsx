import { Router } from "core";
import { Header, Footer } from "static";
import "theme/reset.css";

import styles from "theme/main.module.scss";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.app__page}>
        <Router />
      </div>
      <Footer />
    </div>
  );
}

export default App;
