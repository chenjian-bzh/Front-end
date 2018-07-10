//1、实现了会稽作用域，只在它声明的代码块里有效
//如果没有块级作用域：
var m = 'str'
function f(){
    console.log(m)
    if(false){
        var m = 'new str'
    }
}
f()   //输出undefined ，变量提升导致内层作用域的变量污染了外层


function f2(){
    var n = 'str'
    if(true){
        var n = 'new str'
    }
    console.log(n)
}
f2()   //输出'new str' ，因为没有块级作用域 ， 只有函数作用域 ，所以函数内的 n 都是同一个变量


function f3(){
    var n = 'str'
    if(true){
        let n = 'new str'
    }
    console.log(n)
}
f3() //输出'str' ，块级作用域对外部变量没有影响 


/**
 * es6允许在代码块中定义函数 ， 作用类似let
 */
// function f4() { console.log('I am outside!'); }
// (function () {
//   if (false) {
//     // 重复声明一次函数f
//     function f4() { console.log('I am inside!'); }
//   }

//   f4();
// }());
// //上述代码可以看做下面的代码一样：
// function f6() { console.log('I am outside!'); }
// (function () {
//   var f = undefined;
//   if (false) {
//     function f6() { console.log('I am inside!'); }
//   }

//   f6();
// }());


var b = 'sdf'
console.log(this.b)
let c = 'sdfsdf'
console.log(this.c)