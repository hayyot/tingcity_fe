import { defineConfig } from 'vite'
import uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [uni(),
    AutoImport({
    // targets to transform
      include: [
        /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
        /\.vue$/, /\.vue\?vue/, // .vue
        /\.md$/, // .md
      ],
      imports: [
        'vue',
        'uni-app',
        'pinia',
      ],
      dts: 'src/types/auto-imports.d.ts',
      eslintrc: {
        enabled: true,
      },
    }),
  ],
  resolve: {
    // 配置路径别名
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  // 环境变量配置路径
  envDir: 'src/env',
})
