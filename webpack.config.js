const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin')


//创建一个插件的实例对象
const htmlPlugin = new HtmlWebPackPlugin({
    template: path.join(__dirname, './src/index.html'),//源文件
    filename: 'index.html'
})


//向外暴露一个打包的配置对象
module.exports = {
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
    mode: 'development', //development,production  production模式会进行压缩
    plugins: [
        htmlPlugin
    ],

    //在webpack 4.x中，有一个很大的特性，就是约定大于配置，约定，默认的打包入口路径是src->index.js
    module: {
        //所有第三方模块的配置规则
        rules: [  //第三方匹配规则
            { test: /\.scss$/, loader: ["style-loader", "css-loader", "sass-loader"] , exclude: /node_modules/ },
            { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },   //千万别忘记添加exclude 排除项
            {
                test: /\.css$/,
                exclude: /(node_modules)/,
                loader: 'style-loader!css-loader?modules&importLoaders=1&localIdentName=[name]_[local]_[hash:base64:5]'
            },
            {
                test: /\.css$/,
                exclude: /(src)/,
                loader: 'style-loader!css-loader'
            },
            
        ]
    },
    performance: {
        hints: false
    }
}

//行不行
//export default {}