import { defineConfig } from 'cypress'

export default defineConfig({
  e2e: {
    baseUrl: 'http://localhost:9000',
    specPattern: 'ui/cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile: 'ui/cypress/support/e2e.ts',
    fixturesFolder: 'ui/cypress/fixtures',
    screenshotsFolder: 'ui/cypress/screenshots',
    videosFolder: 'ui/cypress/videos',
    viewportWidth: 1280,
    viewportHeight: 720,
    video: true,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 10000,
    requestTimeout: 10000,
    responseTimeout: 10000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  component: {
    devServer: {
      framework: 'vue',
      bundler: 'vite',
    },
  },
})