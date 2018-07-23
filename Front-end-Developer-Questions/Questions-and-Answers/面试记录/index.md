- webpack熟悉吗? 抽取css的插件是什么？

    extract-text-webpack-plugin

- 有读过vue或者react的源码吗？ 现在用的什么版本的Vue ， 知道Vue1和Vue2的区别吗？


- Vue组件间通信的方式 ？ 兄弟节点间怎么通信 ？
  

- 数组扁平化能想到几种方法？ (https://github.com/mqyqingfeng/Blog/issues/36)
   
   递归 、toString 、 reduce 、 扩展运算符


- 数据库读写分离是什么？ 主从数据库? 分库分表呢？ 

- 重放攻击 ， CSRF攻击说一下

- post请求的content-type常用类型， 什么情况下选用什么类型
- 

- js实现链式函数 ， 写出a、b、c三个函数， 使得a().b().c()的输出结果是a、b、c
- 

- script标签的src加载 以及 text加载的时机？
    两者都是在挂载到dom树上之后才开始加载或者执行， src是异步的 ， text是同步的

    ```
    let script = document.createElement('script')
    script.src = 'http://xxxx.cdn.xxx_react.js'
    console.log('before append')
    document.body.appendChild(script)
    console.log('after append , ' , window.React) //输出 'after append , undefined'
    ```

    ```
    let script = document.createElement('script')
    script.text = 'console.log("this is script")'
    console.log('before append')
    document.body.appendChild(script)
    console.log('after append')   
    //输出：
    //before append
    //this is script
    //after append
    ```

- 没有挂载到dom树上的script或者link会发请求吗
  
  不会


- 说一下redis和mongodb的区别？ 如何选择？


- 有用过canvas吗？SVG、Canvas、D3.JS、WEBGL、Highcharts。
   
   1. canvas:(https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API/Tutorial/Basic_usage)

- web动画实现的几种方式？

  1. transition
  2. @keyframes\animation
  3. canvas

- 说一下你项目中的登录验证过程？单点登录SSO的原理？(https://www.cnblogs.com/ywlaker/p/6113927.html)(https://github.com/hezhii/nodejs-sso-example/blob/56632d1062959ceede9eedb5435998536902b8ba/system/routes/index.js)

  SSO单点登录就是在多系统组成的应用群里， 实现一个子系统登录、所有子系统免登录 ， 一个子系统注销、所有子系统注销的效果， 实现依赖于一个SSO认证中心，用户的直接登录验证在这个中心完成，假设有两个子系统和一个单点登录认证中心：
  a.com , b.com , sso.com

  1. 用户请求 a.com/xxx , 检查session是否有用户信息，有则直接返回用户请求， 没有需要继续验证是否带有token，没有则跳转到登录页面 ：sso.com/login?redirectUrl='a.com/xxx',有则到sso中心去验证token，即请求sso.com/check_token?token='xxx' ， 检查这个请求的返回结果， 有用户信息就设置局部session，并返回用户请求 ， 没有则跳转到登录页面

  2. 用户到达登录页面输入用户名密码之后， 请求 sso.com/login?redirectUrl='a.com/xxx'的post接口，带上用户信息  认证中心验证通过，生成token，设置全局session，请求转发到redirecUrl指定的地址并带上token: a.com/xxx？token='yyyy' , a站收到请求后发现有token，请求sso.com/check_token?token='yyy'验证token的有效性， 验证成功的话则设置局部session，返回请求

  3. 用户请求 b.com/xxx， b站发现没有登录，重定向到 sso.com/login?redirectUrl=b.com/xxx， 因为a站登录的时候sso认证中心已经有了用户的全局session，取出token跳转到 b.com/xxx?token='yyy', b站收到token再去sso中心 sso.com/check_token?token='xxx'  验证token，验证成功的话设置局部会话， 返回结果
  
  （假设认证中心和系统2的url分别是：sso.com、system2.com，访问system2.com时因未登录而跳转到sso.com，跳转地址：http://sso.com?service=http://system2.com（不需要额外信息），此时，就变成了浏览器与http://sso.com站点之间的会话，这个会话因为系统1登录的原因已经被标记为已登录，所以认证中心取一块令牌，根据service参数回跳，并附上令牌，回跳地址：http://system2.com?token=token）


- 说一下你项目中的权限设计？
  

- SPA应用第一次加载获取打包文件太多如何优化？ 如何异步加载？
  

- 知道async ， await的原理吗？了解Generator吗 
  async\await的原理参见：(http://www.ruanyifeng.com/blog/2015/05/async.html)
  generator参见：（http://www.ruanyifeng.com/blog/2015/04/generator.html）（https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Iterators_and_Generators）
  

- truck函数? 写出符合下面输出的函数？
  
    ```
    func(1)(2)(3).valueOf() //6
    func(3)(4)(3).valueOf() //10
    func(1)(2，5).valueOf() //8
    ```


- 什么是函数式编程？什么是不可变数据结构？ 有什么用该怎么用？
    
    https://www.zhihu.com/question/28016223

    https://github.com/xufei/blog/issues/19

    不可变数据结构的大致理念是，任何一种赋值，都应当被转化成复制，不存在指向同一个地方的引用。比如说：

    ```
    var a = 1;
    var b = a;
    b = 2;
    console.log(a==b);
    ```

    这个我们都知道，b跟a的内存地址是不一致的，简单类型的赋值会进行复制，所以a跟b不相等。但是：

    ```
    var a = {
        counter : 1
    };
    var b = a;
    b.counter++;
    console.log(a.counter==b.counter);
    ```
    这时候因为a和b指向相同的内存地址，所以只要修改了b的counter，a里面的counter也会跟着变。Immutable Data的理念是，我能不能在这种赋值情况下，直接把原来的a完全复制一份给b，然后以后大家各自变各自的，互相不影响。

  