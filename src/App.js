//shop-app
import React, { useState } from "react";
import Styles from "./App.module.css";
import Confetti from "react-confetti";

function App({ count }) {
  const [triggered, settriggered] = useState(false);
  const [popup, setPopup] = useState(false);

  const handlePopup = () => {
    setPopup(true);
    setTimeout(() => {
      setPopup(false);
    }, 1000);
  };

  const handleTrigger = () => {
    settriggered(true);
    setTimeout(() => {
      settriggered(false);
    }, 5000);
  };
  return (
    <>
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
      {popup && (
        <div className={Styles.popup}>
          <div className="card p-5 d-flex align-items-center justify-content-center">
            <h1 className="m-0">Iam from Shopapp</h1>
          </div>
        </div>
      )}

      <button className="btn btn-danger m-5" onClick={handlePopup}>
        popup
      </button>
    </>
  );
}

export default App;
