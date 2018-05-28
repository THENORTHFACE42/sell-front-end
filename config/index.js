// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
	build: {
		env: require('./prod.env'),
		index: path.resolve(__dirname, '../dist/index.html'),
		assetsRoot: path.resolve(__dirname, '../dist'),
		assetsSubDirectory: 'static',
		assetsPublicPath: './',
		productionSourceMap: false,
		// Gzip off by default as many popular static hosts such as
		// Surge or Netlify already gzip all static assets for you.
		// Before setting to `true`, make sure to:
		// npm install --save-dev compression-webpack-plugin
		productionGzip: false,
		productionGzipExtensions: ['js', 'css'],
		port: 9981,
        	sellUrl: 'http://www.ynzshb.com:9981/sell',
        	openidUrl: 'http://sellone.natapp1.cc/sell/wechat/authorize',
        	wechatPayUrl: 'http://sellone.natapp1.cc/sell/pay/create'

	},
	dev: {
		env: require('./dev.env'),
		port: 8088,
		assetsSubDirectory: 'static',
		assetsPublicPath: '/',
		proxyTable: {
      '/sell':{     //这里是公共部分，在调用接口时后面接不相同的部分，/api就相当于http://192.168.0.199:8926/api这一段
        target:'http://www.ynzshb.com:9980',   //这里写的是访问接口的域名和端口号
        changeOrigin: true, // 必须加上这个才能跨域请求
        pathRewrite: {  // 重命名
          '^/api': ''
        }
      }
    },
		// CSS Sourcemaps off by default because relative paths are "buggy"
		// with this option, according to the CSS-Loader README
		// (https://github.com/webpack/css-loader#sourcemaps)
		// In our experience, they generally work as expected,
		// just be aware of this issue when enabling this option.
		cssSourceMap: false,
    sellUrl: 'http://192.168.191.1:8088',
    openidUrl: 'http://www.ynzshb.com:9980/sell/wechat/authorize',
    wechatPayUrl: 'http://www.ynzshb.com:9980/sell/pay/create'
	}
}
