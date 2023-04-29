import { defineConfig } from 'vitest/config';

// eslint-disable-next-line import/no-default-export
export default defineConfig({
  test: {
    coverage: {
      reporter: ['text', 'html', 'json-summary'],
    },
  },
});
