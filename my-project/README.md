# my-project

> A Vue.js project

## Build Setup

``` bash
# 最新稳定版
npm install vue

# 全局安装 vue-cli
npm install -g vue-cli

# 创建一个基于 webpack 模板的新项目
vue init webpack my-project

# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## import jQuery and bootstrap

#### 方法一：
``` bash
# 安装jquery插件，通过cmd进入项目文件夹，运行npm(cnpm) install jquery --save-dev安装插件
npm(cnpm) install jquery --save-dev

# 安装支持css的插件
npm install style-loader --save-dev
npm install css-loader --save-dev
npm install file-loader --save-dev

# 修改build文件下的webpack.base.conf.js文件
var webpack = require('webpack')

# 在module.exports resolve alias下面加入
jquery: "jquery/src/jquery"

# 在module.exports最下面添加
plugins: [
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
    })
]

# 在main.js中import bootstrap
import './assets/bootstrap/css/bootstrap.min.css'
import './assets/bootstrap/js/bootstrap.min'
```
![image](http://i.imgur.com/7j5uGrT.png)

![image](http://i.imgur.com/uv0ND9t.png)

#### 方法二
``` bash
# 安装jquery
npm install jquery --save

# 在main.js中加入
import jquery from 'jquery'
window.$$ = jquery
```

## support sass in vue
``` bash
# 安装node-sass(最好用cnpm)
cnpm install node-sass --save-dev

# 安装vue-style-loader,sass-loader,css-loader
cnpm install vue-style-loader sass-loader css-loader --save-dev

# 在webpack.base.conf.js中的module-rule中加入：
test: /\.(css|scss)$/,
loader: "style-loader!css-loader!!sass-loader"

# 在组件style中加入lang=“scss”即可；（也可以引入外部样式文件）
@import ‘文件路径’；（千万）**不要忘记加上分号**。
```
![image](http://i.imgur.com/G9Slfbl.png)
> **注意！！！**
``` bash
引入了css-loader之后，在main.js中import的bootstrap.min.css将会报错：无法找到相应的模块；此时只要把bootstrap.css引入到组件的style中即可：@import ‘文件路径’；（千万**不要忘记加上分号**）。
```
