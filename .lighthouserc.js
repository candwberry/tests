module.exports = {
  ci: {
    collect: {
      url: [
        "https://www.cwberry.com"
      ],
      numberOfRuns: 1
    },
    assert: {
      preset: "lighthouse:recommended"
    },
    upload: {
      target: "temporary-public-storage"
    }
  },
};