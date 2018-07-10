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
    5. prototype： 只有函数才有prototype(原型)属性。为什么只有函数才有prototype属性？ECMAScript规范就这么定的。prototype对象是实现面向对象的一个重要机制。每个函数也是一个实例对象，它们对应 的类就是Function，每个函数对象都具有一个子对象prototype。prototype 表示了该函数的原型，prototype表示了一个类的属性的集合。当通过new来生成一个类的对象时，prototype对象的属性就会成为实例化对象的属性。
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

-  Javascript如何实现继承？

		1、构造继承
		2、原型继承
		3、实例继承
		4、拷贝继承

		原型prototype机制或apply和call方法去实现较简单，建议使用构造函数与原型混合方式。
		
			function Parent(){
				this.name = 'wang';
			}

			function Child(){
				this.age = 28;
			}
			Child.prototype = new Parent();//继承了Parent，通过原型
			Child.prototype.constructor = Child  //这一步的原因参见阮一峰的博客
			var demo = new Child();
			alert(demo.age);
			alert(demo.name);//得到被继承的属性

- JavaScript继承的几种实现方式？
  - 参考：[构造函数的继承](http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_inheritance.html)，[非构造函数的继承](http://www.ruanyifeng.com/blog/2010/05/object-oriented_javascript_inheritance_continued.html)；

	1、构造函数绑定

	2、prototype继承及其改进方式

	3、拷贝继承



-  new操作符具体干了什么呢?(https://zhuanlan.zhihu.com/p/23987456?utm_medium=social&utm_source=wechat_session)

	1、创建新对象
	2、 函数内部的this指向该对象 ，并且属性和方法加入到this引用的对象中 ， 这一步使用了apply ， 函数此时被执行了一遍
	3、设置该对象的原型对象为构造函数的 prototype
	4、返回这个新的对象


-  javascript创建对象的几种方式？

		javascript创建对象简单的说,无非就是使用内置对象或各种自定义对象，当然还可以用JSON；但写法有很多种，也能混合使用。


		1、对象字面量的方式

			person={firstname:"Mark",lastname:"Yun",age:25,eyecolor:"black"};

		2、用function来模拟无参的构造函数

			function Person(){}
			var person=new Person();	//定义一个function，如果使用new"实例化",该function可以看作是一个Class
			person.name="Mark";
			person.age="25";
			person.work=function(){
				alert(person.name+" hello...");
			}
			person.work();


		3、用function来模拟参构造函数来实现（用this关键字定义构造的上下文属性）

			function Pet(name,age,hobby){
			   this.name= name;//this作用域：当前对象
			   this.age= age;
			   this.hobby= hobby;
			   this.eat= function(){
			      alert("我叫"+this.name+", 我喜欢"+this.hobby+",是个程序员");
			   }
			}
			var maidou =new Pet("麦兜",25,"coding");//实例化、创建对象
			maidou.eat();//调用eat方法


		4、用工厂方式来创建（内置对象）

			 var wcDog =new Object();
			 wcDog.name="旺财";
			 wcDog.age=3;
			 wcDog.work=function(){
			   alert("我是"+wcDog.name+",汪汪汪......");
			 }
			 wcDog.work();


		5、用原型方式来创建

			function Dog(){

			}
			Dog.prototype.name="旺财";
			Dog.prototype.eat=function(){
				alert(this.name+"是个吃货");
			}
			var wangcai =new Dog();
			wangcai.eat();


		5、用混合方式来创建

			function Car(name,price){
			  this.name=name;
			  this.price=price;
			}
			 Car.prototype.sell=function(){
			   alert("我是"+this.name+"，我现在卖"+this.price+"万元");
			  }
			var camry =new Car("凯美瑞",27);
			camry.sell();

-  Javascript作用链域?

		(https://leohxj.gitbooks.io/front-end-database/javascript-advance/scope-chain.html),
		(https://segmentfault.com/a/1190000000533094)
		(http://www.cnblogs.com/tomxu/archive/2012/01/18/2312463.html)

		全局函数无法查看局部函数的内部细节，但局部函数可以查看其上层的函数细节，直至全局细节。
		当需要从局部函数查找某一属性或方法时，如果当前作用域没有找到，就会上溯到上层作用域查找，
		直至全局函数，这种组织形式就是作用域链。

-  谈谈This对象的理解。

	```
  	this总是指向函数的直接调用者（而非间接调用者）；
	如果有new关键字，this指向new出来的那个对象；
	在事件中，this指向触发这个事件的对象，特殊的是，IE中的attachEvent中的this总是指向全局对象Window；
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
						ev.cancelBubble = true;
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
		其中 radix 表示要解析的数字的基数。【该值介于 2 ~ 36 之间，并且字符串中的数字不能大于radix才能正确返回数字结果值】;
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

		闭包是指有权访问另外一个函数作用域中的变量的函数

		这概念有点绕，拆分一下。从概念上说，闭包有两个特点：

		1、函数
		2、能访问另外一个函数作用域中的变量

		创建闭包的最常见的方式就是在一个函数内创建另一个函数，通过另一个函数访问这个函数的局部变量,利用闭包可以突破作用链域，将函数内部的变量和方法传递到外部。

		闭包的特性：

		1.函数内再嵌套函数
		2.内部函数可以引用外层的参数和变量
		3.参数和变量不会被垃圾回收机制回收

		//li节点的onclick事件都能正确的弹出当前被点击的li索引
		 <ul id="testUL">
	        <li> index = 0</li>
	        <li> index = 1</li>
	        <li> index = 2</li>
	        <li> index = 3</li>
	    </ul>
		<script type="text/javascript">
		  	var nodes = document.getElementsByTagName("li");
			for(i = 0;i<nodes.length;i+= 1){
			    nodes[i].onclick = (function(i){
			              return function() {
			                 console.log(i);
			              } //不用闭包的话，值每次都是4
			            })(i);
			}
		</script>



		执行say667()后,say667()闭包内部变量会存在,而闭包内部函数的内部变量不会存在
		使得Javascript的垃圾回收机制GC不会收回say667()所占用的资源
		因为say667()的内部函数的执行需要依赖say667()中的变量
		这是对闭包作用的非常直白的描述

		  function say667() {
			// Local variable that ends up within closure
			var num = 666;
			var sayAlert = function() {
				alert(num);
			}
			num++;
			return sayAlert;
		}

		 var sayAlert = say667();
		 sayAlert()//执行结果应该弹出的667


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



-  用原生JavaScript的实现过什么功能吗？


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


-  js延迟加载的方式有哪些？

		defer和async、动态创建DOM方式（用得最多）、按需异步载入js


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

- Ajax 解决浏览器缓存问题？  （https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching?hl=zh-cn）

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

-  同步和异步的区别?

	同步的概念应该是来自于OS中关于同步的概念:不同进程为协同完成某项工作而在先后次序上调整(通过阻塞,唤醒等方式).同步强调的是顺序性.谁先谁后.异步则不存在这种顺序性.



	同步：浏览器访问服务器请求，用户看得到页面刷新，重新发请求,等请求完，页面刷新，新内容出现，用户看到新内容,进行下一步操作。

	异步：浏览器访问服务器请求，用户正常操作，浏览器后端进行请求。等请求完，页面不刷新，新内容也会出现，用户看到新内容。



	（待完善）

-  如何解决跨域问题?

		jsonp、 iframe、window.name、window.postMessage、服务器上设置代理页面

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

- CommonJs 、 UMD 、ES6的模块机制？ 

	(http://javascript.ruanyifeng.com/nodejs/module.html)
	(https://segmentfault.com/a/1190000004873947)
	(http://web.jobbole.com/82238/)
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
		let的变量只在块级作用域有效、 禁止变量提升、 出现暂时性死区、不允许重复声明统同名变量
	4. 支持解构赋值
	5. 提供了新的原始数据类型 Symbol
	6. 新增了promise
	7. 引入了class的概念
	8. 提供了Proxy、Reflect等新的API
	9.  新增map 、 set数据结构


-  异步加载JS的方式有哪些？

	      (1) defer，只支持IE : <script src='xxxx' defer></script>

	      (2) async：  <script src='xxxx' async='true'></script>

	      (3) 创建script，插入到DOM中，加载完毕后callBack

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


- JS创建对象的方法 ？ （https://blog.csdn.net/xi_2130/article/details/50110493）（http://www.ruanyifeng.com/blog/2012/07/three_ways_to_define_a_javascript_class.html）


-  JS 怎么实现一个类。怎么实例化这个类 （https://blog.csdn.net/xi_2130/article/details/50276025）


-  ECMAScript6 怎么写class么，为什么会出现class这种东西?


-  JavaScript中的作用域与变量声明提升？

-  如何编写高性能的Javascript？

-  JQuery的源码看过吗？能不能简单概况一下它的实现原理？

-  jQuery.fn的init方法返回的this指的是什么对象？为什么要返回this？

-  jquery中如何将数组转化为json字符串，然后再转化回来？

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

-  针对 jQuery性能的优化方法？

-  Jquery与jQuery UI 有啥区别？


		*jQuery是一个js库，主要提供的功能是选择器，属性修改和事件绑定等等。

		*jQuery UI则是在jQuery的基础上，利用jQuery的扩展性，设计的插件。
         提供了一些常用的界面元素，诸如对话框、拖动行为、改变大小行为等等


-  JQuery的源码看过吗？能不能简单说一下它的实现原理？

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


- What is a Polyfill?

		polyfill 是“在旧版浏览器上复制标准 API 的 JavaScript 补充”,可以动态地加载 JavaScript 代码或库，在不支持这些标准 API 的浏览器中模拟它们。
		例如，geolocation（地理位置）polyfill 可以在 navigator 对象上添加全局的 geolocation 对象，还能添加 getCurrentPosition 函数以及“坐标”回调对象，
		所有这些都是 W3C 地理位置 API 定义的对象和函数。因为 polyfill 模拟标准 API，所以能够以一种面向所有浏览器未来的方式针对这些 API 进行开发，
		一旦对这些 API 的支持变成绝对大多数，则可以方便地去掉 polyfill，无需做任何额外工作。

- 做的项目中，有没有用过或自己实现一些 polyfill 方案（兼容性处理方案）？

		比如： html5shiv、Geolocation、Placeholder

- 我们给一个dom同时绑定两个点击事件，一个用捕获，一个用冒泡。会执行几次事件，会先执行冒泡还是捕获？


- 使用JS实现获取文件扩展名？

		function getFileExtension(filename) {
		  return filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2);
		}

		String.lastIndexOf() 方法返回指定值（本例中的'.'）在调用该方法的字符串中最后出现的位置，如果没找到则返回 -1。
		对于'filename'和'.hiddenfile'，lastIndexOf的返回值分别为0和-1无符号右移操作符(»>) 将-1转换为4294967295，将-2转换为4294967294，这个方法可以保证边缘情况时文件名不变。
		String.prototype.slice() 从上面计算的索引处提取文件的扩展名。如果索引比文件名的长度大，结果为""。

- Webpack热更新实现原理?

		1. Webpack编译期，为需要热更新的 entry 注入热更新代码(EventSource通信)
		2. 页面首次打开后，服务端与客户端通过 EventSource 建立通信渠道，把下一次的 hash 返回前端
		3. 客户端获取到hash，这个hash将作为下一次请求服务端 hot-update.js 和 hot-update.json的hash
		4. 修改页面代码后，Webpack 监听到文件修改后，开始编译，编译完成后，发送 build 消息给客户端
		5. 客户端获取到hash，成功后客户端构造hot-update.js script链接，然后插入主文档
		6. hot-update.js 插入成功后，执行hotAPI 的 createRecord 和 reload方法，获取到 Vue 组件的 render方法，重新 render 组件， 继而实现 UI 无刷新更新。

- 请介绍一下JS之事件节流？

- 什么是JS的函数防抖？

#### <a name='other'>ECMAScript6 相关</a>

- Object.is() 与原来的比较操作符“ ===”、“ ==”的区别？

		两等号判等，会在比较时进行类型转换；
		三等号判等(判断严格)，比较时不进行隐式类型转换,（类型不同则会返回false）；

		Object.is 在三等号判等的基础上特别处理了 NaN 、-0 和 +0 ，保证 -0 和 +0 不再相同，
		但 Object.is(NaN, NaN) 会返回 true.

 		Object.is 应被认为有其特殊的用途，而不能用它认为它比其它的相等对比更宽松或严格。

- ES6是如何实现编译成ES5的？

- css-loader的原理？


## <a name='other'>前端框架</a>

- React 使用场景？

			逻辑复杂单页应用，偏中后台管理系统，纯展示性的UI页面不合适、

- 描述一下React 生命周期

			渲染过程调用到的生命周期函数，主要几个要知道；
			* constructor 
			* getInitialState 
			* getDefaultProps 
			* componentWillMount 
			* render 
			* componentDidMount 

			更新过程

			* componentWillReceiveProps 
			* shouldComponentUpdate 
			* componentWillUpdate 
			* render 
			* componentDidUpdate 

			卸载过程

			componentWillUnmount


- 实现组件有哪些方式？

		React.createClass 使用API来定义组件
		React ES6 class component 用 ES6 的class 来定义组件
		Functional stateless component 通过函数定义无状态组件


- 应该在React生命周期的什么阶段发出ajax请求，为什么？

				AJAX请求应在 componentDidMount函数 进行请求。

- shouldComponentUpdate函数有什么作用？

				shouldComponentUpdate是一个允许我们自行决定某些组件（以及他们的子组件）是否进行更新的生命周期函数，reconciliation的最终目的是尽可能以最有效的方式去根据新的state更新UI，
				如果你已经知道UI的哪些状态无需进行改变，就没必要去让React去判断它是否该改变。 让shouldComponentUpdate返回falss, React就会让当前的组件和其子组件保持不变。

- 当组件的setState函数被调用之后，发生了什么？

				React会做的第一件事就是把你传递给setState的参数对象合并到组件原先的state。这个事件会导致一个“reconciliation”（调和）的过程。reconciliation的最终目标就是，
				尽可能以最高效的方法，去基于新的state来更新UI。为了达到这个目的，React会构建一个React元素树（你可以把这个想象成一个表示UI的一个对象）。一旦这个树构建完毕，
				React为了根据新的state去决定UI要怎么进行改变，它会找出这棵新树和旧树的不同之处。React能够相对精确地找出哪些位置发生了改变以及如何发生了什么变化，
				并且知道如何只通过必要的更新来最小化重渲染。

- 为什么循环产生的组件中要利用上key这个特殊的prop？

				Keys负责帮助React跟踪列表中哪些元素被改变/添加/移除。React利用子元素的key在比较两棵树的时候，快速得知一个元素是新的还是刚刚被移除。没有keys，React也就不知道当前哪一个的item被移除了。

- React-router 路由的实现原理？

- 说说React Native,Weex框架的实现原理？

- 受控组件(Controlled Component)与非受控组件(Uncontrolled Component)的区别

- refs 是什么?

			Refs是能访问DOM元素或组件实例的一个函数；

- React为什么自己定义一套事件体系呢，与浏览器原生事件体系有什么关系？

- 什么时候应该选择用class实现一个组件，什么时候用一个函数实现一个组件？

			组件用到了state或者用了生命周期函数，那么就该使用Class component。其他情况下，应使用Functional component。

- 什么是HoC（Higher-Order Component）？适用于什么场景？

			高阶组件就是一个 React 组件包裹着另外一个 React 组件

- 并不是父子关系的组件，如何实现相互的数据通信？

			使用父组件，通过props将变量传入子组件 （如通过refs，父组件获取一个子组件的方法，简单包装后，将包装后的方法通过props传入另一个子组件 ）

- 用过 React 技术栈中哪些数据流管理库？

			Redux\Dva

- Redux是如何做到可预测呢？

- Redux将React组件划分为哪两种？

- Redux是如何将state注入到React组件上的？

- 请描述一次完整的 Redux 数据流

- React的批量更新机制 BatchUpdates？

- React与Vue，各自的组件更新进行对比，它们有哪些区别？