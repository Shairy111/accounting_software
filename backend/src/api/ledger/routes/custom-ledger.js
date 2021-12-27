module.exports = {
  routes: [
    {
      // Path defined with a URL parameter
      method: "GET",
      path: "/ledger/work",
      handler: "ledger.index",
    },
  ],
};
