//导入路径模块
let path = require('path')
// 导入自动生成HTMl文件的插件
let htmlWebpackPlugin = require('html-webpack-plugin')
// 导出一个配置对象，将来webpack在启动的时候，会默认来查找webpack.config.js，并读取这个文件中导出的配置对象，来进行打包处理
module.exports = {
    //配置打包模式为开发模式
    mode: 'development',
    //项目入口文件
    entry: path.join(__dirname, './src/index.js'),
    //配置输出选项
    output: {
        //输出的路径
        path: path.join(__dirname, './dist'),
        //输出的文件名
        filename: 'main.js'
    },
    //所有的webpack的插件,一般都要配置到这个节点上
    plugins: [
        new htmlWebpackPlugin({
            template: path.join(__dirname, './src/index.html'), //指定的模板路径
            filename: 'index.html'// 设置生成内存页面的名称
        })
    ],
    // 用来配置第三方loader模块的
    module: {
        //文件的规则
        rules: [
            //处理除上述文件的规则
            {test: /\.css$/, use: ['style-loader', 'css-loader', 'postcss-loader']},
            {test: /\.less$/, use: ['style-loader', 'css-loader', 'less-loader']},
            {test: /\.scss$/, use: ['style-loader', 'css-loader', 'sass-loader']},
            // 1. 传参 : ?limit=18675-->图片大小, 若图片的字节大于你设置的字节标准, 则显示路径, 否则显示base64格式的
            // 2. 该图片被编译成了唯一的hash值, 类似于DNA, 一共32位, 继续传参设置自己的图片名 : name=[name].[ext]
            // 3. 为了防止图片名重复, 在图片名的前面设置hash值10位 例 : name=[hash:10][name].[ext]
            {test: /\.(png|jpg|gif|bmp|svg)$/, use: 'url-loader?limit=100&name=[hash:7][name].[ext]'},
            {test: /\.(ttf|woff2|woff|eot)$/, use: ['url-loader']},
            {test: /\.js$/, use: 'babel-loader', exclude: /node_modules/}
        ]
    }
}