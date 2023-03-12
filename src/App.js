import React from "react";
import "./styles/App.css";
import "./styles/normalize.css";
import Alert from "./components/Alert";
import BalanceAmount from "./components/BalanceAmount";
import SocialMedia from "./components/SocialMedia";
import { FaCoins } from "react-icons/fa";

const App = () => {
  return (
    <>
      <h1 className="main-title">
        Expense Tracker <FaCoins />
      </h1>
      <Alert />
      <BalanceAmount />
      <SocialMedia />
    </>
  );
};

export default App;
