const Transaction = require("../models/Transaction");

// @description Gets all transactions.
// @route GET request to /api/v1/transactions.
// @access Public route.
exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();

    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (error) {
    return res.send(500).json({
      success: false,
      error: "An error has occurred.",
    });
  }
};

// @description Adds a transaction.
// @route POST request to /api/v1/transactions.
// @access Public route.
exports.addTransaction = async (req, res, next) => {
  res.send("POST transaction");
};

// @description Deletes a transaction.
// @route DELETE request to /api/v1/transactions/:id.
// @access Public route.
exports.deleteTransaction = async (req, res, next) => {
  res.send("DELETE transaction");
};
