import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state.
const initialState = {
  transactions: [],
};

// Creates context.
export const GlobalContext = createContext(initialState);

// Global provider component (wraps all other components in a state so that they have access to the global state).
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  // Actions that make calls to the reducer.
  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransaction(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
