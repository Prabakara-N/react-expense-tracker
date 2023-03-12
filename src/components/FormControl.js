import React, { useState } from "react";

const FormControl = ({
  balance,
  setBalance,
  income,
  setIncome,
  expense,
  setExpense,
}) => {
  const [transaction, setTransaction] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedOption, setSelectedOption] = useState("opt1");

  // radio button
  const handleRadio = (e) => {
    setSelectedOption(e.target.value);
  };

  // form submit
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <h2 className="input-title">Add New Transaction</h2>

      <form className="input-container" onSubmit={handleSubmit}>
        {/* <!-- radio --> */}

        <div className="radio-container">
          <div className="income-radio">
            <input
              type="radio"
              id="income-radio"
              name="radio"
              value="opt1"
              checked={selectedOption === "opt1"}
              onChange={handleRadio}
            />
            <label htmlFor="income-radio" className="income-radio">
              Income
            </label>
          </div>
          <div className="expense-radio">
            <input
              type="radio"
              id="expense-radio"
              name="radio"
              value="opt2"
              checked={selectedOption === "opt2"}
              onChange={handleRadio}
            />
            <label htmlFor="expense-radio" className="expense-radio">
              Expense
            </label>
          </div>
        </div>

        <label htmlFor="transaction">Transaction</label>
        <input
          style={{ marginBottom: "10px" }}
          type="text"
          id="transaction"
          placeholder="Enter Transaction..."
          name="rents"
          value={transaction}
          onChange={(e) => setTransaction(e.target.value)}
          autoComplete="off"
          required
        />
        <label htmlFor="amount-input">Amount</label>
        <input
          type="number"
          id="amount-input"
          placeholder="Enter Amount (₹)"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          name="money"
          required
        />
        <button className="button" type="submit">
          Add Transaction
        </button>
      </form>
    </>
  );
};

export default FormControl;
