module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      url: [ "https://www.cwberry.com" ],    
    },
    assert: {
      preset: "lighthouse:recommended"
    },
    upload: {
      target: "temporary-public-storage"
    }
  },
};
