import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
        proxy: 'localhost:8000',
    },

    plugins: [vue()],
    build: {
        rollupOptions: {
            external: [],
            // https://rollupjs.org/guide/en/#big-list-of-options
        },
    },
})
