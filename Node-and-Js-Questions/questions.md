https://github.com/ElemeFE/node-interview/tree/master/sections/zh-cn
https://github.com/jimuyouyou/node-interview-questions

# Node
1、如何让一个 js 文件在 Linux 下成为一个可执行命令程序 ?

2、node12和node8的区别？ 默认堆栈大小？为什么设置了上限？怎么改堆栈大小？新生代、老生代的gc策略？ 如何看gc信息、手动gc？ 如何查看进程的堆内存使用情况

3、写一个node http服务器，发送接收请求

4、 socket hang up是什么错误？

5、，描述下面代码的执行过程？

```
const fs = require('fs');
function someAsyncOperation(callback) {
  // Assume this takes 95ms to complete
  fs.readFile('/path/to/file', callback);}
const timeoutScheduled = Date.now();
setTimeout(() => {
  const delay = Date.now() - timeoutScheduled;

  console.log(`${delay}ms have passed since I was scheduled`);}, 100);
// do someAsyncOperation which takes 95 ms to completesomeAsyncOperation(() => {
  const startCallback = Date.now();

  // do something that will take 10ms...
  while (Date.now() - startCallback < 10) {
    // do nothing
  }
});
```

6、下面的代码输出什么？ 如果没有输出，如何才能打印出an event occurred!

```
const EventEmitter = require('events');const util = require('util');
function MyEmitter() {
  EventEmitter.call(this);
  this.emit('event');}
util.inherits(MyEmitter, EventEmitter);
const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
  console.log('an event occurred!');});
}
```


7、如何让一个异步的函数支持回调和promise两种调用方式


8、koa 中间件的原理 ？   koa和express中间件的实现原理？

9、es6的import和commonjs的require区别，实现原理；  require的时候是怎么查找模块的 ？为什么nodejs作为单线程？ 你对进程和线程怎么看？线程之间可以共享数据吗？进程之间呢？ 


10、libuv做什么用？node事件循环？

# Js
1、es6及其之后的es7甚至es8带来了哪儿些新的特性？ 你觉得实际中带来便利的地方 ？let有哪儿些好处？ 

2、防抖节流是什么? 有一个判断页面是否滚动到底部的需求？　你怎么去设计实现？

3、常用的Buffer方法
https://www.cnblogs.com/chyingp/p/nodejs-learning-buffer.html

4、如何将浮点数点左边的数每三位添加一个逗号，如1234567.1111转化为『1,234,567.1111』? 

5、es6 怎么写class么，为什么会出现class? class的原理是什么？

6、读取一份文件， 5s未读取完毕就返回错误信息？

7、实现深克隆 ？ 如何克隆函数呢？

8、js中判断类型？

9、评价一下三种方法实现继承的优缺点,并改进
```
function Shape() {}

function Rect() {}

// 方法1
Rect.prototype = new Shape();

// 方法2
Rect.prototype = Shape.prototype;

// 方法3
Rect.prototype = Object.create(Shape.prototype);

Rect.prototype.area = function () {
  // do something
};
```

10、观察者模式、发布订阅模式？ 请实现一个Event类,继承自此类的对象都会拥有两个方法on,off,once和trigger

11、数组扁平化

12、apply、call、bind的区别,  如何实现call、bind函数

13、以下代码的输出

```
var a = 10; 
(function () {
    console.log(a)    
    a = 5
    console.log(window.a)
    var a = 20;    
console.log(a) })()
```

14、js错误处理
- 同步代码、async等可以直接try...catch
- node端接口遵循error first原则， 要求所调用的方法对待回调函数使用（err， data）的方式
- 监听error事件，on('error', err => {}) ；要求被调用对象集成EventEmitter并且错误时emit（error）
- promise后catch
- process的unHandledRejection、unCaughtException


15、以下代码输出什么？ 如何让结果变成0 1 2 3 4

```
for(var i = 0; i < 5; i++) {
    setTimeout(function() {
        console.log(i);  
    }, 1000);
}
```

16、Promise的三种状态？Promise构造函数是同步还是异步执行，then呢？Promise和setTimeout执行先后的区别？

```
console.log('a')
new Promise((resolve)=> {
       console.log('b')
       resolve('c')
}).then(res => {
    console.log(res)
});
setTimeout(function(){
    console.log('d');
},0)
console.log('e')
```

19、什么是代理模式？实现一个代理请求类? proxy类怎么用？ proxy的构造函数参数？


21、js哪儿些数据类型， symbol有什么用？ 为什么要在object.prototype获取tostring方法？
array直接调用tostring会发什么？

22、异步和同步？ 异步回调和异步过程？
https://segmentfault.com/a/1190000004322358

23、js的this理解， 如何改变this的指向


24、实现一个使用xmlhttpreques发送请求， 返回数据的fetch方法
https://xhr.spec.whatwg.org/
https://segmentfault.com/a/1190000004322487
xhr.readyState这个属性是只读属性，总共有5种可能值，分别对应xhr不同的不同阶段。每次xhr.readyState的值发生变化时，都会触发xhr.onreadystatechange事件，我们可以在这个事件中进行相关状态判断。
  xhr.onreadystatechange = function () {
    switch(xhr.readyState){
      case 1://OPENED
        //do something
            break;
      case 2://HEADERS_RECEIVED
        //do something
        break;
      case 3://LOADING
        //do something
        break;
      case 4://DONE
        //do something
        break;
    }
值状态描述0UNSENT (初始状态，未打开)此时xhr对象被成功构造，open()方法还未被调用1OPENED (已打开，未发送)open()方法已被成功调用，send()方法还未被调用。注意：只有xhr处于OPENED状态，才能调用xhr.setRequestHeader()和xhr.send(),否则会报错2HEADERS_RECEIVED(已获取响应头)send()方法已经被调用, 响应头和响应状态已经返回3LOADING (正在下载响应体)响应体(response entity body)正在下载中，此状态下通过xhr.response可能已经有了响应数据4DONE (整个数据传输过程结束)整个数据传输过程结束，不管本次请求是成功还是失败


25、实现一个Promise.all方法
https://zhuanlan.zhihu.com/p/41502945


26、原型， 画一下prototype、对象、函数、构造函数之间的关系
https://github.com/mqyqingfeng/Blog/issues/2

27、捕获和冒泡
https://segmentfault.com/a/1190000005654451


28、data对象转换为query参数

```
function handler(json) {
    let result = '?';
    for (let key in Object.keys(json)) {
        result += key + '=' + json[key] + '&';
    }
    result[result.length-1] === '&' && result.splice(result.length - 2, 1);
    return result;
}
```

27、defineProperty与descriptor


# 算法

1、例如用递归实现一个查DOM的功能document.getElementById。 用深度优先遍历怎么实现？ 

２、找出链表中倒数第ｋ个节点
https://www.nowcoder.com/questionTerminal/529d3ae5a407492994ad2a246518148a?orderByHotValue=1&questionTypes=000100&page=1&onlyReference=false

３、　和为ｓ的两个数字
https://www.nowcoder.com/questionTerminal/390da4f7a00f44bea7c2f3d19491311b?orderByHotValue=1&questionTypes=000100&page=1&onlyReference=false

4、如何计算时间复杂度？
首先需要得到数据大小n和算法的执行次数c的关系为 c = T(n)
取T(n)中的最高阶数
https://www.jianshu.com/p/f4cca5ce055a
https://juejin.im/post/5c11ac8c6fb9a049e412912d

5、remove-element
https://leetcode.com/articles/remove-element/
case1： 给定nums = [3,2,2,3], val = 3,
要求返回2， 并且nums的前两个元素是都是2

case2：给定nums = [0,1,2,2,3,0,4,2], val = 2,
要求返回2， 并且nums的前5个元素是 0,1,3,0,4

6、合并两个链表，要求：
Input: 1->2->4, 1->3->4 Output: 1->1->2->3->4->4

7、旋转数组 https://leetcode-cn.com/problems/rotate-array/
输入: 
[1,2,3,4,5,6,7]
 和 k = 3输出: 
[5,6,7,1,2,3,4]


8、翻转二叉树 https://leetcode-cn.com/problems/invert-binary-tree/solution/fan-zhuan-er-cha-shu-by-leetcode/
输入：
     4
   /   \
  2     7
 / \   / \
1   3 6   9

输出：
     4
   /   \
  7     2
 / \   / \
9   6 3   1

9、移动零 https://leetcode-cn.com/problems/move-zeroes/solution/yi-dong-ling-by-leetcode/
case：
输入[0,1,4,2,0,5], 输出[1,4,2,5,0,0]

要求空间复杂度o(1)

10、设计实现hashmap， 具备put(key, value), get(key),  remove(key) ； key值均为数字， 范围在[1, 10000]内。 https://leetcode-cn.com/problems/design-hashmap/

11、小于K的两数之和
给你一个整数数组 A 和一个整数 K，请在该数组中找出两个元素，使它们的和小于 K 但尽可能地接近 K，返回这两个元素的和。
输入：A = [34,23,1,24,75,33,54,8], K = 60
输出：58
输入：A = [10,20,30], K = 15
输出：-1
https://cloud.tencent.com/developer/article/1507584

12、使用栈实现队列
https://cloud.tencent.com/developer/article/1527055
//队列的API
class MyQueue {
    /** 添加元素到队尾 */
    public void push(int x);

    /** 删除队头的元素并返回 */
    public int pop();

    /** 返回队头元素 */
    public int peek();

    /** 判断队列是否为空 */
    public boolean empty();
}
//栈的API
class MyStack {
    /** 添加元素到栈顶 */
    public void push(int x);

    /** 删除栈顶的元素并返回 */
    public int pop();

    /** 返回栈顶元素 */
    public int top();

    /** 判断栈是否为空 */
    public boolean empty();
}

13、map和array的区别？ hashmap的实现
