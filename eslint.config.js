import vue from 'eslint-plugin-vue'
import vueEslintParser from 'vue-eslint-parser'

export default [
  {
    files: ['**/*.vue', '**/*.js', '**/*.jsx', '**/*.ts', '**/*.tsx'],
    plugins: {
      vue
    },
    languageOptions: {
      parser: vueEslintParser,
      parserOptions: {
        ecmaVersion: 2022,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    rules: {
      // 基本规则
      'no-console': 'warn',
      'no-unused-vars': 'warn',
      // Vue 规则
      'vue/no-unused-components': 'warn',
      'vue/no-unused-vars': 'warn'
    }
  }
]
