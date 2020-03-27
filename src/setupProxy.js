const proxy = require('http-proxy-middleware')
module.exports = function (app) {
    // console.log(proxy)
    // console.log(app)
    app.use(proxy.createProxyMiddleware('/api', {
        target: 'https://www.easy-mock.com',
        changeOrigin: true,
        pathRewrite: {
            '^/api': ''
        }
    }))
}
