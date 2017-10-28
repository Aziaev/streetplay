const path = require('path');
const webpackCopy = require('copy-webpack-plugin');

module.exports = {
    entry: {
        App: './src/index.tsx'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devtool: '#source-map',

    resolve: {
        extensions: ['.webpack.js', '.web.js', '.css', '.ts', '.js', '.json', '.tsx']
    },
    module: {
        rules: [
            {test: /\.tsx?$/, loader: 'awesome-typescript-loader'},
            {test: /\.(jpe?g|gif|png|svg|woff|woff2|ttf|eot|wav|mp3)$/, use: "file-loader"},
            {test: /\.css$/, loader: 'style-loader!css-loader'}
        ]
    },
    externals: {
        'react': 'React',
        'react-dom': 'ReactDOM',
        'systemjs': 'SystemJS'
    },
    plugins: [
        new webpackCopy([
            {
                from: 'index.html'
            },
            {
                from: 'node_modules/react/dist/react.js', to: 'extlib/react'
            },
            {
                from: 'node_modules/react-dom/dist/react-dom.js', to: 'extlib/reactDOM'
            },
            {
                from: 'node_modules/systemjs/dist/system.js', to: 'extlib/systemjs'
            },
            {
                from: 'public/assets', to: 'assets'
            },
            {
                from: 'public/images', to: 'images'
            }
        ])
    ]
};