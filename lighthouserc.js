module.exports = {
    ci: {
      collect: {
        startServerCommand: 'npm run start',
        url: ['http://localhost:3000'],
        numberOfRuns: 1
      },
      // assert: {
      //   preset: "lighthouse:no-pwa",
      //   bypass: "off",
      //   "unminified-javascript": "off", 
      //   "unsized-images": "off",
      //   "unused-javascript": "off",
      // }
      upload: {
        target: 'temporary-public-storage'
      },
    },
  };