# webpack-practise
build a front-end project from beginning

从头搭建一个前端工程，不用cli工具，练习一下webpack的各种配置

框架选择 Vue 

day1:
目前已经搭建了webpack
借助 html-webpack-plugin 来使用模版 index.html 文件。并且自动将打包好的js(命名有hash)注入到 index.html 文件中
可以分别在 development 和 production 模式下打包，配置文件借助 webpack-merge 来实现扩展
每次打包前借助 rimraf 包来删除上次打包的文件。
成功安装了 webpack-dev-server 并且成功启动。

TODO： 
实现 webpack-dev-server 的配置，实现热更新，自动打开浏览器等功能
配置不同的 loader ，以实现对不同文件的解析
优化打包树，看能否将静态文件按照 src 文件的目录树打包
增加 eslint editorconfig 之类的控件  

「暂时想到这些，周末快乐」