module.exports = {
    ci: {
      collect: {
        startServerCommand: 'npm run start',
        url: ['http://localhost:3000'],
        numberOfRuns: 1
      },
      assert: {
        preset: "lighthouse:no-pwa"
      }
      // upload: {
      //   target: 'temporary-public-storage'
      // },
    },
  };