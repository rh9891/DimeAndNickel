import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

// Initial state.
const initialState = {
  transactions: [
    { id: 1, text: "Flowers", amount: -20 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Smoothie", amount: -10 },
    { id: 4, text: "Tickets", amount: 150 },
  ],
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

  return (
    <GlobalContext.Provider
      value={{ transactions: state.transactions, deleteTransaction }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
