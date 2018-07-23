## <a name='js'>JavaScript</a>

#http://javascript.ruanyifeng.com/

-  介绍js的基本数据类型。

		 Undefined、Null、Boolean、Number、String、
		 ECMAScript 2015 新增:Symbol(创建后独一无二且不可变的数据类型 )

-  介绍js有哪些内置对象？

		Object 是 JavaScript 中所有对象的父对象

		数据封装类对象：Object、Array、Boolean、Number 和 String
		其他对象：Function、Arguments、Math、Date、RegExp、Error

		参考：http://www.ibm.com/developerworks/cn/web/wa-objectsinjs-v1b/index.html

-  说几条写JavaScript的基本规范？

		1.不要在同一行声明多个变量。
		2.请使用 ===/!==来比较true/false或者数值
		3.使用对象字面量替代new Array这种形式
		4.不要使用全局函数。
		5.Switch语句必须带有default分支
		6.函数不应该有时候有返回值，有时候没有返回值。
		7.For循环必须使用大括号
		8.If语句必须使用大括号
		9.for-in循环中的变量 应该使用var关键字明确限定作用域，从而避免作用域污染。

-  JavaScript原型，原型链 ? 有什么特点？（https://github.com/jawil/blog/issues/13）

    先看几个定义：
    1. 构造器： 创建和初始化其他对象的函数对象
    2. 函数： 标准内置构造器Function的一个实例 ， 除了可以包含属性， 还可以包含可执行代码
    3. 对象： 属性的集合， 有一个原型对象， 该原型对象可以是空值
    4. 原型： 为其他对象提供共享属性的对象， 当构造函数创建一个对象时，为了该对象共享其属性， 会给该对象一个隐藏的属性_proto_指向其原型prototype , 通过构造器的prototype属性或者生成的          对象的_proto_可以取到这个原型对象
    5. prototype： 只有函数才有prototype(原型)属性 , 这个是在函数声明的时候由js引擎生成的一个空对象，只包含了constructor和__proto__属性。prototype对象是实现面向对象的一个重要机制。每个函数也是一个实例对象，它们对应 的类就是Function，每个函数对象都具有一个子对象prototype。prototype 表示了该函数的原型，prototype表示了一个类的属性的集合。当通过new来生成一个类的对象时，prototype对象的属性就会成为实例化对象的属性。
    6. __proto__: 每个js对象都有一个原型对象 ，从这个原型对象那继承属性和方法 ， _proto_就是对象和它的原型对象建立连接的乔梁

    ```
    var F = function(){}     //和 var F = new Function(arg1, arg2 ,..., body) 效果是一样的
    var f = new F()
    f.__proto__  === F.prototype   //返回true
	F.__proto__ === Function.prototype  //返回true , 函数是Function构造器的一个实例
	Function.prototype.__proto__ === Object.prototype  // Function.prototype 的原型也是 Object.prototype
    F.prototype.__proto__ === Object.prototype  // 返回true


    var A = {name: 'cj'}
    var a = Object.create(A)  
    var b.__proto__ = A
    a.__proto__ === A  //返回true
    b.__proto__ === a.__proto__  === Object.getPrototypeOf(a) === Object.getPrototypeOf(b)  //返回true
	A.__proto__ === Object.prototype （对象的最顶层原型总是 Object.prototype）
    

    var one = {}
    var two = new Object()
    one.__proto__ === two.__proto__  //返回true
    one.__proto__ === Object.prototype   //返回true
    two.__proto__ === Object.prototype   //返回true


    F.__proto__ === Function.prototype  // 说明F是Function的一个实例
    Function.__proto__=== Function.prototype;//true  但是不能认为Function是Function的一个实例


    Object.__proto__ === Function.prototype   //返回true
    Function.__proto__=== Function.prototype; //返回true
    Function.prototype.__proto__ === Object.prototype //true
    Object.prototype.__proto__ == null   
    ```

    结论：先有 Object.prototype（原型链顶端），Function.prototype 继承 Object.prototype 而产生，最后，Function 和 Object 和其它构造函数继承 Function.prototype 而产生。   
    所以根据之前的定义， 实例是某个类的具象化， 对象是一组属性的集合， 因此实例都是对象，而对象（比如说Object.prototype， 因为它不是任何类的实例）不全是实例。
    这已经某种程度上解开了鸡和蛋的问题：Object.prototype是对象，但它不是通过Object函数创建的。Object.prototype谁创建的，它是v8引擎（假设用的都是chrome浏览器）按照ECMAScript规范创造的一个对象。

	通俗的理解这几个的关系：

	JavaScript引擎是个工厂。
	最初，工厂做了一个最原始的产品原型。
	这个原型叫Object.prototype，本质上就是一组无序key-value存储（{}）

	之后，工厂在Object.prototype的基础上，研发出了可以保存一段“指令”并“生产产品”的原型产品，叫函数。
	起名为Function.prototype，本质上就是[Function: Empty]（空函数）

	为了规模化生产，工厂在函数的基础上，生产出了两个构造器：
	生产函数的构造器叫Function，生产kv存储的构造器叫Object。

	你在工厂定制了一个产品，工厂根据Object.prototype给你做了一个Foo.prototype , 相当于产品的原型。
	然后工厂发现你定制的产品很不错。就在Function.prototype的基础上做了一个Foo的构造器，叫Foo ，相当于产品的生产线 ， 这个生产线根据Foo.prototype这个原型进行生产， 产出Foo的实例对象。

	工厂在每个产品（实例对象）上打了个标签__proto__，以标明这个产品是从哪个原型生产的。
	为原型打了个标签constructor，标明哪个构造器可以依照这个原型生产产品。
	为构造器打了标签prototype，标明这个构造器可以从哪个原型生产产品。

	```
	var F = function(){}
	F.prototype.constructor.prototype === F.prototype
	```

	所以，我觉得先有Function还是Object，就看工厂先造谁了。其实先做哪个都无所谓。因为在你定制之前，他们都做好了。



-  JavaScript有几种类型的值？，你能画一下他们的内存图吗？

		栈：原始数据类型（Undefined，Null，Boolean，Number、String）
		堆：引用数据类型（对象、数组和函数）

		两种类型的区别是：存储位置不同；
		原始数据类型直接存储在栈(stack)中的简单数据段，占据空间小、大小固定，属于被频繁使用数据，所以放入栈中存储；
		引用数据类型存储在堆(heap)中的对象,占据空间大、大小不固定。如果存储在栈中，将会影响程序运行的性能；引用数据类型在栈中存储了指针，该指针指向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体

	![Stated Clearly Image](http://www.w3school.com.cn/i/ct_js_value.gif)

- 如何将字符串转化为数字，例如'12.3b'?

		* parseFloat('12.3b');
		* 正则表达式，'12.3b'.match(/(\d)+(\.)?(\d)+/g)[0] * 1, 但是这个不太靠谱，提供一种思路而已。

- 如何将浮点数点左边的数每三位添加一个逗号，如12000000.11转化为『12,000,000.11』? (http://javascript.ruanyifeng.com/stdlib/regexp.html)

		function commafy(num){
			return num && num
				.toString()
				.replace(/(\d)(?=(\d{3})+\.)/g, function($1, $2 , $3 , $4 , $5){
                    console.log('$1' , $1)
                    console.log('$2' , $2)
                    console.log('$3' , $3)
                    console.log('$4' , $4) 
                    console.log('$5' , $5) 
					return $2 + ',';
				});
		}

- 如何实现数组的随机排序？
		
		方法一：
			var arr = [1,2,3,4,5,6,7,8,9,10];
			function randSort1(arr){
				for(var i = 0,len = arr.length;i < len; i++ ){
					var rand = parseInt(Math.random()*len);
					var temp = arr[rand];
					arr[rand] = arr[i];
					arr[i] = temp;
				}
				return arr;
			}
			console.log(randSort1(arr));
			
		方法二：
			var arr = [1,2,3,4,5,6,7,8,9,10];
			function randSort2(arr){
				var mixedArray = [];
				while(arr.length > 0){
					var randomIndex = parseInt(Math.random()*arr.length);
					mixedArray.push(arr[randomIndex]);
					arr.splice(randomIndex, 1);
				}
				return mixedArray;
			}
			console.log(randSort2(arr));

		方法三：
			var arr = [1,2,3,4,5,6,7,8,9,10];
			arr.sort(function(){
				return Math.random() - 0.5;
			})
			console.log(arr);




-  new操作符具体干了什么呢?(https://zhuanlan.zhihu.com/p/23987456?utm_medium=social&utm_source=wechat_session)

	1、创建新对象 obj
	2、设置该对象的原型对象为构造函数的 prototype
	3、Person.apply(obj)  (函数内部的this指向新对象 ，并且属性和方法加入到this引用的对象中 ， 这一步使用了apply ， 函数此时被执行了一遍)
	4、返回这个新的对象 (如果函数return了一个对象类型的结果 ， 即typeof 为 object， 则不会返回这个新对象)


-  javascript创建对象的几种方式？

	1. var a = {name:'cj'}

	2. var a = new Object({name:'cj'})

	3. var A = function(){this.name = 'cj'}
		var A = new A()
		
	4. var A = {name:'cj'}
		var a = Object.create(A) 


- JS创建对象的方法 ？ （https://blog.csdn.net/xi_2130/article/details/50110493）（https://github.com/mqyqingfeng/Blog/issues/15）


- JS继承 ？ （https://github.com/mqyqingfeng/Blog/issues/16） 

	1. 原型链继承
	   	缺点是：所有实例都共享原型上的属性 ， 且构造时无法给父级传参
	2. 构造函数继承
		缺点是：所有实例都会构建一遍方法
	3. 组合继承
		克服了前两种的缺点，但是父级构造器会调用两次
	4. 原型继承（类似于Object.create）
		缺点：和原型链继承方式一样
	4. 寄生式继承
	 	在原型继承基础上 ，对对象做了功能增强
	5. 寄生组合式继承
		在组合继承的基础上改进，避免父级构造函数执行两次


- JavaScript继承的几种实现方式？
  - 参考：[构造函数的继承](http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_inheritance.html)，[非构造函数的继承](http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_inheritance_continued.html)；

	1、构造函数绑定

	2、prototype继承及其改进方式

	3、拷贝继承


-  JS怎么实现一个类。怎么实例化这个类 （https://blog.csdn.net/xi_2130/article/details/50276025）



-  Javascript作用链域?

		(https://leohxj.gitbooks.io/front-end-database/javascript-advance/scope-chain.html),
		(https://segmentfault.com/a/1190000000533094)
		(http://www.cnblogs.com/tomxu/archive/2012/01/18/2312463.html)

		全局函数无法查看局部函数的内部细节，但局部函数可以查看其上层的函数细节，直至全局细节。
		当需要从局部函数查找某一属性或方法时，如果当前作用域没有找到，就会上溯到上层作用域查找，
		直至全局函数，这种组织形式就是作用域链。

-  谈谈This对象的理解。

	```
  	在没有箭头函数的情况下，this是动态绑定的，由函数的调用位置决定， 首先如果new调用，即调用了函数构造器，则this指向这个新创建的对象 ； 如果使用了函数对象的call、apply方法，则指向特定的对象 ； 如果是调用了某个对象的方法， 则指向这个对象 ；如果是独立调用，则指向调用位置所在的包含环境对象；

	有箭头函数：箭头函数使得this是词法绑定， 始终指向函数调用位置所在包含环境对象, 不再被调用方式影响（call/apply/bind）。
	```

-  eval是做什么的？

		它的功能是把对应的字符串解析成JS代码并运行；
		应该避免使用eval，不安全，非常耗性能（2次，一次解析成js语句，一次执行）。
		由JSON字符串转换为JSON对象的时候可以用eval，var obj =eval('('+ str +')');

-  什么是window对象? 什么是document对象?

		window对象是指浏览器打开的窗口。
		document对象是Documentd对象（HTML 文档对象）的一个只读引用，window对象的一个属性。

-  null，undefined 的区别？

		null 		表示一个对象是“没有值”的值，也就是值为“空”；
		undefined 	表示一个变量声明了没有初始化(赋值)；

		undefined不是一个有效的JSON，而null是；
		undefined的类型(typeof)是undefined；
		null的类型(typeof)是object；


		Javascript将未赋值的变量默认值设为undefined；
		Javascript从来不会将变量设为null。它是用来让程序员表明某个用var声明的变量时没有值的。

	    typeof undefined
			//"undefined"
			undefined :是一个表示"无"的原始值或者说表示"缺少值"，就是此处应该有一个值，但是还没有定义。当尝试读取时会返回 undefined；
			例如变量被声明了，但没有赋值时，就等于undefined

		typeof null
			//"object"
			null : 是一个对象(空对象, 没有任何属性和方法)；
			例如作为函数的参数，表示该函数的参数不是对象；

		注意：
			在验证null时，一定要使用　=== ，因为 == 无法分别 null 和　undefined
 			null == undefined // true
  			null === undefined // false

		再来一个例子：

			null
			Q：有张三这个人么？
			A：有！
			Q：张三有房子么？
			A：没有！

			undefined
			Q：有张三这个人么？
			A：有！
			Q: 张三有多少岁？
			A: 不知道（没有被告诉）

	参考阅读：[undefined与null的区别](http://www.ruanyifeng.com/blog/2014/03/undefined-vs-null.html)


-  写一个通用的事件侦听器函数。 (https://leohxj.gitbooks.io/front-end-database/javascript-basic/events.html)

			// event(事件)工具集，来源：github.com/markyun
			markyun.Event = {
				// 页面加载完成后
				readyEvent : function(fn) {
					if (fn==null) {
						fn=document;
					}
					var oldonload = window.onload;
					if (typeof window.onload != 'function') {
						window.onload = fn;
					} else {
						window.onload = function() {
							oldonload();
							fn();
						};
					}
				},
				// 视能力分别使用dom0||dom2||IE方式 来绑定事件
				// 参数： 操作的元素,事件名称 ,事件处理程序
				addEvent : function(element, type, handler) {
					if (element.addEventListener) {
						//事件类型、需要执行的函数、是否捕捉
						element.addEventListener(type, handler, false);
					} else if (element.attachEvent) {
						element.attachEvent('on' + type, function() {
							handler.call(element);
						});
					} else {
						element['on' + type] = handler;
					}
				},
				// 移除事件
				removeEvent : function(element, type, handler) {
					if (element.removeEventListener) {
						element.removeEventListener(type, handler, false);
					} else if (element.datachEvent) {
						element.detachEvent('on' + type, handler);
					} else {
						element['on' + type] = null;
					}
				},
				// 阻止事件 (主要是事件冒泡，因为IE不支持事件捕获)
				stopPropagation : function(ev) {
					if (ev.stopPropagation) {
						ev.stopPropagation();
					} else {
						ev.canccancelBubble = true;
					}
				},
				// 取消事件的默认行为
				preventDefault : function(event) {
					if (event.preventDefault) {
						event.preventDefault();
					} else {
						event.returnValue = false;
					}
				},
				// 获取事件目标
				getTarget : function(event) {
					return event.target || event.srcElement;
				},
				// 获取event对象的引用，取到事件的所有信息，确保随时能使用event；
				getEvent : function(e) {
					var ev = e || window.event;
					if (!ev) {
						var c = this.getEvent.caller;
						while (c) {
							ev = c.arguments[0];
							if (ev && Event == ev.constructor) {
								break;
							}
							c = c.caller;
						}
					}
					return ev;
				}
			};

-  ["1", "2", "3"].map(parseInt) 答案是多少？

		parseInt() 函数能解析一个字符串，并返回一个整数，需要两个参数 (val, radix)，
		其中 radix 表示要解析的数字的基数。【该值介于 2 ~ 36 之间，并且字符串中的数字不能大于radix才能正确返回数字结果值】; 省略该参数或其值为 ‘0‘，则数字将以 10 为基础来解析
		但此处 map 传了 3 个 (element, index, array),我们重写parseInt函数测试一下是否符合上面的规则。

		function parseInt(str, radix) {
		    return str+'-'+radix;
		};
		var a=["1", "2", "3"];
		a.map(parseInt);  // ["1-0", "2-1", "3-2"] 不能大于radix

		因为二进制里面，没有数字3,导致出现超范围的radix赋值和不合法的进制解析，才会返回NaN
		所以["1", "2", "3"].map(parseInt) 答案也就是：[1, NaN, NaN]

		详细解析：http://blog.csdn.net/justjavac/article/details/19473199

-  事件是？IE与火狐的事件机制有什么区别？ 如何阻止冒泡？

		 1. 我们在网页中的某个操作（有的操作对应多个事件）。例如：当我们点击一个按钮就会产生一个事件。是可以被 JavaScript 侦测到的行为。
		 2. 事件处理机制：IE是事件冒泡、Firefox同时支持两种事件模型，也就是：捕获型事件和冒泡型事件；
		 3. ev.stopPropagation();（旧ie的方法 ev.cancelBubble = true;）


-  什么是闭包（closure），为什么要用它？（https://github.com/dwqs/blog/issues/18）

	闭包是指有权访问另外一个函数作用域中的变量的函数 ； 外层函数执行完，它的变量理应全部销毁，但因为闭包的存在，之后执行此内部函数，通过它仍能访问到外层函数的变量，这就是闭包的特点。 而它本质源于，内部函数创建时，会保存当前环境的作用域链（内部属性[[__scope__]]中），且函数被保留下来，引擎不会对外层环境的变量对象进行销毁。 创建闭包的最常见的方式就是在一个函数内创建另一个函数，通过另一个函数访问这个函数的局部变量,利用闭包可以突破作用链域，将函数内部的变量和方法传递到外部。

	这概念有点绕，拆分一下。从概念上说，闭包有两个特点：

	1. 函数
	2. 能访问另外一个函数作用域中的变量


	闭包的作用：
	1. 实现私有变量
	2. 改变函数的参数个数，把多参数的函数改成单参数的函数
	 ```
	 function make_pow2(n){
		 return function(x){
			 return math.pow(x,n)
		 }
	 }
	 let pow2 = make_pow(2)
	 let result = pow2(10)
	 ```


-  javascript 代码中的"use strict";是什么意思 ? 使用它区别是什么？

		use strict是一种ECMAscript 5 添加的（严格）运行模式,这种模式使得 Javascript 在更严格的条件下运行,

		使JS编码更加规范化的模式,消除Javascript语法的一些不合理、不严谨之处，减少一些怪异行为。
		默认支持的糟糕特性都会被禁用，比如不能用with，也不能在意外的情况下给全局变量赋值;
		全局变量的显示声明,函数必须声明在顶层，不允许在非函数代码块内声明函数,arguments.callee也不允许使用；
		消除代码运行的一些不安全之处，保证代码运行的安全,限制函数中的arguments修改，严格模式下的eval函数的行为和非严格模式的也不相同;

		提高编译器效率，增加运行速度；
		为未来新版本的Javascript标准化做铺垫。


-  如何判断一个对象是否属于某个类？

		使用instanceof （待完善）
		if(a instanceof Person){
			alert('yes');
		}

- typeof ？ （https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/typeof）
  
  返回结果有7 ：string 、number 、boolean 、undefined 、object 、function 、symbol；



-  用原生JavaScript的实现过什么功能吗？

	1. ajax方法封装， 支持jsonp请求 https://juejin.im/entry/589921640ce46300560ef894
	2. placeholder的pollfill方案
	3. 全屏滚动
	   父元素设置100vh高度，overflow为hidden； 若干个子元素设置100vh高度，设置css属性transition：transform 1s， 给父元素绑定wheel事件，通过e.deltaY判断上下滚动，然后给子元素设置transform:translateY（-200%）这样的属性 ； 如果是触屏，给父元素绑定touchstart和touchmove事件，通过e.clientY比较是否滚动
	4. Tabs
	5. CSS Wave


-  Javascript中，有一个函数，执行时对象查找时，永远不会去查找原型，这个函数是？

		hasOwnProperty

		javaScript中hasOwnProperty函数方法是返回一个布尔值，指出一个对象是否具有指定名称的属性。此方法无法检查该对象的原型链中是否具有该属性；该属性必须是对象本身的一个成员。
		使用方法：
		object.hasOwnProperty(proName)
		其中参数object是必选项。一个对象的实例。
		proName是必选项。一个属性名称的字符串值。

		如果 object 具有指定名称的属性，那么JavaScript中hasOwnProperty函数方法返回 true，反之则返回 false。

-  JSON 的了解？

		JSON(JavaScript Object Notation) 是一种轻量级的数据交换格式。
		它是基于JavaScript的一个子集。数据格式简单, 易于读写, 占用带宽小
        如：{"age":"12", "name":"back"}

        JSON字符串转换为JSON对象:
		var obj =eval('('+ str +')');
		var obj = str.parseJSON();
		var obj = JSON.parse(str);

		JSON对象转换为JSON字符串：
		var last=obj.toJSONString();
		var last=JSON.stringify(obj);

-  `[].forEach.call($$("*"),function(a){a.style.outline="1px solid #"+(~~(Math.random()*(1<<24))).toString(16)})` 能解释一下这段代码的意思吗？


-  js延迟加载的方式有哪些？（https://www.ibm.com/developerworks/cn/web/1308_caiys_jsload/index.html）

	1. defer和async、动态创建DOM方式（用得最多）、按需异步载入js； 
	2. defer的加载不阻塞页面渲染， 并且遇到defer标签的script就开始加载， 只是暂时不执行，等到页面所有元素加载完毕之后才执行， 并且是在window.onload事件之前执行，按照顺序执行,所以下面代码的输出是:script > defer > load
   	```
	   <script type="text/javascript" defer>
			alert("defer");
		</script>
		<script type="text/javascript">
			alert("script");
		</script>
		<script type="text/javascript">
			window.onload = function(){
				alert("load");
			};
		</script>
	```
	3. async的加载也不阻塞页面渲染，只是下载完毕之后就执行， 而不是等待页面加载完毕，所以不能保证执行的顺序


- window.onload事件和jquery的document.ready()的区别？（https://www.jianshu.com/p/c572a7675c29）

-  Ajax 是什么? 如何创建一个Ajax？

		ajax的全称：Asynchronous Javascript And XML。
		异步传输+js+xml。
		所谓异步，在这里简单地解释就是：向服务器发送请求的时候，我们不必等待结果，而是可以同时做其他的事情，等到有了结果它自己会根据设定进行后续操作，与此同时，页面是不会发生整页刷新的，提高了用户体验。

		(1)创建XMLHttpRequest对象,也就是创建一个异步调用对象
		(2)创建一个新的HTTP请求,并指定该HTTP请求的方法、URL及验证信息
		(3)设置响应HTTP请求状态变化的函数
		(4)发送HTTP请求
		(5)获取异步调用返回的数据
		(6)使用JavaScript和DOM实现局部刷新

- 说下web缓存？ （https://segmentfault.com/a/1190000006741200）（http://imweb.io/topic/5795dcb6fb312541492eda8c）

	1. 强缓存
    http1.0时代只有pragma和Expires ， 当pragma字段值为no-cache的时候（事实上现在RFC中也仅标明该可选值），会知会客户端不要对该资源读缓存，即每次都得向服务器发一次请求才行。并且pragma优先于Expires

	2. 协商缓存

	3. CDN缓存



- Ajax 解决浏览器缓存问题？ 

（https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching?hl=zh-cn）

（https://www.cnblogs.com/lyzg/p/5125934.html）

（https://www.jianshu.com/p/d01ffaa2c426）

		1、在ajax发送请求前加上 anyAjaxObj.setRequestHeader("If-Modified-Since","0")。

        2、在ajax发送请求前加上 anyAjaxObj.setRequestHeader("Cache-Control","no-cache")。

        3、在URL后面加上一个随机数： "fresh=" + Math.random();。

        4、在URL后面加上时间戳："nowtime=" + new Date().getTime();。

        5、如果是使用jQuery，直接这样就可以了 $.ajaxSetup({cache:false})。这样页面的所有ajax都会执行这条语句就是不需要保存缓存记录。


-  那些操作会造成内存泄漏？

	内存泄漏指任何对象在您不再拥有或需要它之后仍然存在。
	垃圾回收器定期扫描对象，并计算引用了每个对象的其他对象的数量。如果一个对象的引用数量为 0（没有其他对象引用过该对象），或对该对象的惟一引用是循环的，那么该对象的内存即可回收。

	1. 错误的全局变量申明
		
		```
			function foo(){
				bar = 'asdas'
			}
			foo()
		```
		这段代码执行之后bar成为了全局变量，不会被回收

	2. 数据结构中保有的引用（es6中有了weakmap，可以用来解决这个问题）
		
		```
		var map = {
			node : document.getElementById('node'),
			text : document.getElementById('text')
		}
		document.body.removeChild(document.getElementById('node'))
		```

	3. 闭包导致对父级作用域中变量的引用

	4. 被遗忘的构造器或者回调函数

		```
		var resource = await getData()
		setInterval(function(){
			var node = document.getElementById('node')
			if(node){
				node.innerHtml = JSON.stringfy(resource)
			}
		}, 1000)
		document.body.removeChild(document.getElementById('node'))
		```

		node节点销毁后，定时器实际上已经没有用了，但因为没有销毁所以始终保持对resource的引用 ， resource有可能是很大的数据集，造成严重的数据泄露。
		另外 ， IE6以前的版本不会自动销毁已经不存在的dom节点上绑定的监听器 ， 所以在去除dom节点的时候 ，始终手动接触监听器是一个好的习惯，

		```
		var element = document.getElementById('button');
		function onClick(event) {
			element.innerHtml = 'text';
		}
		element.addEventListener('click', onClick);
		element.removeEventListener('click', onClick);
		element.parentNode.removeChild(element);
		```



        setTimeout 的第一个参数使用字符串而非函数的话，会引发内存泄漏。




-  页面编码和被请求的资源编码如果不一致如何处理？

-  服务器代理转发时，该如何处理cookie？

		nginx
	

-  模块化开发怎么做？

	 [ 立即执行函数](http://benalman.com/news/2010/11/immediately-invoked-function-expression/),不暴露私有成员

		    var module1 = (function(){
		    　　　　var _count = 0;
		    　　　　var m1 = function(){
		    　　　　　　//...
		    　　　　};
		    　　　　var m2 = function(){
		    　　　　　　//...
		    　　　　};
		    　　　　return {
		    　　　　　　m1 : m1,
		    　　　　　　m2 : m2
		    　　　　};
		    　　})();

	（待完善）

-  AMD（Modules/Asynchronous-Definition）、CMD（Common Module Definition）规范区别？ (https://www.zhihu.com/question/20351507)

	> AMD 规范在这里：https://github.com/amdjs/amdjs-api/wiki/AMD

	> CMD 规范在这里：https://github.com/seajs/seajs/issues/242

		Asynchronous Module Definition，异步模块定义，所有的模块将被异步加载，模块加载不影响后面语句运行。所有依赖某些模块的语句均放置在回调函数中。

		 区别：

		    1. 对于依赖的模块，AMD 是提前执行，CMD 是延迟执行。不过 RequireJS 从 2.0 开始，也改成可以延迟执行（根据写法不同，处理方式不同）。CMD 推崇 as lazy as possible.
		    2. CMD 推崇依赖就近，AMD 推崇依赖前置。看代码：

		// CMD
		define(function(require, exports, module) {
		    var a = require('./a')
		    a.doSomething()
		    // 此处略去 100 行
		    var b = require('./b') // 依赖可以就近书写
		    b.doSomething()
		    // ...
		})

		// AMD 默认推荐
		define(['./a', './b'], function(a, b) { // 依赖必须一开始就写好
		    a.doSomething()
		    // 此处略去 100 行
		    b.doSomething()
		    // ...
		})

- seaJs和requireJs的异同 ？ (https://www.douban.com/note/283566440/) （http://www.ruanyifeng.com/blog/2012/11/require_js.html）

- CommonJs 、 UMD 、ES6模块机制？ 

	(http://javascript.ruanyifeng.com/nodejs/module.html)
	(https://segmentfault.com/a/1190000004873947)
	(http://es6.ruanyifeng.com/#docs/module)

	1. ES6的export语句输出的接口，与其对应的值是动态绑定关系，即通过该接口，可以取到模块内部实时的值。
	这一点与 CommonJS 规范完全不同。CommonJS 模块输出的是值的缓存，不存在动态更新

	2. CommonJs的require是动态加载（运行时加载），因此可以在表达式、if语句、或者函数中使用， 而es6的import为静态（编译时）加载 ，只能放在顶层，不允许出现在表达式中
       ```
	   	if(x === 1){
			var a = require('./a')
		}
	   ```
	3. CommonJs中的exports是模块自身module的一个属性对象（指向module.exports） ， 在对外暴露接口的时候使用 exports.XXX = YYY 或者 module.exports = XXX 的方式  ； 
		而ES6中的export和import都是关键字，是命令 ， 对外暴露接口的时候使用 export  var m = 'ASDA'  的方式


-  requireJS的作用和核心原理是什么？（如何动态加载的？如何避免多次加载的？如何
	缓存的？）

		（1）实现js文件的异步加载，避免网页失去响应；

	　　（2）管理模块之间的依赖性，便于代码的编写和维护。

		参考：http://annn.me/how-to-realize-cmd-loader/

-  JS模块加载器的轮子怎么造，也就是如何实现一个模块加载器？
-  

-  谈一谈你对ECMAScript6的了解？(http://es6.ruanyifeng.com/#docs/module)

	1. 新增模块机制
	2. 自动采用严格模式， 无论有没有 use strict
	3. 新增let 、 const
		1. let、const的变量只在块级作用域有效、 
		2. 禁止变量提升
			```
			// var 的情况
			console.log(foo); // 输出undefined
			var foo = 2;

			// let 的情况
			console.log(bar); // 报错ReferenceError
			let bar = 2;
			```
		3. 出现暂时性死区
			```
			var tmp = 123;
			if (true) {
				tmp = 'abc'; // ReferenceError
				let tmp;
			}
			```
		4. 不允许重复声明统同名变量
	4. 支持解构赋值
	5. 提供了新的原始数据类型 Symbol
	6. 新增了promise
	7. 引入了class的概念
	8. 提供了Proxy、Reflect等新的API
	9.  新增map 、 set数据结构


- documen.write和 innerHTML的区别

	1. write是DOM方法,向文档写入HTML表达式或JavaScript代码，可列出多个参数，参数被顺序添加到文档中 ；innerHTML是DOM属性,设置或返回调用元素开始结束标签之间的HTML元素。
	2. 两者都可向页面输出内容,innerHTML比document.write更灵活。
	当文档加载时调用document.write直接向页面输出内容，文档加载结束后调用document.write输出内容会重写整个页面。

- DOM操作——怎样添加、移除、移动、复制、创建和查找节点?

		（1）创建新节点
		  createDocumentFragment()    //创建一个DOM片段
		  createElement()   //创建一个具体的元素
		  createTextNode()   //创建一个文本节点
		（2）添加、移除、替换、插入
		  appendChild()
		  removeChild()
		  replaceChild()
		  insertBefore() //在已有的子节点前插入一个新的子节点
		（3）查找
		  getElementsByTagName()    //通过标签名称
		  getElementsByName()    //通过元素的Name属性的值(IE容错能力较强，会得到一个数组，其中包括id等于name值的)
		  getElementById()    //通过元素Id，唯一性
		  element.querySelector() //匹配指定选择器的第一个元素
		  element.querySelectorAll()

-  .call() 和 .apply() 和 bind() 的区别？

	1. 三个函数的参数不同：call(obj , arg1 , arg2 , ....) ,  apply(obj , [arg1 , arg2 ,...])  , bind(obj , arg1 ,arg2 ,...) 
	2. 返回值不同： call 、 apply会使函数立即执行 ， bind是返回一个改变了this指向的函数 ， 并且bind如果传入了函数参数 ， 则会往后排
    ```
	function func(a, b, c) {
		console.log(a, b, c);
	}
	var func1 = func.bind(null,'linxin');

	func('A', 'B', 'C');            // A B C
	func1('A', 'B', 'C');           // linxin A B
	func1('B', 'C');                // linxin B C
	func.call(null, 'linxin');      // linxin undefined undefined
	```


-  数组和对象有哪些原生方法，列举一下？(https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object)
   
   1. 数组： forEach \ map \ every \ filter \ find \  some \ splice \ slice \  sort  \ push \  pop \  reverse \ concat \ join
   
   2. 对象构造器： Object.keys \ Object.entries \ Object.entries \ Object.freeze \ Object.assign \ Object.create \ Object.getOwnPropertySymbol \ Object.getPrototypeOf  \  Object.defineProperty
   3. 对象原型 ： Object.prototype.valueOf() \ Object.prototype.hasOwnProperty \ Object.prototype.isProtptypeOf \ Object.prototype.toString




-  ECMAScript6 怎么写class么，为什么会出现class这种东西? (http://es6.ruanyifeng.com/#docs/class)

	类实际上是原型构造器组合方式生成对象的语法糖 ， class中的constructor相当于构造器， class中定义的方法实际上是挂在prototype上的， 相当于原型链构造，所以说他是一个语法糖。
	```
		class A{
			constructor(){
				this.name='cj'
			}

			func(){}
		}
		//等效于
		function B(){
			this.name='cj'
		}
		B.prototype.func = function(){}

		//只是类中的方法是不可枚举的
		Object.keys(A.prototype) 返回[]
		Object.getOwnPropertyNames(A.prototype) 返回['func']

		Object.keys(B.prototype) 返回['func']
		Object.keys(Object.getOwnPropertyNames(B.prototype)) 返回['func' , 'constructor']
	```

	和构造函数有什么区别：
	1. 类的内部定义的方法是不可枚举的
	2. 声明类的实例对象必须使用new ， 而构造函数可以直接调用


-  JavaScript中的作用域与变量声明提升？(https://github.com/creeperyang/blog/issues/16)

	首先js中一个变量名进入上下文有四种方式，按照顺序依次是：
	1. language defined , 所有的函数作用域都会有this、arguments两个变量，全局作用域没有arguments
	2. formal parameters（形参） ， 函数有形参， 形参会添加到函数作用域里
	3. function declarations（函数声明） ， 以函数声明形式，比如function foo(){}
	4. variable declarations（变量声明） ， 包括函数表达式

	函数声明和变量声明会提前到函数最前面， 并且函数声明总是在前面， 而且提前打印的话函数声明是可以打印出来的 ， 而变量声明打印的是undefined


-  如何编写高性能的Javascript？ （http://www.alloyteam.com/2012/11/performance-writing-efficient-javascript/）
   1. 避免意外和不必要的的全局变变量
   2. dom元素被销毁时有必要手动解绑监听器
   3. 必要情况下手动消除引用 

-  JQuery的源码看过吗？能不能简单概况一下它的实现原理？

-  jQuery.fn的init方法返回的this指的是什么对象？为什么要返回this？


-  jQuery 的属性拷贝(extend)的实现原理是什么，如何实现深拷贝？

-  jquery.extend 与 jquery.fn.extend的区别？

		* jquery.extend 为jquery类添加类方法，可以理解为添加静态方法
		* jquery.fn.extend:
			源码中jquery.fn = jquery.prototype，所以对jquery.fn的扩展，就是为jquery类添加成员函数
		使用：
		jquery.extend扩展，需要通过jquery类来调用，而jquery.fn.extend扩展，所有jquery实例都可以直接调用。


-  jQuery 的队列是如何实现的？队列可以用在哪些地方？

-  谈一下Jquery中的bind(),live(),delegate(),on()的区别？

-  JQuery一个对象可以同时绑定多个事件，这是如何实现的？

-  是否知道自定义事件。jQuery里的fire函数是什么意思，什么时候用？

-  jQuery 是通过哪个方法和 Sizzle 选择器结合的？（jQuery.fn.find()进入Sizzle）

-  Jquery与jQuery UI 有啥区别？


		*jQuery是一个js库，主要提供的功能是选择器，属性修改和事件绑定等等。

		*jQuery UI则是在jQuery的基础上，利用jQuery的扩展性，设计的插件。
         提供了一些常用的界面元素，诸如对话框、拖动行为、改变大小行为等等



-  jquery 中如何将数组转化为json字符串，然后再转化回来？

jQuery中没有提供这个功能，所以你需要先编写两个jQuery的扩展：

		$.fn.stringifyArray = function(array) {
		    return JSON.stringify(array)
		}

		$.fn.parseArray = function(array) {
		    return JSON.parse(array)
		}

		然后调用：
		$("").stringifyArray(array)

-  jQuery和Zepto的区别？各自的使用场景？

-  针对 jQuery 的优化方法？

		*基于Class的选择性的性能相对于Id选择器开销很大，因为需遍历所有DOM元素。

		*频繁操作的DOM，先缓存起来再操作。用Jquery的链式调用更好。
         比如：var str=$("a").attr("href");

		*for (var i = size; i < arr.length; i++) {}
         for 循环每一次循环都查找了数组 (arr) 的.length 属性，在开始循环的时候设置一个变量来存储这个数字，可以让循环跑得更快：
         for (var i = size, length = arr.length; i < length; i++) {}



-  Zepto的点透问题如何解决？

-  jQueryUI如何自定义组件?

-  需求：实现一个页面操作不会整页刷新的网站，并且能在浏览器前进、后退时正确响应。给出你的技术实现方案？

- 如何判断当前脚本运行在浏览器还是node环境中？（阿里）

		this === window ? 'browser' : 'node';

		通过判断Global对象是否为window，如果不为window，当前脚本没有运行在浏览器中

-  移动端最小触控区域是多大？

-  jQuery 的 slideUp动画 ，如果目标元素是被外部事件驱动, 当鼠标快速地连续触发外部元素事件, 动画会滞后的反复执行，该如何处理呢?

		jquery stop(): 如：$("#div").stop().animate({width:"100px"},100);

-  把 Script 标签 放在页面的最底部的body封闭之前 和封闭之后有什么区别？浏览器会如何解析它们？

-  移动端的点击事件的有延迟，时间是多久，为什么会有？ 怎么解决这个延时？（click 有 300ms 延迟,为了实现safari的双击事件的设计，浏览器要知道你是不是要双击操作。）

-  知道各种JS框架(Angular, Backbone, Ember, React, Meteor, Knockout...)么? 能讲出他们各自的优点和缺点么?

-  Underscore 对哪些 JS 原生对象进行了扩展以及提供了哪些好用的函数方法？

-  解释JavaScript中的作用域与变量声明提升？



-  JQuery一个对象可以同时绑定多个事件，这是如何实现的？

		* 多个事件同一个函数：
			$("div").on("click mouseover", function(){});
		* 多个事件不同函数
			$("div").on({
				click: function(){},
				mouseover: function(){}
			});

-  Node.js的适用场景？

-  (如果会用node)知道route, middleware, cluster, nodemon, pm2, server-side rendering么?

-  解释一下 Backbone 的 MVC 实现方式？

- 什么是“前端路由”?什么时候适合使用“前端路由”? “前端路由”有哪些优点和缺点?

- 知道什么是webkit么? 知道怎么用浏览器的各种工具来调试和debug代码么?

		Chrome,Safari浏览器内核。

- 如何测试前端代码么? 知道BDD, TDD, Unit Test么? 知道怎么测试你的前端工程么(mocha, sinon, jasmin, qUnit..)?

	https://gist.github.com/KevinHu-1024/027595cb7799cbddcb8c89db22bdfa7b


- 前端templating(Mustache, underscore, handlebars)是干嘛的, 怎么用?

- 简述一下 Handlebars 的基本用法？

- 简述一下 Handlerbars 的对模板的基本处理流程， 如何编译的？如何缓存的？

- 用js实现千位分隔符?(来源：[前端农民工](http://div.io/topic/744)，提示：正则+replace)


		参考：http://www.tuicool.com/articles/ArQZfui
		function commafy(num) {
		    return num && num
		        .toString()
		        .replace(/(\d)(?=(\d{3})+\.)/g, function($0, $1) {
		            return $1 + ",";
		        });
		}
		
		console.log(commafy(1234567.90)); //1,234,567.90



- 检测浏览器版本版本有哪些方式？

		功能检测、userAgent特征检测

		比如：navigator.userAgent
		//"Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36
		  (KHTML, like Gecko) Chrome/41.0.2272.101 Safari/537.36"


- What is a Polyfill 和 shim的区别 ?

		polyfill 是“在旧版浏览器上复制标准 API 的 JavaScript 补充”,可以动态地加载 JavaScript 代码或库，在不支持这些标准 API 的浏览器中模拟它们。
		例如，geolocation（地理位置）polyfill 可以在 navigator 对象上添加全局的 geolocation 对象，还能添加 getCurrentPosition 函数以及“坐标”回调对象，
		所有这些都是 W3C 地理位置 API 定义的对象和函数。因为 polyfill 模拟标准 API，所以能够以一种面向所有浏览器未来的方式针对这些 API 进行开发，
		一旦对这些 API 的支持变成绝对大多数，则可以方便地去掉 polyfill，无需做任何额外工作。

		polyfill 是 shim 的一种。shim 是将不同 api 封装成一种，比如 jQuery 的 $.ajax 封装了 XMLHttpRequest 和 IE 用 ActiveXObject 方式创建 xhr 对象；polyfill 特指 shim 成的 api 是遵循标准的，其典型做法是在IE浏览器中增加 window.XMLHttpRequest ，内部实现使用 ActiveXObject。在实际中为了方便做对比，会特指 shim 的 api 不是遵循标准的，而是自己设计的。

- 做的项目中，有没有用过或自己实现一些 polyfill 方案（兼容性处理方案）？

		比如： html5shiv 、Geolocation 、Placeholder

- 我们给一个dom 和 它的父级dom 同时绑定两个点击事件，一个用捕获，一个用冒泡。会执行几次事件，会先执行冒泡还是捕获？


- 使用JS实现获取文件扩展名？

		function getFileExtension(filename) {
		  return filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2);
		}

		function getFileExtension(filename) {
		  let index =  filename.lastIndexOf(".")
		  if(index === -1){
			  return ""
		  }else{
			  return filename.slice(index)
		  }
		}
		

		String.lastIndexOf() 方法返回指定值（本例中的'.'）在调用该方法的字符串中最后出现的位置，如果没找到则返回 -1。
		对于'filename'和'.hiddenfile'，lastIndexOf的返回值分别为0和-1无符号右移操作符(»>) 将-1转换为4294967295，将-2转换为4294967294，这个方法可以保证边缘情况时文件名不变。
		String.prototype.slice() 从上面计算的索引处提取文件的扩展名。如果索引比文件名的长度大，结果为""。

- Webpack热更新实现原理? (https://zhuanlan.zhihu.com/p/30623057)

		1. Webpack编译期，为需要热更新的 entry 注入热更新代码(EventSource通信)
		2. 页面首次打开后，服务端与客户端通过 EventSource 建立通信渠道，把下一次的 hash 返回前端
		3. 客户端获取到hash，这个hash将作为下一次请求服务端 hot-update.js 和 hot-update.json的hash
		4. 修改页面代码后，Webpack 监听到文件修改后，开始编译，编译完成后，发送 build 消息给客户端
		5. 客户端获取到hash，成功后客户端构造hot-update.js script链接，然后插入主文档
		6. hot-update.js 插入成功后，执行hotAPI 的 createRecord 和 reload方法，获取到 Vue 组件的 render方法，重新 render 组件， 继而实现 UI 无刷新更新。


- 请介绍一下JS之事件防抖和节流？


#### <a name='other'>ECMAScript6 相关</a>

- Object.is() 与原来的比较操作符“ ===”、“ ==”的区别？

		两等号判等，会在比较时进行类型转换；
		三等号判等(判断严格)，比较时不进行隐式类型转换,（类型不同则会返回false）；

		Object.is(value1, value2) 在三等号判等的基础上特别处理了 NaN 、-0 和 +0 ，保证 -0 和 +0 不再相同，
		Object.is(NaN, NaN) 会返回 true ， NaN===NaN返回false
		Object.is(+0, -0) 会返回 false ， +0===-0返回false


- ES6是如何实现编译成ES5的？ （https://zhuanlan.zhihu.com/p/27289600）

    Babel的编译过程跟绝大多数其他语言的编译器大致同理，分为三个阶段：

	1. 解析：将代码字符串解析成抽象语法树
		1. 分词：将整个代码字符串分割成 语法单元 数组（语法单元：语法单元是被解析语法当中具备实际意义的最小单元）
		2. 语义分析：在分词结果的基础之上分析 语法单元之间的关系 （就是把词汇进行立体的组合，确定有多重意义的词语最终是什么意思、多个词语之间有什么关系以及又应该再哪里断句等。）

	2. 变换：对抽象语法树进行变换操作

	3. 再建：根据变换后的抽象语法树再生成代码字符串

	像我们在.babelrc里配置的presets和plugins都是在第2步工作的。

- babel的用法？ （http://coderlt.coding.me/2017/05/02/babel-readme/）

	1. babel是广泛使用的ES6转码器，将ES6代码装换为ES5
	
	2. 视情况安装babel-cli 、 babel-core 、 babel-loader、babel-preset-env 、babel-preset-2015、babel-preset-stage-2、babel-plugin-transform-runtime 、 babel-polyfill等包，然后根目录添加.babelrc文件, 这个文件是必须的， 无论是安装了babel-cli在命令行中转码还是通过webpack的babel-loader转码， 都依赖这个文件
	```
	{
		"plugins": ["transform-runtime","transform-vue-jsx","transform-decorators-legacy"],
		"presets": [
			"env",
			"stage-2"
		]
	}
	```

	3. 如果某些代码需要调用Babel的API进行转码，就要使用babel-core模块。
	var es6Code = 'let x = n => n + 1';
	var es5Code = require('babel-core').transform(es6Code, {
		presets: ['es2015']
	})
	.code;

	4. Babel默认只转换新的JavaScript句法（syntax），比如解构赋值、class 、 let和const ,而不转换新的API，比如Iterator、Generator、Set、Maps、Proxy、Reflect、Symbol、Promise等全局对象，以及一些定义在全局对象上的方法（比如Object.assign）都不会转码。	举例来说，ES6在Array对象上新增了Array.from方法。Babel就不会转码这个方法。如果想让这个方法运行，必须使用babel-polyfill，为当前环境提供一个垫片。

	5. transtorm-runtime 是为了减少重复代码而生的。 babel生成的代码，可能会用到一些_extend()， classCallCheck() 之类的工具函数，默认情况下，这些工具函数的代码会包含在编译后的文件中。如果存在多个文件，那每个文件都有可能含有一份重复的代码。并且用了transtorm-runtime 就可以不用 babel-polyfill 了

	6. stage-0 、stage-1 、stage-2 、stage-3用来支持es7的一些新的特性 ， 根据es7不同阶段的语法提案分成四个阶段，使用时选装一个 ， 0是最高级 ，包含的插件最多
		比如双冒号代替bind
		```
		obj::func()  等价于 func.bind(obj)
		```


- css-loader的原理？

- js如何进行类型判断？ （http://www.debugrun.com/a/c4PYvWJ.html）

- 各种对象遍历的方法？能遍历数组吗？
  1. Object.keys(obj) 返回对象自身的可枚举属性的数组（不包括继承的，不包括不可枚举的）
  2. for...in循环,  遍历对象的可枚举属性 （包括继承的， 不包括不可枚举的）
  3. Object.getOwnPropertyNames()  , 返回对象自身的可枚举和不可枚举的属性的数组 （不包括继承 ， 包括不可枚举）
  4. Object.getOwnPropertySymbols()

- promise的用法?(http://es6.ruanyifeng.com/#docs/promise) (http://www.cnblogs.com/sunshq/p/7890504.html)

	1.  Promise构造函数传入一个函数作为参数， 这个函数有两个参数，一个resolve，一个reject，这两个函数由js引擎提供，用于改变promise对象的状态，从pending到fulfilled，或者从pending到rejected ， 并且把传入其中的参数包装成新的promise实例进行返回，

	2.  Promise.prototype.then 用于给promise实例添加状态改变之后的回调函数，第一个参数是状态变成fulfilled时的回调，第二个参数是状态变为rejected时的回调，每次调用.then都返回一个新的promise实例，也就是说在then方法中return任何值， 返回的都是promise对象 ； 因为如果return的是非promise类型的结果，方法会自动将其包装成promise实例， 如果return的是promise实例， 那么会原封不动的返回，这就是为什么返回promise对象的状态会替换原来的对象状态的原因。

	3.  Promise.prototype.catch相当月 then的第一个参数是null， 第二个参数传入一个函数

	4. Promise.resolve()用于将参数包装成promise实例， 如果传入的是promise对象，则原封不动的返回 ，如果不是则包装成promise返回
		```
		Promise.resolve('hello world')
		//这两种写法等效
		new Promise((resolve) => {
			resolve('hello world')
		})
	```

