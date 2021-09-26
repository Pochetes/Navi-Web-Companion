const webpack = require("webpack");
const path = require("path");

module.exports = {
	entry: {
		background: "./src/extension/background.js",
		content: "./src/extension/content.js"
	},
	output: {
		path: path.join(__dirname, "/build"),
		filename: "[name].js"
	},
	resolve: {
		modules: ["./src", "./node_modules"]
	}
}