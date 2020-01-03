/** 用于开发环境的服务启动 * */
const path = require('path'); // 获取绝对路径有用
// eslint-disable-next-line import/no-extraneous-dependencies
const express = require('express');
// express服务器端框架
const env = process.env.NODE_ENV; // 模式（dev开发环境，production生产环境）
// eslint-disable-next-line import/no-extraneous-dependencies
const webpack = require('webpack'); // webpack核心
// eslint-disable-next-line import/no-extraneous-dependencies
const webpackDevMiddleware = require('webpack-dev-middleware'); // webpack服务器
// eslint-disable-next-line import/no-extraneous-dependencies
const webpackHotMiddleware = require('webpack-hot-middleware'); // HMR热更新中间件
// eslint-disable-next-line
const forward = require('forward-request');
// eslint-disable-next-line
const http = require('http');
const webpackConfig = require('./build/webpack.config.dev.js'); // webpack开发环境的配置文件

const app = express(); // 实例化express服务
const DIST_DIR = webpackConfig.output.path; // webpack配置中设置的文件输出路径，所有文件存放在内存中
const {PORT} = process.env; // 服务启动端口号

if (env === 'production') {
    // 如果是生产环境，则运行build文件夹中的代码
    app.use('/', express.static('dist'));
} else {
    const compiler = webpack(webpackConfig); // 实例化webpack
    app.use(webpackDevMiddleware(compiler, {
        // 挂载webpack小型服务器
        publicPath: webpackConfig.output.publicPath, // 对应webpack配置中的publicPath
        quiet: true, // 是否不输出启动时的相关信息
        logLevel: 'error',
        stats: {
            colors: true, // 不同信息不同颜色
            timings: true, // 输出各步骤消耗的时间
        },
    }));
    // 挂载HMR热更新中间件
    app.use(webpackHotMiddleware(compiler));
    // 所有请求都返回index.html
    app.get('/', (req, res, next) => {
        const filename = path.join(DIST_DIR, 'index.html');

        // 由于index.html是由html-webpack-plugin生成到内存中的，所以使用下面的方式获取
        compiler.outputFileSystem.readFile(filename, (err, result) => {
            if (err) {
                return next(err);
            }
            res.set('content-type', 'text/html');
            res.send(result);
            res.end();
        });
    });
}

/** 启动服务 * */
app.listen(PORT, '0.0.0.0', () => {
    console.log(`本地服务启动地址: http://localhost:${PORT}`);
});
