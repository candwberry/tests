module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      url: [
        {
          url: "https://www.cwberry.com",
          settings: {
            formFactor: "mobile",
            screenEmulation: { mobile: true, disabled: false },
          },
        },
        {
          url: "https://www.cwberry.com",
          settings: {
            formFactor: "desktop",
            screenEmulation: { mobile: false, disabled: false },
          },
        },
      ],
    },
    assert: {
      preset: "lighthouse:recommended"
    },
    upload: {
      target: "temporary-public-storage"
    }
  },
};
