'use strict'
const webpack = require('webpack')
const path = require('path')
const merge = require('webpack-merge')
const baseConfig = require('./webpack.config.base')

module.exports = merge(baseConfig, {
	devtool: false,

	entry: [
		'./src/main.js'
	],

	output: {
		path: path.join(__dirname, 'dist'),
		filename: './main.js',
	},

	plugins: [
		new webpack.optimize.UglifyJsPlugin({
			compressor: {
				warnings: false,
			},
		})
	],

	target: 'electron-renderer',

	node: {
		__dirname: false,
		__filename: false,
	}
})
