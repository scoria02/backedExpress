// const path = require('path');
import path from 'path';
import nodeExternals from 'webpack-node-externals';

module.exports = {
	entry: './src/index.ts',
	target: 'node',
	externals: [nodeExternals()],
	module: {
		rules: [
			{
				test: /\.ts?$/,
				use: 'ts-loader',
				// use: {
				// 	loader: 'babel-loader',
				// },
				exclude: /node_modules/,
			},
		],
	},
	resolve: {
		extensions: ['.tsx', '.ts', '.js'],
	},
	output: {
		filename: 'bundle.js',
		path: path.resolve(__dirname, 'dist'),
	},
	devServer: {
		static: path.join(__dirname, 'dist'),
		compress: true,
		port: 4000,
	},
};
