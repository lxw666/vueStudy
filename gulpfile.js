// 引入 gulp
var gulp = require('gulp'); 
var $ = require('gulp-load-plugins')();//当用到某个插件时，它会自动帮我们加载这个插件（$.sass = require('gulp-sass')）
var pngquant = require('imagemin-pngquant');
// 检查脚本
gulp.task('lint', function() {
    gulp.src('src/js/*.js')
        .pipe($.jshint())
        .pipe($.jshint.reporter('default'));
});
// 编译Sass
gulp.task('sass', function() {
    return $.rubySass('src/sass/*.scss')
        .on('error', function (err) {
            console.error('Error!', err.message);
        })
        .pipe(gulp.dest('dist/css'))
        .pipe($.minifyCss()) //css压缩文件
        .pipe(gulp.dest('dist/css'))
        .pipe($.livereload()); //自动刷新,配合谷歌浏览器使用，且安装扩展程序livereload chrome extension
    // gulp.src('src/sass/*.scss')
    //     .pipe($.sass()) //编译sass
    //     .pipe(gulp.dest('dist/css'))
    //     .pipe($.minifyCss()) //css压缩文件
    //     .pipe(gulp.dest('dist/css'))
    //     .pipe($.livereload()); //自动刷新,配合谷歌浏览器使用，且安装扩展程序livereload chrome extension
});

// 压缩js文件
gulp.task('script', function(){
    gulp.src('src/js/*.js')
        .pipe($.uglify()) //js压缩文件
        .pipe(gulp.dest('dist/js'))
        .pipe($.livereload());
});

//图片压缩
gulp.task('img', function(){
    gulp.src('src/img/**')
        .pipe($.cache($.imagemin({
            optimizationLevel: 5, //类型：Number  默认：3  取值范围：0-7（优化等级）
            progressive: true, //类型：Boolean 默认：false 无损压缩jpg图片
            interlaced: true, //类型：Boolean 默认：false 隔行扫描gif进行渲染
            multipass: true, //类型：Boolean 默认：false 多次优化svg直到完全优化
            use: [pngquant()] //使用pngquant深度压缩png图片的imagemin插件
        })))
        .pipe(gulp.dest('dist/img'))
        .pipe($.livereload());
});

//清除
gulp.task('clean', function(){
    gulp.src(['dist/css','dist/js','dist/img','.sass-cache'],{read: false})
        .pipe($.clean());
});

// 默认任务
gulp.task('default', function(){
    gulp.run('sass','script','img');
    $.livereload.listen(); //在这里调用listen方法

    // 监听文件变化
    gulp.watch('src/**/**', function(){
        gulp.run('sass','script','img');
    });
});