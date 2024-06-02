//shop-app
import React from "react";
import Styles from "./App.module.css";

function App({ count }) {
  return (
    <div className={Styles.main}>
      <div className={Styles.box}>
        <h1>Shop App </h1>
        <p>Welcome to the shop! yes iam here</p>
        <div className="d-flex gap-5">
          <p>items in the cart : </p> <p> {count || "  no Items"}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
