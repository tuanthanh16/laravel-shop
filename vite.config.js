import { defineConfig } from "vite";
import react from '@vitejs/plugin-react';
import laravel from "laravel-vite-plugin";

export default defineConfig({
    plugins: [
        laravel({
            input: [
                "resources/css/app.css",
                "resources/js/app.js",
                "resources/css/bootstrap.css",
                "resources/css/cart.css",
                "resources/js/shop.jsx",
            ],
            refresh: true,
        }),
        react()
    ],
});
