const CracoLessPlugin = require('craco-less')
const CracoAliasPlugins = require('craco-alias')
const webpack = require('webpack')
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin')
// const getCSSModuleLocalIdent = require('react-dev-utils/getCSSModuleLocalIdent')

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {},
                        javascriptEnabled: true,
                    },
                },
            },
        },
        {
            plugin: CracoAliasPlugins,
            options: {
                source: 'tsconfig',
                tsConfigPath: 'tsconfig.paths.json',
            },
        },
        // new SimpleProgressWebpackPlugin(),
    ],
    devServer: {
        port: 9000,
        headers: {
            'Access-Control-Allow-Origin': '*', // 允许跨域
        },
        historyApiFallback: true,
        // injectClient: false
        // hot: false,
        // watchContentBase: false,
        // liveReload: false,
    },
    configure: (webpackConfig, { env, paths }) => {
        paths.appBuild = 'dist' // 配合输出打包修改文件目录
        webpackConfig.output = {
            ...webpackConfig.output,
            path: path.resolve(__dirname, 'dist'), // 修改输出文件目录
            publicPath: 'http://localhost:9000/',
            library: 'reactApp',
            libraryTarget: 'umd',
            // globalObject: 'window',
            jsonpFunction: 'webpackJsonp_reactApp'
        }
        return webpackConfig
    },
}
