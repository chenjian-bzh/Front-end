# Node

1. 如何让一个 js 文件在 Linux 下成为一个可执行命令程序 ?

2. node12 和 node8 的区别？ 默认堆栈大小？为什么设置了上限？怎么改堆栈大小？新生代、老生代的 gc 策略？ 如何看 gc 信息、手动 gc？ 如何查看进程的堆内存使用情况

3. 写一个 node http 服务器，发送接收请求

4. socket hang up 是什么错误？什么情况下会出现？如何避免？

5. 描述下面代码的执行过程？

   ```javascript
   const fs = require('fs');

   function someAsyncOperation(callback) {
     // Assume this takes 95ms to complete
     fs.readFile('/path/to/file', callback);
   }

   someAsyncOperation(() => console.log('read file successfully'));

   const timeoutScheduled = Date.now();

   setTimeout(() => {
     const delay = Date.now() - timeoutScheduled;
     console.log(`${delay}ms have passed since I was scheduled`);
   }, 100);

    // do someAsyncOperation which takes 95 ms to completesomeAsyncOperation(() => {
    const startCallback = Date.now();

    // do something that will take 10ms...
    while (Date.now() - startCallback < 10) {
    // do nothing
    }
    });
   ```

6) 下面的代码输出什么？ 如果没有输出，如何才能打印出 'an event occurred!'

   ```javascript
   const EventEmitter = require('events');
   const util = require('util');

   function MyEmitter() {
     EventEmitter.call(this);
     this.emit('event');
   }
   util.inherits(MyEmitter, EventEmitter);

   const myEmitter = new MyEmitter();
   myEmitter.on('event', () => {
     console.log('an event occurred!');});
   }
   ```

7. 如何让一个异步的函数支持回调和 promise 两种调用方式?

8. koa 中间件的原理? koa 和 express 中间件的实现原理?

9. es6 的 import 和 commonjs 的 require 区别，实现原理； require 的时候是怎么查找模块的 ？为什么 nodejs 作为单线程？ 你对进程和线程怎么看？线程之间可以共享数据吗？进程之间呢？

10. 什么是 nodejs 的事件循环？ libuv 有什么用？ libuv 在处理文件或者网络任务时有什么不同吗？

# Js

1. es6 及其之后的 es7 甚至 es8 带来了哪儿些新的特性？ 你觉得实际中带来便利的地方 ？let 有哪儿些好处？

2. 防抖节流是什么? 有一个判断页面是否滚动到底部的需求？　你怎么去设计实现？能不能实现一个防抖函数？

3. 常用的 Buffer 方法
   https://www.cnblogs.com/chyingp/p/nodejs-learning-buffer.html

4. 如何将浮点数点左边的数每三位添加一个逗号，如 1234567.1111 转化为『1,234,567.1111』?

5. es6 class 的原理是什么？ es5 如何实现继承？评价一下三种方法实现继承的优缺点,并改进

   ```javascript
   function Shape() {}

   function Rect() {}

   // 方法1
   Rect.prototype = new Shape();

   // 方法2
   Rect.prototype = Shape.prototype;

   // 方法3
   Rect.prototype = Object.create(Shape.prototype);

   Rect.prototype.area = function() {
     // do something
   };
   ```

6. 实现一个读取文件的函数， 读取指定文件并返回内容， 如果 5s 内未读取完毕就返回错误信息。

7. 实现深克隆 ？ 如何克隆函数类型？

8. js 中判断类型？

9. 观察者模式、发布订阅模式？ 请实现一个 Event 类,继承自此类的对象都会拥有两个方法 on,off,once 和 trigger

10. 数组扁平化

11. apply、call、bind 的区别, 如何实现 call、bind 函数

12. 以下代码的输出

    ```javascript
    var a = 10;
    (function() {
      console.log(a);
      a = 5;
      console.log(window.a);
      var a = 20;
      console.log(a);
    })();
    ```

13. nodejs 错误处理怎么做 ？ 如何自定义错误类型？ 如何修改错误堆栈 ？ 异步操作会造成的错误堆栈断掉，这个问题如何解决？

- 同步代码、async 等可以直接 try...catch
- node 端接口遵循 error first 原则， 要求所调用的方法对待回调函数使用（err， data）的方式
- 监听 error 事件，on('error', err => {}) ；要求被调用对象集成 EventEmitter 并且错误时 emit（error）
- promise 后 catch
- process 的 unHandledRejection、unCaughtException

15. 以下代码输出什么？ 如何让结果变成 0 1 2 3 4

    ```javascript
    for (var i = 0; i < 5; i++) {
      setTimeout(function() {
        console.log(i);
      }, 1000);
    }
    ```

16. Promise 的三种状态？Promise 构造函数是同步还是异步执行，then 呢？Promise 和 setTimeout 执行先后的区别？ 以下代码输出？

    ```javascript
    console.log('a');
    new Promise(resolve => {
      console.log('b');
      resolve('c');
    }).then(res => {
      console.log(res);
    });
    setTimeout(function() {
      console.log('d');
    }, 0);
    console.log('e');
    ```

17. 什么是代理模式？实现一个代理请求类? proxy 类怎么用？ proxy 的构造函数参数？

18. 异步和同步？ 异步回调和异步过程？
    https://segmentfault.com/a/1190000004322358

19. js 的 this 理解， 如何改变 this 的指向.

20. 实现一个使用 xmlhttpreques 发送请求， 返回数据的 fetch 方法

    ```javascript
    https://xhr.spec.whatwg.org/
    https://segmentfault.com/a/1190000004322487
    xhr.readyState 这个属性是只读属性，总共有 5 种可能值，分别对应 xhr 不同的不同阶段。每次 xhr.readyState 的值发生变化时，都会触发 xhr.onreadystatechange 事件，我们可以在这个事件中进行相关状态判断。
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
    值状态描述 0UNSENT (初始状态，未打开)此时 xhr 对象被成功构造，open()方法还未被调用 1OPENED (已打开，未发送)open()方法已被成功调用，send()方法还未被调用。注意：只有 xhr 处于 OPENED 状态，才能调用 xhr.setRequestHeader()和 xhr.send(),否则会报错 2HEADERS_RECEIVED(已获取响应头)send()方法已经被调用, 响应头和响应状态已经返回 3LOADING (正在下载响应体)响应体(response entity body)正在下载中，此状态下通过 xhr.response 可能已经有了响应数据 4DONE (整个数据传输过程结束)整个数据传输过程结束，不管本次请求是成功还是失败
    ```

21. 实现一个 Promise.all 方法
    https://zhuanlan.zhihu.com/p/41502945

22. 原型， 画一下 prototype、对象、函数、构造函数之间的关系
    https://github.com/mqyqingfeng/Blog/issues/2

23. 捕获和冒泡
    https://segmentfault.com/a/1190000005654451

24. data 对象转换为 query 参数

    ```javascript
    function handler(json) {
      let result = '?';
      for (let key in Object.keys(json)) {
        result += key + '=' + json[key] + '&';
      }
      result[result.length - 1] === '&' && result.splice(result.length - 2, 1);
      return result;
    }
    ```

25. defineProperty 与 descriptor

# 算法

1. 例如用递归实现一个查 DOM 的功能 document.getElementById。 用深度优先遍历怎么实现？

2. 找出链表中倒数第ｋ个节点
   https://www.nowcoder.com/questionTerminal/529d3ae5a407492994ad2a246518148a?orderByHotValue=1&questionTypes=000100&page=1&onlyReference=false

3. 和为ｓ的两个数字
   https://www.nowcoder.com/questionTerminal/390da4f7a00f44bea7c2f3d19491311b?orderByHotValue=1&questionTypes=000100&page=1&onlyReference=false

4. 如何计算时间复杂度？
   首先需要得到数据大小 n 和算法的执行次数 c 的关系为 c = T(n)
   取 T(n)中的最高阶数
   https://www.jianshu.com/p/f4cca5ce055a
   https://juejin.im/post/5c11ac8c6fb9a049e412912d

5. remove-element
   https://leetcode.com/articles/remove-element/

   ```javascript
    case1： 给定 nums = [3,2,2,3], val = 3,
    要求返回 2， 并且 nums 的前两个元素是都是 2

    case2：给定 nums = [0,1,2,2,3,0,4,2], val = 2,
    要求返回 2， 并且 nums 的前 5 个元素是 0,1,3,0,4
   ```

6. 合并两个链表，要求：

   ```javascript
      //Input:
      1->2->4, 1->3->4

      //Output:
      1->1->2->3->4->4
   ```

7) 旋转数组 https://leetcode-cn.com/problems/rotate-array/

   ```javascript
   //输入:
   [1, 2, 3, 4, 5, 6, 7];
   k = 3;

   //输出:
   [5, 6, 7, 1, 2, 3, 4];
   ```

8. 翻转二叉树 https://leetcode-cn.com/problems/invert-binary-tree/solution/fan-zhuan-er-cha-shu-by-leetcode/

   ```javascript
   //输入：
   4
   / \
     2 7
   / \ / \
   1 3 6 9

   //输出：
   4
   / \
   7 2
   / \ / \
   9 6 3 1
   ```

9) 移动零 https://leetcode-cn.com/problems/move-zeroes/solution/yi-dong-ling-by-leetcode/, 要求空间复杂度 o(1)， case:

   ```javascript
   //输入
   [0, 1, 4, 2, 0, 5];

   //输出
   [1, 4, 2, 5, 0, 0];
   ```

10. 设计实现 hashmap， 具备 put(key, value), get(key), remove(key) ； key 值均为数字， 范围在[1, 10000]内。 https://leetcode-cn.com/problems/design-hashmap/

11. 小于 K 的两数之和
    https://cloud.tencent.com/developer/article/1507584

    ```javascript
    给你一个整数数组 A 和一个整数 K，请在该数组中找出两个元素，使它们的和小于 K 但尽可能地接近 K，返回这两个元素的和。
    输入：A = [34,23,1,24,75,33,54,8], K = 60
    输出：58
    输入：A = [10,20,30], K = 15
    输出：-1
    ```

12. 使用栈实现队列
    https://cloud.tencent.com/developer/article/1527055

    ```javascript
    //队列的 API
    class MyQueue {
    /\*_ 添加元素到队尾 _/
    public void push(int x);

        /** 删除队头的元素并返回 */
        public int pop();

        /** 返回队头元素 */
        public int peek();

        /** 判断队列是否为空 */
        public boolean empty();

    }
    //栈的 API
    class MyStack {
    /\*_ 添加元素到栈顶 _/
    public void push(int x);

        /** 删除栈顶的元素并返回 */
        public int pop();

        /** 返回栈顶元素 */
        public int top();

        /** 判断栈是否为空 */
        public boolean empty();

    }
    ```

13. map 和 array 的区别？ hashmap 的实现

# 面试题集

https://github.com/ElemeFE/node-interview/tree/master/sections/zh-cn
https://github.com/jimuyouyou/node-interview-questions
