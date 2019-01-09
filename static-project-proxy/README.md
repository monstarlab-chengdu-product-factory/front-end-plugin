# proxy.js
proxy.js 是一个本地代理服务器，它可以使用在静态项目下面，方便快捷
### 如何在项目中引入？
直接将该js文件放在你项目的根目录下即可
### 如何启用？
1. 安装browser-sync、http-proxy-middleware 两个依赖包
2. 在terminal下面运行node proxy.js, 也可以将该命令写到package下的script中去
### 文件说明
1. proxy 的初始化配置，首先会去匹配请求的路径中包含‘/proxy/’的字符串，如果有就会走这个代理
2. proxy 的初始化配置，target里面存放需要调用的api实际地址
3. browserSync.watch 里面会配置需要监听的文件路径，该路径规则请参照通用匹配文件路径规则
4. browserSync init 中可以配置目录，端口号，还有启动文件



