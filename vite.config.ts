/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './config/setupTests.ts',
        coverage: {
            enabled: true,
            src: ['src/'],
            reporter: ['lcov', 'json', 'json-summary', 'html'],
        },
    },
});
