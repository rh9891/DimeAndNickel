import React from "react";

export const AddTransaction = () => {
  return (
    <>
      <h3>Add Transaction</h3>
      <form>
        <div className="form-control">
          <label htmlFor="text">Description</label>
          <input type="text" placeholder="Enter description for transaction" />
        </div>
        <div className="form-control">
          <label htmlFor="amount">Amount* </label>
          <input type="number" placeholder="Enter amount of transaction" />
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
