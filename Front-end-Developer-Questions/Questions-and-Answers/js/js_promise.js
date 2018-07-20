// //http://es6.ruanyifeng.com/#docs/promise
// //http://www.cnblogs.com/sunshq/p/7890504.html


// /**promise 有 3 种状态：pending、fulfilled 或 rejected。状态改变只能是 pending->fulfilled 或者 pending->rejected，状态一旦改变则不能再变。
//  * 下面 promise2 并不是 promise1，而是返回的一个新的 Promise 实例。 
//  * */
// const promise1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('success')
//     }, 1000)
// })

// const promise2 = promise1.then(() => {
//     throw new Error('error!!!')
// })
    
// console.log('promise1', promise1)
// console.log('promise2', promise2)
    
// setTimeout(() => {
//     console.log('promise1', promise1)
//     console.log('promise2', promise2)
// }, 2000)
// console.log("*******************************************\n")

// /**
//  * promise中返回另一个promise，则状态会发生转移, 下面p2的状态虽然在1s之后改变，但因为返回的p1是一个promise对象，这个时候p2自己的状态失效了，由p1的状态控制，所以需要再等2s才会往后执行
//  * 而p1的状态变成了rejected，所以不执行then中的代码，直接进入了catch
//  */
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         throw new Error('err')
//     }, 3000);
// })

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(p1)
//     }, 1000);
// })

// p2.then(value => {console.log(value)}).catch(err => {console.log(err)})


// /**
//  * 调用resolve或者reject并不会停止参数函数的执行，如果要停止执行之后代码，需要加上return
//  */
// const p3 = new Promise((resolve, reject) => {
//     resolve()
//     //下面代码仍然会执行
//     console.log('asd')
// })

// const p4 = new Promise((resolve, reject) => {
//     return resolve()
//     //下面代码不会执行
//     console.log('asd')
// })
// console.log("*******************************************\n")


// /**
//  * 如果没有在then或者catch中捕获错误，则错误会被promise吃掉，虽然会打印出错误，但是不会终止程序运行，依然输入&&&&&&&&&&
//  * Node 有一个unhandledRejection事件，专门监听未捕获的reject错误，上面的脚本会触发这个事件的监听函数，可以在监听函数里面抛出错误。
// process.on('unhandledRejection', function (err, p) {
//   throw err;
// });
//  */
// const someAsyncThing = function() {
//     return new Promise(function(resolve, reject) {
//       // 下面一行会报错，因为x没有声明
//       resolve(x + 2);
//     });
// };

// someAsyncThing().then(function() {
//     console.log('everything is great');
// });

// setTimeout(() => { console.log('&&&&&&&&&&') }, 2000);



/**
 * 
 */
Promise.resolve(1)
.then(2)
.then(Promise.resolve(3))
.then(console.log)
