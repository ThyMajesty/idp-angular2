let path = require('path');

module.exports = {
    entry: path.join(__dirname, 'src','index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'vendor.js'
    },
    devtool: 'source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                query: {
                    presets: ['es2015']
                }
            },
        ]
    }
}