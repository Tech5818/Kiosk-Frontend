import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import tsconfig from "vite-tsconfig-paths"; // Setting Alias

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfig()],
});
