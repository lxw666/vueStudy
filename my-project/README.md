# my-project

> A Vue.js project

## Build Setup

``` bash
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

### 方法一：
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

### 方法二
``` bash
# 安装jquery
npm install jquery --save

# 在main.js中加入
import jquery from 'jquery'
window.$$ = jquery
```


