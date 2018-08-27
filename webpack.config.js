module.exports = {
	entry: __dirname + '/src/index.jsx',
	output: {
		filename: 'bundle.js',
		path: __dirname + '/dist'
	},
	module: {
		rules: [
			{ test: /\.jsx$/,
				exclude: /node_modules/,
				loader: 'babel-loader',
				query: {
					presets: ['react']
				}
			}
		]
	}
};
