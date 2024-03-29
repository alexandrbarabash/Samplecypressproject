import {defineConfig} from 'cypress';
import {tagify} from 'cypress-tags';

export default defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    video: true,
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    ignoreVideos: false,
  },

  e2e: {
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      require('cypress-localstorage-commands/plugin')(on, config);
      on('file:preprocessor', tagify(config));
      return config;
    },
    baseUrl: 'http://localhost:4200',
    specPattern: 'cypress/e2e',
  },
  viewportWidth: 1920,
  viewportHeight: 1080,
  videoCompression: false,
  pageLoadTimeout: 30000,
  defaultCommandTimeout: 10000,
  requestTimeout: 15000,
  responseTimeout: 30000,
  taskTimeout: 10000,
  chromeWebSecurity: false,
  // waitForAnimations: false,
  experimentalMemoryManagement: true,
  downloadsFolder: 'cypress/fixtures/files/test-data',

  component: {
    devServer: {
      framework: 'angular',
      bundler: 'webpack',
    },
  },
});
