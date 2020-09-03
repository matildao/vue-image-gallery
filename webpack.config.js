require("babel-polyfill");

const HtmlWebpackPlugin = require("html-webpack-plugin");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const Dotenv = require("dotenv-webpack");
const path = require("path");

module.exports = {
	entry: ["babel-polyfill", "./src/index.js"],
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "dist"),
	},
	module: {
		rules: [
			{ test: /\.js$/, use: "babel-loader" },
			{ test: /\.vue$/, use: "vue-loader" },
			{ test: /\.css$/, use: ["vue-style-loader", "css-loader"] },
			{
				test: /\.scss$/,
				use: ["style-loader", "css-loader", "sass-loader"],
			},
		],
	},
	node: {
		fs: "empty",
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
		}),
		new VueLoaderPlugin(),
		new Dotenv(),
	],
};
