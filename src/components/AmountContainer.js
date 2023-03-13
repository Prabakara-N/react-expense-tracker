import React, { useState } from "react";
import FormControl from "./FormControl";

const AmountContainer = ({ showAlert }) => {
  const [balance, setBalance] = useState("0.00");
  const [income, setIncome] = useState("0.00");
  const [expense, setExpense] = useState("0.00");

  return (
    <>
      {/* balance amount */}
      <div className="balance-container">
        <h2 className="balance-title">Your Balance :</h2>
        <h3 className="balance amount-zero" id="balance">
          ₹{balance}
        </h3>
      </div>

      {/* income & expense */}
      <div className="output-container">
        <div className="income-container">
          <h2 className="income">INCOME</h2>
          <h3 className="income-amt amount-zero" id="income-amt">
            ₹{income}
          </h3>
        </div>
        <div className="expense-container">
          <h2 className="expense">EXPENSE</h2>
          <h3 className="expense-amt amount-zero" id="expense-amt">
            ₹{expense}
          </h3>
        </div>
      </div>

      <FormControl
        setBalance={setBalance}
        setIncome={setIncome}
        setExpense={setExpense}
        showAlert={showAlert}
      />
    </>
  );
};

export default AmountContainer;
