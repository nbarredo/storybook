module.exports = {
  plugins: ["@trivago/prettier-plugin-sort-imports"],
  importOrder: ["^react$", "^@carbon$", "<THIRD_PARTY_MODULES>", "^[./]"],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  printWidth: 80,
};
