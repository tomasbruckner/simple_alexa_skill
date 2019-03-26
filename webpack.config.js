const path = require('path');
const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');

module.exports = {
    entry: slsw.lib.entries,
    target: 'node',
    // Generate sourcemaps for proper error messages
    devtool: 'inline-source-map',
    mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
    // Since 'aws-sdk' is not compatible with webpack,
    // we exclude all node dependencies
    externals: [nodeExternals()],
    optimization: {
        // We do not want to minimize our code.
        minimize: false,
    },
    performance: {
        // Turn off size warnings for entry points
        hints: false,
    },

    resolve: {
        extensions: [
            '.js',
            '.json',
            '.ts',
            '.tsx',
        ],
        plugins: [new TsconfigPathsPlugin({ configFile: './tsconfig.json' })],
    },
    output: {
        libraryTarget: 'commonjs',
        path: path.join(__dirname, '.webpack'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                loader: 'ts-loader',
                include: __dirname,
                exclude: /node_modules/,
            },
        ],

    },
};
