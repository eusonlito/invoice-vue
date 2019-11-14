module.exports = {
    publicPath: '/',

    filenameHashing: true,

    configureWebpack: {
        optimization: {
            splitChunks: false
        }
    }
}

