const path = require("path");
const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
	entry: {
		background: "./src/background.js",
		content: "./src/content-popup/popup.js"
	},
	output: {
		path: path.join(__dirname, "/build"),
		filename: "[name].js"
	},
	resolve: {
		modules: ["./src", "./node_modules"]
	},
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: "./src/content-popup/popup.css", to: "./" }
            ],
        }),
    ]
}
