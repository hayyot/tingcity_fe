module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  extends: [
    'eslint:recommended',
    'airbnb',
    './.eslintrc-auto-import.json',
    'plugin:@typescript-eslint/recommended',
    'plugin:vue/vue3-recommended',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'vue',
  ],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  globals: {
    uni: true,
    wx: true,
  },
  rules: {
    // 从不添加分号
    semi: ['error', 'never'],
    // 箭头函数可以使用空函数
    '@typescript-eslint/no-empty-function': ['error', {
      allow: ['arrowFunctions'],
    },
    ],
    // 允许vue文件名使用单个单词
    'vue/multi-word-component-names': 'off',
    // 部分文件引入忽略后缀名
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        js: 'never',
        jsx: 'never',
        ts: 'never',
        tsx: 'never',
      },
    ],
    // 可以引入开发环境模块
    'import/no-extraneous-dependencies': ['error', {
      devDependencies: true,
    }],
  },
}
