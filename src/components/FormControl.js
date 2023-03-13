import React, { useState, useEffect } from "react";
import List from "./List";
import AmountContainer from "./AmountContainer";
import { v4 as uuidv4 } from "uuid";

let transactionsData = localStorage.getItem("transactions")
  ? JSON.parse(localStorage.getItem("transactions"))
  : [];

const FormControl = ({ showAlert }) => {
  const [transactionName, setTransactionName] = useState("");
  const [amount, setAmount] = useState("");
  const [transactions, setTransactions] = useState(transactionsData);
  const [isEditing, setisEditing] = useState(false);
  const [editId, setEditId] = useState("");
  const [selectedOption, setSelectedOption] = useState("opt1");

  // calling local storage whenever list changes
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  // delete transaction
  const deleteTransaction = (id) => {
    const filteredItem = transactions.filter((item) => item.id !== id);
    setTransactions(filteredItem);
    showAlert({
      show: true,
      msg: "Transaction Deleted Successfully",
      type: "transaction",
    });
  };

  // edit transaction
  const editTransaction = (id) => {
    const itemToEdit = transactions.find(
      (transaction) => transaction.id === id
    );
    setisEditing(true);
    setEditId(id);
    setTransactionName(itemToEdit.title);
    setAmount(Number(itemToEdit.amount));
  };

  // radio button
  const handleRadio = (e) => {
    setSelectedOption(e.target.value);
    console.log(e.target.value);
  };

  // form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!transactionName || !amount) {
      showAlert({
        show: true,
        msg: "Please Enter A Transaction !",
        type: "transaction",
      });
    } else if (transactionName && amount && isEditing) {
      const editList = transactions.map((transaction) => {
        if (transaction.id === editId) {
          return {
            ...transaction,
            title: transactionName,
            amount: amount,
          };
        } else {
          return transaction;
        }
      });
      console.log(transactions.amount);
      setTransactions(editList);
      showAlert({
        show: true,
        msg: "Transaction Edited Successfully !",
        type: "transaction",
      });
      setTransactionName("");
      setAmount("");
      setisEditing(false);
      setEditId("");
    } else {
      const newTransaction = {
        id: uuidv4(),
        title: transactionName,
        amount: amount,
      };
      setTransactions([...transactions, newTransaction]);
      setTransactionName("");
      setAmount("");
      showAlert({
        show: true,
        msg: "Transaction Added Successfully !",
        type: "transaction",
      });
    }
  };

  return (
    <>
      <AmountContainer transactions={transactions} />
      {transactions.length > 0 && (
        <div className="history-container">
          <div className="history-title">
            <h2>History</h2>
          </div>
          <List
            transactions={transactions}
            deleteTransaction={deleteTransaction}
            editTransaction={editTransaction}
          />
        </div>
      )}

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
          value={transactionName}
          onChange={(e) => setTransactionName(e.target.value)}
          autoComplete="off"
          required
        />
        <label htmlFor="amount-input">Amount</label>
        <input
          type="number"
          id="amount-input"
          placeholder="Enter Amount (₹)"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          name="money"
          required
        />
        <button className="button" type="submit">
          {isEditing ? "Update Transaction" : "Add Transaction"}
        </button>
      </form>
    </>
  );
};

export default FormControl;
