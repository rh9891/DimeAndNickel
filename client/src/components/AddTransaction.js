import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const AddTransaction = () => {
  const [text, setText] = useState("");
  const [amount, setAmount] = useState(0);

  const { addTransaction } = useContext(GlobalContext);

  const onSubmit = (event) => {
    event.preventDefault();

    const newTransaction = {
      id: Math.floor(Math.random() * 100000000),
      text: text,
      amount: +amount,
    };

    addTransaction(newTransaction);
  };

  return (
    <>
      <h3>Add Transaction</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Description</label>
          <input
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
            placeholder="Enter description for transaction"
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount* </label>
          <input
            type="number"
            value={amount}
            onChange={(event) => setAmount(event.target.value)}
            placeholder="Enter amount of transaction"
          />
        </div>
        <button className="btn">Add Transaction</button>
      </form>
      <p className="additional-note">
        *Negative amounts are expenses. Positive amounts are income.
      </p>
      <div id="snackbar">Please add a description and amount.</div>
    </>
  );
};
