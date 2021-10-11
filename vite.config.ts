import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import styleImport from 'vite-plugin-style-import'

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, __dirname)

  const api = env.VITE_API_ADDRESS || ''
  const port = Number(env.VITE_PORT)

  return {
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src')
      }
    },
    plugins: [
      vue()
      // styleImport({
      //   libs: [
      //     {
      //       libraryName: 'vant',
      //       esModule: true,
      //       resolveStyle: (name) => `vant/es/${name}/style`
      //     }
      //   ]
      // })
    ],
    server: {
      port: port,
      open: true, // 开发服务器启动时自动打开浏览器
      proxy: {
        '/api': {
          target: api,
          changeOrigin: true,
          ws: true,
          rewrite: (path) => path.replace(/^\/api/, '/')
        }
      }
    }
  }
})
