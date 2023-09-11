import { defineConfig, searchForWorkspaceRoot } from 'vite'

export default defineConfig({
  optimizeDeps: {
    include: ['./src/clientjs/**'],
  },
  server: {
    fs: {
      allow: [
        // search up for workspace root
        searchForWorkspaceRoot(process.cwd()),
        // your custom rules
        '../node_modules/**',
        './src/clientjs/**'
        
      ],
    },
  },
})