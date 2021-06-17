const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist'
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'webpack',
        })
    ],
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },
    "config": {
        "ghooks": {
            "commit-msg": "validate-commit-msg"
        },
        "validate-commit-msg": {
            "types": ["feat", "fix", "docs", "style", "refactor", "perf", "test", "build", "ci", "chore", "revert"],
            "scope": {
                "required": false,
                "allowed": ["*"],
                "validate": false,
                "multiple": false
            },
            "warnOnFail": false,
            "maxSubjectLength": 100,
            "subjectPattern": ".+",
            "subjectPatternErrorMsg": "subject does not match subject pattern!",
            "helpMessage": "",
            "autoFix": false
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ]
    }
}