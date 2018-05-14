const path = require('path')

module.exports = {
  mode: "production",
  entry: "./source/scripts/main.ts",
  output: {
    path: path.resolve(__dirname, 'static/scripts'),
    filename: 'main.js'
  },
  resolve: {
    extensions: [".ts", ".js"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "ts-loader" }
    ]
  }
}
