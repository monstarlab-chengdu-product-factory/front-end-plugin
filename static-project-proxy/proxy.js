const browserSync = require("browser-sync").create('My Server');
const proxy = require('http-proxy-middleware');

//代理配置
const apiProxy = proxy('/proxy/', {
    target: 'https://www.easy-mock.com',
    changeOrigin: true,
    pathRewrite: {
        '^/proxy/': ''
    },
});

//服务器热更新监听文件夹
browserSync.watch('./assets/*.html').on('change', browserSync.reload);
browserSync.watch('./assets/script/**/*.js').on('change', browserSync.reload);
browserSync.watch('./assets/style/**/*.css').on('change', browserSync.reload);

//启动本地服务器
browserSync.init({
    server: {
        baseDir: './assets/',
        port: 3000,
        middleware: [apiProxy]
    },
    startPath: '/index.html'
});