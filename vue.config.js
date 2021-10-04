module.exports = {
    // publicPath: process.env.NODE_ENV === 'production'
    // ? 'vue-todo' : '/',
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'static',
    devServer: {
        proxy: {
            '^/api': {
                target: 'http://localhost:5000',
                changeOrigin: true,
                logLevel: 'debug',
                pathRewrite: { '^/api': '/' },
            },
        }
    },
}