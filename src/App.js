import React, { useState } from "react";
import "./styles/App.css";
import "./styles/normalize.css";
import Alert from "./components/Alert";
import AmountContainer from "./components/AmountContainer";
import SocialMedia from "./components/SocialMedia";
import { FaCoins } from "react-icons/fa";

const App = () => {
  // notification
  const [alertMsg, setAlertMsg] = useState({
    show: true,
    type: "",
    msg: "",
  });

  return (
    <>
      <h1 className="main-title">
        Expense Tracker <FaCoins />
      </h1>
      {alertMsg.show && <Alert {...alertMsg} showAlert={setAlertMsg} />}
      <AmountContainer showAlert={setAlertMsg} />
      <SocialMedia />
    </>
  );
};

export default App;
