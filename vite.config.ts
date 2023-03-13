import { CoverageReporter } from 'vitest';
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    coverage: {
      reporter: getReporter(process.env.NODE_ENV),
    },
  },
});

function getReporter(environment: string | undefined): CoverageReporter[] {
  switch (environment) {
    case 'CI':
      return ['text', 'json-summary'];
    default:
      return ['text', 'html'];
  }
}
