// @description Gets all transactions.
// @route GET request to /api/v1/transactions.
// @access Public route.
exports.getTransactions = (req, res, next) => {
  res.send("GET transactions");
};

// @description Adds a transaction.
// @route POST request to /api/v1/transactions.
// @access Public route.
exports.addTransaction = (req, res, next) => {
  res.send("POST transaction");
};

// @description Deletes a transaction.
// @route DELETE request to /api/v1/transactions/:id.
// @access Public route.
exports.deleteTransaction = (req, res, next) => {
  res.send("DELETE transaction");
};
