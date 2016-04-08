module.exports = {
    entry: "./app/app.jsx",
    output: {
        path: __dirname + "/public",
        filename: "bundle.js"
    },
    module: {
        loaders: [
            { test: /\.jsx?$/,
                include: /app/, loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0'],
                    plugins: [__dirname+'/app/plugins/babelRelayPlugin']
                }
            }, {
                test: /\.css$/,
                loaders: ['style?sourceMap', 'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]', 'cssnext']
            }, {
                test   : /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader : 'file-loader'
            }

        ]
    }
};