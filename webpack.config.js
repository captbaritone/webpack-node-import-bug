module.exports = {
  mode: "production",
  resolve: {
    extensions: [".js"],
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },
  entry: {
    webamp: ["./index.js"],
  },
};
