/**
 * @type {import('@builder.io/mitosis').MitosisConfig}
 */

module.exports = {
  targets: ["react", "svelte", "qwik", "angular"],
  dest: "../output",
  commonOptions: {
    typescript: true,
  },
  options: {
    react: {
      stylesType: "styled-components",
      typescript: true,
      contextType: "context",
    },
    svelte: {},
    qwik: {},
    angular: {},
  },
};
