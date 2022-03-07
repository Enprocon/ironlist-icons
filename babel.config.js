module.exports = function (api) {
  api.cache(true);
  const presets = [
    [
      "@babel/preset-env",
      {
        useBuiltIns: "entry",
      },
    ],
    "@babel/preset-react",
    [
      "minify",
      {
        builtIns: false,
      },
    ],
  ];
  const plugins = ["macros"];

  return {
    presets,
    plugins,
  };
};
