const path = require('path')
module.exports = {
	async redirects() {
		return [
		  {
			source: '/category',
			destination: '/category/all',
			permanent: true,
		  },
		  {
			source: '/product',
			destination: '/category/all',
			permanent: true,
		  },
		]
	},
	trailingSlash: false,
	webpackDevMiddleware: config => {
		config.watchOptions = {
			poll: 1000,
			aggregateTimeout: 300
		}

		return config
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')]
	}
}