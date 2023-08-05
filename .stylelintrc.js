module.exports = {
  extends: [
    'stylelint-config-standard-scss',
    'stylelint-config-standard-vue/scss',
    'stylelint-config-recess-order-rjz',
  ],
  rules: {
    indentation: [2, {
      baseIndentLevel: 0
    }],
    'declaration-empty-line-before': null,
  },
};
