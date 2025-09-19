import { defineConfig } from 'vitest/config';
import dts from 'vite-plugin-dts';
import react from '@vitejs/plugin-react';

export default defineConfig({
  build: {
    lib: {
      entry: './src/index.ts', // Specifies the entry point for building the library.
      name: 'PrimaDS', // Sets the name of the generated library.
      fileName: 'index', // Generates the output file name.
      formats: ['es'], // Only ES modules for modern React projects.
    },
    rollupOptions: {
      external: (id) => {
        // External peer dependencies
        if (
          [
            'react',
            'react-dom',
            'react/jsx-runtime',
            '@emotion/react',
            '@emotion/styled',
          ].includes(id)
        ) {
          return true;
        }
        // External testing libraries that shouldn't be bundled
        if (
          id.includes('@testing-library/') ||
          id.includes('vitest') ||
          id.includes('jsdom')
        ) {
          return true;
        }
        // External any peer dependency that starts with these patterns
        if (id.startsWith('react/') || id.startsWith('@emotion/')) {
          return true;
        }
        return false;
      }, // Defines external dependencies for Rollup bundling.
      onwarn: (warning, warn) => {
        // Suppress warnings about external modules
        if (warning.code === 'UNRESOLVED_IMPORT') return;
        warn(warning);
      },
    },
    sourcemap: true, // Generates source maps for debugging.
    emptyOutDir: true, // Clears the output directory before building.
  },
  plugins: [
    dts({
      insertTypesEntry: true,
    }),
    react({
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
  ],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
  },
  assetsInclude: ['/sb-preview/runtime.js'],
});
