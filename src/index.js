//导入jQuery库
// 使用es6提供了一个导入模块的方式 :  import 接收被暴露出来的对象 from '包名'
import $ from 'jquery'

//使用es6的语法导入css文件 import 'css路径'
import './css/index.css'
//问题 : webpack目前只能处理js文件,类似于jquery.js. 没有办法去处理非js的文件
//解决 : 使用合适的第三方loader加载器
import './css/index.less'
import './css/index.scss'

//导入bootstrap的css
//不写node_modules目录, 会自动去node_modules中去找
import 'bootstrap/dist/css/bootstrap.css'

$(function () {
    //偶数行背景色
    $('li:even').css('background', 'yellow')
    //奇数行背景色
    $('li:odd').css('background', 'orange')
})

class Person {
    static obj = {name: '盲僧'}
}

console.log(Person.obj)