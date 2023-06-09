import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    resolve: {
        //设置别名
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@image': path.resolve(__dirname, 'src/assets/image'),
            '@style': path.resolve(__dirname, 'src/assets/style')
        }
    },
    plugins: [vue()],
    server: {
        port: 8001, //启动端口
        hmr: true,
        // 设置代理
        proxy: {
            '/api': {
                target: 'your https address',
                changeOrigin: true,
                rewrite: (path: string) => path.replace(/^\/api/, '')
            }
        }
    }
});
