//shop-app
import React, { useState } from "react";
import Styles from "./App.module.css";
import Confetti from "react-confetti";

function App({ count }) {
  const [triggered, settriggered] = useState(false);

  const handleTrigger = () => {
    settriggered(true);
    setTimeout(() => {
      settriggered(false);
    }, 5000);
  };
  return (
    <div className={Styles.main}>
      <div className={Styles.box}>
        <h1 className="m-0">Shop App</h1>
        <p className="m-0">Welcome to the Shop!</p>
        <button className="btn btn-info" onClick={handleTrigger}>
          🎉
        </button>
        {triggered && <Confetti />}

        <div className="d-flex align-items-center justify-content-center gap-5">
          {count}
        </div>
      </div>
    </div>
  );
}

export default App;
