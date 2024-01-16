module.exports = {
  plugins: [require.resolve("@trivago/prettier-plugin-sort-imports")],
  importOrder: ["^@carbon/(.*)$", "^[./]"],
  importOrderSeparation: false,
  importOrderSortSpecifiers: true,
  printWidth: 80,
};

/*
importOrder: [
    "^@carbon/(.*)$",
    "react",
    "<THIRD_PARTY_MODULES>",
    "components/(.*)",
    ".scss",
  ],
  */
