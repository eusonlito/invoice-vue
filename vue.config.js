module.exports = {
    publicPath: '/',

    filenameHashing: true,

    configureWebpack: {
        optimization: {
            concatenateModules: true,
            mergeDuplicateChunks: true,
            removeAvailableModules: true,
            removeEmptyChunks: true,
            splitChunks: false,
            minimize: (process.env.NODE_ENV === 'production') ? true : false
        }
    }
}
