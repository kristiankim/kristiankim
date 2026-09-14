import { defineCliConfig } from 'sanity/cli';

export default defineCliConfig({
  api: {
    projectId: 'm63s8wwp',
    dataset: 'production',
  },
  vite: {
    publicDir: false,
  },
  deployment: {
    appId: 'dj2zliy2hvo39seb2obaw7g7',
  },
});
