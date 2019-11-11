module.exports = {
    publicPath: '/',
    configureWebpack: {
        optimization: {
            splitChunks: {
                chunks: 'all'
            }
        }
    }
}
