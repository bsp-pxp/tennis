// astro.config.mjs
import { defineConfig } from 'astro/config'

export default defineConfig({
    // Specify your project's root directory
    // This should be the directory containing your "src" and "static" folders
    // Default: '.'
    projectRoot: './frontend',
  
    // Define routes for your application
    // You can define custom routes and map them to components
    // For example, to map the "/about" route to the "about.astro" component:
    // routes: {
    //   "/about": "src/pages/about.astro"
    // }
    routes: {
      "/": "src/pages/index.astro",
      "/login": "src/pages/login.astro",
      "/point": "src/pages/point.astro",
        // Add more routes as needed
      
      
      // Add more routes as needed
    },
  
    // Configure your build settings
    buildOptions: {
      // Output directory for the built files
      // Default: 'dist'
      out: "./dist",
  
      // Set to true for minification and optimization in production
      // Default: false
      minify: true,
  
      // Specify a custom output directory for static assets
      // Default: 'static'
      static: "./public",
    },
  
    // Add plugins or configure existing ones
    // For example, to use the Astro "sitemap" plugin:
    // plugins: [
    //   "@astro/plugin-sitemap"
    // ]
    plugins: [],
  
    // Customize your project's environment variables
    // You can define environment variables that will be available in your components
    // For example, to define an API URL:
    // env: {
    //   API_URL: process.env.API_URL || "/api"
    // }
    env: {
      // Define your environment variables here
    },
  
    // Define other project-specific settings as needed
  });
  