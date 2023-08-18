import { defineConfig } from 'vitest/config';

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  test: {
    coverage: {
      exclude: ['src/testing'],
      reporter: ['text', 'html', 'json-summary'],
    },
  },
});
