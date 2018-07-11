# 前端开发面试题

## <a name='preface'>前言</a> ##


[只看问题点这里 ](https://markyun.github.io/2015/Front-end-Developer-Questions/ "Questions")

[看全部问题和答案点这里](https://github.com/markyun/My-blog/tree/master/Front-end-Developer-Questions/Questions-and-Answers "Questions-and-Answers")

本文由我收集总结了一些前端面试题，初学者阅后也要用心钻研其中的原理，重要知识需要系统学习、透彻学习，形成自己的知识链。万不可投机取巧，临时抱佛脚只求面试侥幸混过关是错误的！也是不可能的！不可能的！不可能的！

前端还是一个年轻的行业，新的行业标准， 框架， 库都不断在更新和新增，正如赫门在2015深JS大会上的《前端服务化之路》主题演讲中说的一句话：“每18至24个月，前端都会难一倍”，这些变化使前端的能力更加丰富、创造的应用也会更加完美。所以关注各种前端技术，跟上快速变化的节奏，也是身为一个前端程序员必备的技能之一。

最近也收到许多微博私信的鼓励和更正题目信息，后面会经常更新题目和答案到[github博客](http://markyun.github.io/)。希望前端er达到既能使用也会表达，对理论知识有自己的理解。可根据下面的知识点一个一个去进阶学习，形成自己的职业技能链。

**面试有几点需注意：(来源[寒冬winter](http://weibo.com/wintercn "微博：寒冬winter") 老师，github:@wintercn)**

1. 面试题目： 根据你的等级和职位的变化，入门级到专家级，广度和深度都会有所增加。

1. 题目类型： 理论知识、算法、项目细节、技术视野、开放性题、工作案例。

1. 细节追问： 可以确保问到你开始不懂或面试官开始不懂为止，这样可以大大延展题目的区分度和深度，知道你的实际能力。因为这种知识关联是长时期的学习，临时抱佛脚绝对是记不住的。

1. 回答问题再棒，面试官（可能是你面试职位的直接领导），会考虑我要不要这个人做我的同事？所以态度很重要、除了能做事，还要会做人。（感觉更像是相亲( •̣̣̣̣̣̥́௰•̣̣̣̣̣̥̀ )）

1. 资深的前端开发能把absolute和relative弄混，这样的人不要也罢，因为团队需要的是：你这个人具有可以依靠的才能（靠谱）。


**前端开发所需掌握知识点概要：**

	HTML&CSS：
		对Web标准的理解（结构、表现、行为）、浏览器内核、渲染原理、依赖管理、兼容性、CSS语法、层次关系，常用属性、布局、选择器、权重、盒模型、
		Hack、CSS预处理器、CSS3、Flexbox、CSS Modules、Document flow、BFC、HTML5（离线 & 存储、Histoy,多媒体、WebGL\SVG\Canvas）；		
	JavaScript：
        数据类型、运算、对象、Function、继承、闭包、作用域、事件、Prototype、RegExp、JSON、Ajax、DOM、BOM、
        内存泄漏、跨域、异步请求、模板引擎、模块化、Flux、同构、算法、ECMAScript6、Nodejs、HTTP、

	其他：
        主流MVVM框架(React\Vue\Angular)、Hybrid App\React Native\Weex、TypeScript、RESTFul、WEB安全、前端工程化、依赖管理、性能优化、
        重构、团队协作、可维护、易用性、SEO、UED、前端技术选型、快速学习能力等；



作为一名前端工程师，**无论工作年头长短都应该掌握的知识点**：

此条由 王子墨 发表在 [攻城师的实验室](http://lab.yuanwai.wang/)

		1、DOM结构 —— 两个节点之间可能存在哪些关系以及如何在节点之间任意移动。

		2、DOM操作 —— 如何添加、移除、移动、复制、创建和查找节点等。

		3、事件 —— 如何使用事件，以及IE和标准DOM事件模型之间存在的差别。

		4、XMLHttpRequest —— 这是什么、怎样完整地执行一次GET请求、怎样检测错误。

		5、严格模式与混杂模式 —— 如何触发这两种模式，区分它们有何意义。

		6、盒模型 —— 外边距、内边距和边框之间的关系，及IE8以下版本的浏览器中的盒模型

		7、块级元素与行内元素 —— 怎么用CSS控制它们、以及如何合理的使用它们

		8、浮动元素 —— 怎么使用它们、它们有什么问题以及怎么解决这些问题。

		9、HTML与XHTML —— 二者有什么区别，你觉得应该使用哪一个并说出理由。

		10、JSON —— 作用、用途、设计结构。



**备注：**

	根据自己需要选择性阅读，面试题是对理论知识的总结，让自己学会应该如何表达。

	资料答案不够正确和全面，欢迎欢迎Star和提交issues。

	格式不断修改更新中。

	更新记录：
	2018-01-14： 公司在招聘前端，使用react技术栈；借此机会更新一波前端框架相关的题目；
	2016-10-20： 更新一些已被发现的问题。
	2016-03-25： 新增ECMAScript6 相关问题




## <a name='html'>HTML</a>

- Doctype作用？标准模式与兼容模式各有什么区别?

		（1）、<!DOCTYPE>声明位于HTML文档中的第一行，处于 <html> 标签之前。告知浏览器的解析器用什么文档标准解析这个文档。DOCTYPE不存在或格式不正确会导致文档以兼容模式呈现。

		（2）、标准模式的排版 和JS运作模式都是以该浏览器支持的最高标准运行。在兼容模式中，页面以宽松的向后兼容的方式显示,模拟老式浏览器的行为以防止站点无法工作。

- HTML5 为什么只需要写 `<!DOCTYPE HTML>`？

		 HTML5 不基于 SGML，因此不需要对DTD进行引用，但是需要doctype来规范浏览器的行为（让浏览器按照它们应该的方式来运行）；

		 而HTML4.01基于SGML,所以需要对DTD进行引用，才能告知浏览器文档所使用的文档类型。

		 HTML5已经远远超越了标记语言的范畴，其背后是一组技术集。      最基本的就是更富语义的标签，以便更好的被机器识别；     Canvas+WEBGL等技术，实现无插件的动画以及图像、图形处理能力；     本地存储，可实现offline应用；     websocket，一改http的纯pull模型，实现数据推送的梦想；  MathML，SVG等，支持更加丰富的render；


- 行内元素有哪些？块级元素有哪些？ 空(void)元素有那些？

		首先：CSS规范规定，每个元素都有display属性，确定该元素的类型，每个元素都有默认的display值，如div的display默认值为“block”，则为“块级”元素；span默认display属性值为“inline”，是“行内”元素。

		（1）行内元素有：a b span img input select strong（强调的语气）
		（2）块级元素有：div ul ol li dl dt dd h1 h2 h3 h4…p

		（3）常见的空元素：
			<br> <hr> <img> <input> <link> <meta>
			鲜为人知的是：
			<area> <base> <col> <command> <embed> <keygen> <param> <source> <track> <wbr>

		不同浏览器（版本）、HTML4（5）、CSS2等实际略有差异
		参考: http://stackoverflow.com/questions/6867254/browsers-default-css-for-html-elements



- 页面导入样式时，使用link和@import有什么区别？(http://www.daqianduan.com/2417.html)


		（1）link属于XHTML标签，除了加载CSS外，还能用于定义RSS, 定义rel连接属性等作用；而@import是CSS提供的，只能用于加载CSS;

		（2）页面被加载的时，link会同时被加载，而@import引用的CSS会等到页面被加载完再加载;

		（3）import是CSS2.1 提出的，只在IE5以上才能被识别，而link是XHTML标签，无兼容问题;
		 
		 (4)link支持使用js控制DOM去改变样式，而@import不支持;


- 介绍一下你对浏览器内核的理解？

		主要分成两部分：渲染引擎(layout engineer或Rendering Engine)和JS引擎。

		渲染引擎：负责取得网页的内容（HTML、XML、图像等等）、整理讯息（例如加入CSS等），以及计算网页的显示方式，然后会输出至显示器或打印机。浏览器的内核的不同对于网页的语法解释会有不同，所以渲染的效果也不相同。所有网页浏览器、电子邮件客户端以及其它需要编辑、显示网络内容的应用程序都需要内核。

		JS引擎则：解析和执行javascript来实现网页的动态效果。

		最开始渲染引擎和JS引擎并没有区分的很明确，后来JS引擎越来越独立，内核就倾向于只指渲染引擎。

- 常见的浏览器内核有哪些？

        Trident内核：IE,MaxThon,TT,The World,360,搜狗浏览器等。[又称MSHTML]
		Gecko内核：Netscape6及以上版本，FF,MozillaSuite/SeaMonkey等
		Presto内核：Opera7及以上。      [Opera内核原为：Presto，现为：Blink;]
		Webkit内核：Safari,Chrome等。   [ Chrome的：Blink（WebKit的分支）]

      详细文章：[浏览器内核的解析和对比](http://www.cnblogs.com/fullhouse/archive/2011/12/19/2293455.html)



- html5有哪些新特性、移除了那些元素？如何处理HTML5新标签的浏览器兼容问题？如何区分 HTML 和 HTML5？


		* HTML5 现在已经不是 SGML 的子集，主要是关于图像，位置，存储，多任务等功能的增加。
			  绘画 canvas;
			  用于媒介回放的 video 和 audio 元素;
			  本地离线存储 localStorage 长期存储数据，浏览器关闭后数据不丢失;
	          sessionStorage 的数据在浏览器关闭后自动删除;
			  语意化更好的内容元素，比如 article、footer、header、nav、section;
			  表单控件，calendar、date、time、email、url、search;
			  新的技术webworker, websocket, Geolocation;

		  移除的元素：
			  纯表现的元素：basefont，big，center，font, s，strike，tt，u;
			  对可用性产生负面影响的元素：frame，frameset，noframes；

	    * 支持HTML5新标签：
			 IE8/IE7/IE6支持通过document.createElement方法产生的标签，
		  	 可以利用这一特性让这些浏览器支持HTML5新标签，
          	 浏览器支持新标签后，还需要添加标签默认的样式。

		     当然也可以直接使用成熟的框架、比如html5shiv;   
			 <!--[if lt IE 9]>
				<script> src="http://html5shiv.googlecode.com/svn/trunk/html5.js"</script>
			 <![endif]-->

			 (条件注释只有IE浏览器 且 只有IE10以下的浏览器可以识别， 为了识别IE10\IE11，可以参考http://www.webhek.com/post/conditional-comments-in-ie11-10.html)

		* 如何区分HTML5： DOCTYPE声明\新增的结构元素\功能元素

- 简述一下你对HTML语义化的理解？

		用正确的标签做正确的事情。
	    html语义化让页面的内容结构化，结构更清晰，便于对浏览器、搜索引擎解析;
	    即使在没有样式CSS情况下也以一种文档格式显示，并且是容易阅读的;
	    搜索引擎的爬虫也依赖于HTML标记来确定上下文和各个关键字的权重，利于SEO;
	    使阅读源代码的人对网站更容易将网站分块，便于阅读维护理解。



- HTML5的离线储存怎么使用，工作原理能不能解释一下？

		在用户没有与因特网连接时，可以正常访问站点或应用，在用户与因特网连接时，更新用户机器上的缓存文件。
		原理：HTML5的离线存储是基于一个新建的.appcache文件的缓存机制(不是存储技术)，通过这个文件上的解析清单离线存储资源，这些资源就会像cookie一样被存储了下来。之后当网络在处于离线状态下时，浏览器会通过被离线存储的数据进行页面展示。

		如何使用：
		1、页面头部像下面一样加入一个manifest的属性；
		2、在cache.manifest文件的编写离线存储的资源；
			CACHE MANIFEST
			#v0.11
			CACHE:
			js/app.js
			css/style.css
			NETWORK:
			resourse/logo.png
			FALLBACK:
			/ /offline.html
		3、在离线状态时，操作window.applicationCache进行需求实现。

	详细的使用请参考：

	[例]https://segmentfault.com/a/1190000006984353


	[HTML5 离线缓存-manifest简介](http://yanhaijing.com/html/2014/12/28/html5-manifest/)



- 浏览器是怎么对HTML5的离线储存资源进行管理和加载的呢？

		在线的情况下，浏览器发现html头部有manifest属性，它会请求manifest文件，如果是第一次访问app，那么浏览器就会根据manifest文件的内容下载相应的资源并且进行离线存储。如果已经访问过app并且资源已经离线存储了，那么浏览器就会使用离线的资源加载页面，然后浏览器会对比新的manifest文件与旧的manifest文件，如果文件没有发生改变，就不做任何操作，如果文件改变了，那么就会重新下载文件中的资源并进行离线存储。
		离线的情况下，浏览器就直接使用离线存储的资源。
	详细请参考：[有趣的HTML5：离线存储](http://segmentfault.com/a/1190000000732617)

- 请描述一下 cookies，sessionStorage 和 localStorage 的区别？

		概念 : cookie简单的说就是可以让服务器在客户端的内存或者硬盘里存储少量数据，或者从客户端获取数据的技术， 并且标示用户身份。
		产生过程 ： 用户通过客户端请求url，访问服务器，服务器响应之后在报头中添加set-cookie，客户端从该头中读取内容并存储下来，之后始终根据同源策略在http请求中携带
		（同源是指协议、域名、端口三点均相同 ，请求某个域名想要带上某cookie需要同时满足两点才行： 1、这个cookie是该域名或者其父域名下的cookie 2、这个cookie是该路径或者父路径下的cookie
		参考 https://blog.csdn.net/wang379275614/article/details/53333054）
		sessionStorage和localStorage不会自动把数据发给服务器，仅在本地保存。

		存储大小：
			cookie数据大小不能超过4k。
			sessionStorage和localStorage 虽然也有存储大小的限制，但比cookie大得多，可以达到5M或更大。

		有期时间：
	    	localStorage    存储持久数据，浏览器关闭后数据不丢失除非主动删除数据；
        	sessionStorage  数据在当前浏览器窗口关闭后自动删除。
			cookie          设置的cookie过期时间之前一直有效，即使窗口或浏览器关闭


- 什么是Cookie 隔离？（或者说：请求资源的时候不要让它带cookie怎么做）

		如果静态文件都放在主域名下，那静态文件请求的时候都带有的cookie的数据提交给server的，非常浪费流量，
		所以不如隔离开。

		因为cookie有域的限制，因此不能跨域提交请求，故使用非主要域名的时候，请求头中就不会带有cookie数据，
		这样可以降低请求头的大小，降低请求时间，从而达到降低整体请求延时的目的。

		同时这种方式不会将cookie传入Web Server，也减少了Web Server对cookie的处理分析环节，
		提高了webserver的http请求的解析速度。


- iframe有那些缺点？

		*iframe会阻塞主页面的Onload事件；
		*搜索引擎的检索程序无法解读这种页面，不利于SEO;

		*iframe和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载。

        使用iframe之前需要考虑这两个缺点。如果需要使用iframe，最好是通过javascript
        动态给iframe添加src属性值，这样可以绕开以上两个问题。

- Label的作用是什么？是怎么用的？

		label标签来定义表单控制间的关系,当用户选择该标签时，浏览器会自动将焦点转到和标签相关的表单控件上。

		<label for="Name">Number:</label>
		<input type=“text“name="Name" id="Name"/>

		<label>Date:<input type="text" name="B"/></label>

- HTML5的form如何关闭自动完成功能？

		给不想要提示的 form 或某个 input 设置为 autocomplete=off。
		(http://www.w3school.com.cn/html5/att_input_autocomplete.asp)

- 如何实现浏览器内多个标签页之间的通信? (阿里)
		（https://segmentfault.com/a/1190000007615884）
		（https://segmentfault.com/q/1010000006664804）
		(http://web.jobbole.com/82225/)

		WebSocket、SharedWorker；
		也可以调用localstorge、cookies等本地存储方式；

		localstorge另一个浏览上下文里被添加、修改或删除时，它都会触发一个"storage"事件，
		我们通过监听事件，控制它的值来进行页面信息通信；
		注意quirks：Safari 在无痕模式下设置localstorge值时会抛出 QuotaExceededError 的异常；

- webSocket如何兼容低浏览器？(阿里)

		Adobe Flash Socket 、
		ActiveX HTMLFile (IE) 、
		基于 multipart 编码发送 XHR 、
		基于长轮询的 XHR

- 页面可见性（Page Visibility API） 可以有哪些用途？

		通过 visibilityState 的值检测页面当前是否可见，以及打开网页的时间等;
		在页面被切换到其他后台进程的时候，自动暂停音乐或视频的播放；
		https://developer.mozilla.org/zh-CN/docs/Web/API/Document/visibilityState

- 如何在页面上实现一个圆形的可点击区域？ https://www.nowcoder.com/questionTerminal/fe155273580e46dfa2b15875e94a8b96

		1、map+area或者svg
		2、border-radius
		3、纯js实现 需要求一个点在不在圆上简单算法、获取鼠标坐标等等

- 实现不使用 border 画出1px高的线，在不同浏览器的标准模式与怪异模式下都能保持一致的效果。
<div style="height:1px;overflow:hidden;background:red"></div>


- 网页验证码是干嘛的，是为了解决什么安全问题。

		区分用户是计算机还是人的公共全自动程序。可以防止恶意破解密码、刷票、论坛灌水；
		有效防止黑客对某一个特定注册用户用特定程序暴力破解方式进行不断的登陆尝试。

- title与h1的区别、b与strong的区别、i与em的区别？

		title属性没有明确意义只表示是个标题，H1则表示层次明确的标题，对页面信息的抓取也有很大的影响；

		strong是标明重点内容，有语气加强的含义，使用阅读设备阅读网络时：<strong>会重读，而<B>是展示强调内容。

		i内容展示为斜体，em表示强调的文本；

		Physical Style Elements -- 自然样式标签
		b, i, u, s, pre
		Semantic Style Elements -- 语义样式标签
		strong, em, ins, del, code
		应该准确使用语义样式标签, 但不能滥用, 如果不能确定时首选使用自然样式标签。


## <a name='css'>CSS</a>

- 介绍一下标准的CSS的盒子模型？低版本IE的盒子模型有什么不同的？

	https://juejin.im/post/5a7d22636fb9a0633c660359

	在页面中，每个元素被表示为一个矩形的方框，这就是盒子。盒子是CSS布局中的基本单位，一张页面是由一个或多个盒子组成的。盒子从内到外由内容(Content)、内边距(Padding)、边框(Border)和外边距(Margin)组成，盒子的大小由content+padding+border这几部分决定，把margin算进去的那是盒子占据的位置，而不是盒子的大小！  。同时，盒子会为其子孙创建包含块(containing block ， In CSS 2.1, many box positions and sizes are calculated with respect to the edges of a rectangular box called a containing block. In general, generated boxes act as containing blocks for descendant boxes; we say that a box "establishes" the containing block for its descendants. The phrase "a box's containing block" means "the containing block in which the box lives," not the one it generates.)，
	
	包含块由以下规则确定：

	The containing block of an element is defined as follows:
	1. The containing block in which the root element lives is a rectangle called the initial containing block. For continuous media, it has the dimensions of the viewport and is anchored at the canvas origin; it is the page area for paged media. The 'direction' property of the initial containing block is the same as for the root element.
	2. For other elements, if the element's position is 'relative' or 'static', the containing block is formed by the content edge of the nearest block container ancestor box.
	3. If the element has 'position: fixed', the containing block is established by the viewport in the case of continuous media or the page area in the case of paged media.
	4. If the element has 'position: absolute', the containing block is established by the nearest ancestor with a 'position' of 'absolute', 'relative' or 'fixed', in the following way:
	In the case that the ancestor is an inline element, the containing block is the bounding box around the padding boxes of the first and the last inline boxes generated for that element. In CSS 2.1, if the inline element is split across multiple lines, the containing block is undefined.
	Otherwise, the containing block is formed by the padding edge of the ancestor.



	用于计算内部盒子的大小及位置，由元素样式的position属性确定。盒子分为多种类型，在没有CSS干预的情况下，它的类型由元素的类型决定，CSS的display属性能够修改它的类型。
	
	按照类型划分盒子分为块级盒子和行级盒子 元素的类型和display属性，决定了这个Box的类型。 不同类型的Box， 会参与不同的Formatting context(一个决定如何渲染文档的容器)，因此Box内的元素会以不同的方式渲染。
	
	块级盒子 : display的值为block、table或者list-item的元素是块级元素(block level element)，它们会生成块级盒子(block level box)并且参加块级格式化上下文(Block Formatting Context，BFC)。块级盒子能够设置宽和高，它被定义为放在其他盒子上面的盒子，对外布局的影响主要表现为在它之前和之后的内容都不能和它处于同一行。
	默认属于块级盒子的元素主要有：div , p , table , pre , ol , ul ,li , form , 各级标签h1 、h2 、 h3等。块级盒子模型分为W3C标准模型和IE标准模型，可以使用CSS的box-sizing属性控制。W3C 标准盒模型的盒子属性width,height只包含内容content，不包含border和padding ，  IE 盒模型的盒子属性width,height包含border和padding，指的是content+padding+border。
	
	行级盒子 : display属性为inline、inline-block、inline-table的元素是行内级元素（inline-level elements），行内级元素生成行内级级盒（inline-level boxes）。

- 盒子的类型（http://layout.imweb.io/article/box-type.html）

	同样当元素的 CSS 属性 display 为 inline, inline-block, inline-table, inline-flex, inline-grid 时，它就是行内级元素（inline-level elements），

	
- 对BFC规范(块级格式化上下文：block formatting context)的理解？ (https://juejin.im/post/5a7d22636fb9a0633c660359)(http://www.html-js.com/article/1866)

	它是格式化上下文的一种 ， 首先格式化上下文是CSS2.1中的概念，它是一个独立容器，决定了元素如何对其内容进行定位,以及与其他元素的关系和相互作用。一个页面是由很多个 Box 组成的,元素的类型和 display 属性, 决定了这个 Box 的类型， 不同类型的 Box 会参与不同的 Formatting Context（决定如何渲染文档的容器）, 因此Box会以不同的方式渲染,也就是说BFC内部的元素和外部的元素不会互相影响。  CSS2中BFC、IFC ，CSS3中又新加入了FFC 、 GFC。
	
	BFC 是一块独立的渲染区域，只有它内部的块级盒子参与它的布局。这些块级盒子的布局方式不会受BFC外部布局的影响，同时它们也不会影响BFC外部的布局。块级格式化上下文中的“块级”两字并不是指BFC是由块级元素产生的，而是指块级元素会参加到BFC的布局中来。

	##### 以下几种元素能够在其内部产生BFC：

	根元素或其他包含它的元素

	float 的值不为 none

	position 的值不为 static 或 relative

	display 的值为 table-cell、table-caption、inline-block、flex 或 inline-flex

	overflow 的值不为 visibility

	##### BFC的布局规则:

	BFC内部的块级盒子会在垂直方向一个接一个的堆放，并且相邻的块级盒子的外边距(Margin)会折叠，以最大的一个外边距作为两个盒子之间的距离；

	计算BFC的高度时，它内部的浮动元素也会被计算进去；

	BFC的区域不会和浮动盒子相重叠；

	BFC内部每个元素的Margin Box的左边都会和包含块的Border Box的左边相接触；在从右往左格式化的情况下，则是每个元素的Margin Box的右边都会和包含块的Border Box的右边相接触；

	BFC在页面上是一个独立的区域，它内部的元素的布局不会和外部元素的布局产生相互影响；


- IFC规范的理解 ？ （https://segmentfault.com/a/1190000004466536）



- absolute的containing block(容器块)计算方式跟正常流有什么不同？

		无论属于哪种，都要先找到其祖先元素中最近的 position 值不为 static 的元素，然后再判断：
		1、若此元素为 inline 元素，则 containing block 为能够包含这个元素生成的第一个和最后一个 inline box 的 padding box (除 margin, border 外的区域) 的最小矩形；
		2、否则,则由这个祖先元素的 padding box 构成。
		如果都找不到，则为 initial containing block。

		补充：
		1. static(默认的)/relative：简单说就是它的父元素的内容框（即去掉padding的部分）
		2. absolute: 向上找最近的定位为absolute/relative的元素
		3. fixed: 它的containing block一律为根元素(html/body)，根元素也是initial containing block

- position:absolute的元素的left 、 top默认值是多少 ？ (https://www.zhihu.com/question/20109535)
	1、position：absolute中的 left，top的默认值并不是0；
	2、没有设置left、top时，left和top的默认值将使元素的位置和“原来的位置”一样。
	3、假设父元素position: relative; 有padding的状态下：如果有top/left:0 ：子元素紧贴父元素padding的边界（因为父元素包含块的边界就是padding边界）如果没有设置值：子元素紧贴父元素	 content的边界（其实此时值为auto）


- position的值relative和absolute定位原点是？

		  absolute
			生成绝对定位的元素，相对于值不为 static的第一个父元素进行定位。
		  fixed （老IE不支持）
			生成绝对定位的元素，相对于浏览器窗口进行定位。
		  relative
			生成相对定位的元素，相对于其正常位置进行定位。
		  static
			默认值。没有定位，元素出现在正常的流中（忽略 top, bottom, left, right z-index 声明）。
		  inherit
			规定从父元素继承 position 属性的值。



- 你对line-height是如何理解的？

	具体可以查看[这篇博客]("https://www.zhangxinxu.com/wordpress/2009/11/css%E8%A1%8C%E9%AB%98line-height%E7%9A%84%E4%B8%80%E4%BA%9B%E6%B7%B1%E5%85%A5%E7%90%86%E8%A7%A3%E5%8F%8A%E5%BA%94%E7%94%A8/ 
	") .

	其中涉及了 inline-block使用的相关问题 ： https://www.zhihu.com/question/28057944

	到底这个line-height行高怎么就产生了高度呢？在inline box模型中，有个line boxes，这玩意是看不见的，这个玩意的工作就是包裹每行文字。一行文字一个line boxes。例如“艾佛森退役”这5个字，如果它们在一行显示，你艾佛森再牛逼，对不起，只有一个line boxes罩着你；但“春哥纯爷们”这5个字，要是竖着写，一行一个，那真是够爷们，一个字罩着一个line boxes，于是总计五个line boxes。line boxes什么特性也没有，就高度。所以一个没有设置height属性的div的高度就是由一个一个line boxes的高度堆积而成的。

	其实line boxes不是直接的生产者，属于中层干部，真正的活儿都是它的手下 – inline boxes干的，这些手下就是文字啦，图片啊，<span>之类的inline属性的标签啦。line boxes只是个考察汇报人员，考察它的手下谁的实际line-height值最高，谁最高，它就要谁的值，然后向上汇报，形成高度。例如，<span style="line-height:20px;">取手下line-height<span style="line-height:40px;">最高</span>的值</span>。则line boxes的高度就是40像素了。


- vertical-align中描述的, 父级的基线, 指的是行框的基线吗？（https://www.w3cplus.com/css/css-font-metrics-line-height-and-vertical-align.html）

	关于这个属性的定义参见https://developer.mozilla.org/zh-CN/docs/Web/CSS/vertical-align 。 
	对于行框的baseline,应该说其是相对固定不变的，判断方法就是这个行框里直接写个字母x,行框的baseline就是x的底部，这个x是不包含在任何其他子标签里面的，行框的baseline永远相对于这个x不变。举个例子<div>x<span>xspan</span></div> 这里div里的行框就是字母x的底部，不是xspan里x的底部。行框里的多个行内框只要是基线对齐的，都会和这个x底部对齐，top bottom会和高度最大的行内框的top bottom对齐。张鑫旭大神讲的幽灵节点就是指这个隐形的x。具体的可以看这个[确定line box的baseline]("https://www.jianshu.com/p/6f9d7da220c8")确定行框的高度是要在对齐之后才能计算到的。行框的高度并不是高度最大的行内框的高度，而是位置最高的行内框的顶部和位置最低的行内框的底部的间距。行内元素的top bottom对齐参照物是高度最大的inline box，而不是行框的顶部或者底部，因为在对齐阶段，行框的高度是没有计算出来的。


- 设置元素浮动后，该元素的display值是多少？

		自动变成了 display:block


- CSS选择符有哪些？哪些属性可以继承？

		*   1.id选择器（ # myid）
			2.类选择器（.myclassname）
			3.标签选择器（div, h1, p）
			4.相邻选择器（h1 + p）(紧邻h1元素之后的第一个p元素会被选中)
			5.子选择器（ul > li）
			6.后代选择器（li a）
			7.通配符选择器（ * ）
			8.属性选择器（a[rel = "external"]）
			9.伪类选择器（a:hover, li:nth-child）

		不可继承的：display、margin、border、padding、background、height、min-height、max- height、width、min-width、max-width、overflow、position、left、right、top、 bottom、z-index、float、clear、table-layout、vertical-align、page-break-after、 page-bread-before和unicode-bidi

		所有元素可继承：visibility和cursor

		内联元素可继承：letter-spacing、word-spacing、white-space、line-height、color、font、 font-family、font-size、font-style、font-variant、font-weight、text-decoration、text-transform、direction

		块状元素可继承：text-indent和text-align

		列表元素可继承：list-style、list-style-type、list-style-position、list-style-image

		表格元素可继承：border-collapse


- 说一下 letter-spacing、word-spacing、white-space

	
		1. white-space 属性设置如何处理元素内的空白 https://blog.csdn.net/qq_33706382/article/details/78328188

			white-space: normal表示合并空格，多个相邻空格合并成一个空格，在源码中的换行作为空格处理，会根据容器的大小进行自动换行 ，不认源码中的换行 ，  认 <br>标签换行  ， 这里的空白是值空白字符，包括空格，制表符等空白字符，下面为了行文方便，统一用“空格”代表。

			white-space:nowrap不换行,和normal一样，也合并空格，但是不会根据容器大小换行 , 不认源码中的换行 ，只认 <br>标签换行, , 同时换行只认源码中的换行和<br/>标签。经常和overflow:hidden,text-overflow:ellipsis一起使用 ; 

			white-space:pre保留空格不换行, 保持源码中的空格，有几个空格算几个空格显示，同时换行只认源码中的换行和<br/>标签。

			white-space:pre-wrap保留空格换行  ，保留空格，并且除了碰到源码中的换行和<br/>会换行外，还会自适应容器的边界进行换行。

			white-space:pre-line合并空格换行 ，合并空格，换行和white-space:pre-wrap一样，遇到源码中的换行和<br/>会换行，碰到容器的边界也会换行。

		2. letter-spacing 控制字符间的留白

		3. word-spacing 控制单词间的留白

- CSS优先级算法如何计算？

		*   优先级就近原则，同权重情况下样式定义最近者为准;
		*   载入样式以最后载入的定位为准;

		优先级为:
			同权重: 内联样式表（标签内部）> 嵌入样式表（当前文件中）> 外部样式表（外部文件中）。
			!important >  id > class > tag
			important 比 内联优先级高

- CSS3新增伪类有那些？

			举例：
			p:first-of-type	选择属于其父元素的首个 <p> 元素的每个 <p> 元素。
			p:last-of-type	选择属于其父元素的最后 <p> 元素的每个 <p> 元素。
	        p:only-of-type	选择属于其父元素唯一的 <p> 元素的每个 <p> 元素。
			p:only-child		选择属于其父元素的唯一子元素的每个 <p> 元素。
			p:nth-child(2)	选择属于其父元素的第二个子元素的每个 <p> 元素。
			::after			在元素之前添加内容,也可以用来做清除浮动。
			::before			在元素之后添加内容
	 	    :enabled  		
			:disabled 		控制表单控件的禁用状态。
			:checked        单选框或复选框被选中。

- 如何居中div？


	*  水平居中：给div设置一个宽度，然后添加margin:0 auto属性

			div{
				width:200px;
				margin:0 auto;
			 }

	*  让绝对定位的div居中
		https://www.zhangxinxu.com/wordpress/2013/11/margin-auto-absolute-%E7%BB%9D%E5%AF%B9%E5%AE%9A%E4%BD%8D-%E6%B0%B4%E5%B9%B3%E5%9E%82%E7%9B%B4%E5%B1%85%E4%B8%AD/
			div {
				position: absolute;
				width: 300px;
				height: 300px;
				margin: auto;
				top: 0;
				left: 0;
				bottom: 0;
				right: 0;
				background-color: pink;	/* 方便看效果 */
			}

	*  水平垂直居中一

			确定容器的宽高 宽500 高 300 的层
			设置层的外边距

			div {
				position: relative;		/* 相对定位或绝对定位均可 */
				width:500px;
				height:300px;
				top: 50%;
				left: 50%;
				margin: -150px 0 0 -250px;     	/* 外边距为自身宽高的一半 */
				background-color: pink;	 	/* 方便看效果 */

			 }

	*  水平垂直居中二  （https://segmentfault.com/q/1010000007257786）

			未知容器的宽高，利用 `transform` 属性

			div {
				position: absolute;		/* 相对定位或绝对定位均可 */
				width:500px;
				height:300px;
				top: 50%;  /*百分比是相对于包含块的高宽的比例，相对定位的时候，定位 top 和 left 的起点是 content box 的顶端和左侧，百分比相对的值也是 content box 的高度。然而绝对定位的时候，定位的起点和百分比都是相对 padding box 而言的*/
				left: 50%;
				transform: translate(-50%, -50%);
				background-color: pink;	 	/* 方便看效果 */
			}

	*  水平垂直居中三

			利用 flex 布局
			实际使用时应考虑兼容性

			.container {
				display: flex;
				align-items: center; 		/* 垂直居中 */
				justify-content: center;	/* 水平居中 */

			}
			.container div {
				width: 100px;
				height: 100px;
				background-color: pink;		/* 方便看效果 */
			}  


- display有哪些值？说明他们的作用。

		  block       	块类型。默认宽度为父元素宽度，可设置宽高，换行显示。
		  none        	缺省值。象行内元素类型一样显示。
		  inline      	行内元素类型。默认宽度为内容宽度，不可设置宽高，同行显示。
		  inline-block  默认宽度为内容宽度，可以设置宽高，同行显示。
		  list-item   	象块类型元素一样显示，并添加样式列表标记。
		  table       	此元素会作为块级表格来显示。
		  inherit     	规定应该从父元素继承 display 属性的值。




- CSS3有哪些新特性？

		  新增各种CSS选择器	（: not(.input)：所有 class 不是“input”的节点）
  		  圆角		    （border-radius:8px）
		  多列布局	    （multi-column layout）
		  阴影和反射	（Shadow\Reflect）
		  文字特效		（text-shadow、）
		  文字渲染		（Text-decoration）
		  线性渐变		（gradient）
		  旋转		 	（transform）
          缩放,定位,倾斜,动画,多背景
		  例如:transform:\rotate \scale(0.85,0.90)\ translate(0px,-30px)\ skew(-9deg,0deg)\Animation:

- 请解释一下CSS3的Flexbox（弹性盒布局模型）,以及适用场景？

		 一个用于页面布局的全新CSS3功能，Flexbox可以把列表放在同一个方向（从上到下排列，从左到右），并让列表能延伸到占用可用的空间。
		 较为复杂的布局还可以通过嵌套一个伸缩容器（flex container）来实现。
		 采用Flex布局的元素，称为Flex容器（flex container），简称"容器"。
		 它的所有子元素自动成为容器成员，称为Flex项目（flex item），简称"项目"。
		 常规布局是基于块和内联流方向，而Flex布局是基于flex-flow流可以很方便的用来做局中，能对不同屏幕大小自适应。
		 在布局上有了比以前更加灵活的空间。

		 具体：http://www.w3cplus.com/css3/flexbox-basics.html

- 用纯CSS创建一个三角形的原理是什么？ （https://segmentfault.com/a/1190000003833676）（https://blog.csdn.net/pigsuper/article/details/43053679）

		border边框其实不是规则的矩形，当增大border的值时可发现四个边框时梯形，当把宽高设为0 ，边框就变成了三角形
		把上、左、右三条边隐藏掉（颜色设为 transparent）
		#demo {
		  width: 0;
		  height: 0;
		  border-width: 20px;
		  border-style: solid;
		  border-color: transparent transparent red transparent;
		}

- 一个满屏 品 字布局 如何设计? （https://blog.csdn.net/sjinsa/article/details/70903940）

		简单的方式：
			上面的div宽100%，
			下面的两个div分别宽50%，
			然后用float或者inline使其不换行即可

- css多列等高如何实现？  （https://www.jianshu.com/p/c6a757882252）

		利用padding-bottom|margin-bottom正负值相抵；
		设置父容器设置超出隐藏（overflow:hidden），这样子父容器的高度就还是它里面的列没有设定padding-bottom时的高度，
		当它里面的任 一列高度增加了，则父容器的高度被撑到里面最高那列的高度，
		其他比这列矮的列会用它们的padding-bottom补偿这部分高度差。


- 经常遇到的浏览器的兼容性有哪些？原因，解决方法是什么，常用hack的技巧 ？

	    * png24位的图片在iE6浏览器上出现背景，解决方案是做成PNG8.

		* 浏览器默认的margin和padding不同。解决方案是加一个全局的*{margin:0;padding:0;}来统一。

		* IE6双边距bug:块属性标签float后，又有横行的margin情况下，在ie6显示margin比设置的大。

		  浮动ie产生的双倍距离 #box{ float:left; width:10px; margin:0 0 0 100px;}

	      这种情况之下IE会产生20px的距离，解决方案是在float的标签样式控制中加入 ——_display:inline;将其转化为行内属性。(_这个符号只有ie6会识别)

		  渐进识别的方式，从总体中逐渐排除局部。

		  首先，巧妙的使用“\9”这一标记，将IE游览器从所有情况中分离出来。
		  接着，再次使用“+”将IE8和IE7、IE6分离开来，这样IE8已经独立识别。

          css
	          .bb{
		          background-color:red;/*所有识别*/
			      background-color:#00deff\9; /*IE6、7、8识别*/
			      +background-color:#a200ff;/*IE6、7识别*/
			      _background-color:#1e0bd1;/*IE6识别*/
	          }


		*  IE下,可以使用获取常规属性的方法来获取自定义属性,
		   也可以使用getAttribute()获取自定义属性;
           Firefox下,只能使用getAttribute()获取自定义属性。
           解决方法:统一通过getAttribute()获取自定义属性。

		*  IE下,even对象有x,y属性,但是没有pageX,pageY属性;
           Firefox下,event对象有pageX,pageY属性,但是没有x,y属性。

		*  解决方法：（条件注释）缺点是在IE浏览器下可能会增加额外的HTTP请求数。

		*  Chrome 中文界面下默认会将小于 12px 的文本强制按照 12px 显示,
		   可通过加入 CSS 属性 -webkit-text-size-adjust: none; 解决。

		超链接访问过后hover样式就不出现了 被点击访问过的超链接样式不在具有hover和active了解决方法是改变CSS属性的排列顺序:
	    L-V-H-A :  a:link {} a:visited {} a:hover {} a:active {}


- li与li之间有看不见的空白间隔是什么原因引起的？有什么解决办法？

		浏览器会把inline元素间的空白字符（空格、换行、Tab等）渲染成一个空格。而为了美观。我们通常是一个<li>放在一行，这导致<li>换行后产生换行字符，它变成一个空格，占用了一个字符的宽度。

		解决：

		方法一：为<li>设置float: left。不足：有些容器是不能设置浮动，如左右切换的焦点图等。

		方法二：将所有<li>写在同一行。不足：代码不美观。

		方法三：将<ul>内的字符尺寸直接设为0，即font-size: 0。 ， 然后再设置li元素的font-size为正正常值， 比如14px； 不足：<ul>中的其他字符尺寸也被设为0，需要额外重新设定其他字符尺寸，且在	Safari浏览器依然会出现空白间隔。

		方法四：消除<ul>的字符间隔letter-spacing: -8px，而这也设置了<li>内的字符间隔，因此需要将<li>内的字符间隔设为默认letter-spacing: normal。 (小点：letter-spacing为每个字符之间的空白距离，word-spacing为单词之间的空白距离，)


- 为什么要初始化CSS样式。

		- 因为浏览器的兼容问题，不同浏览器对有些标签的默认值是不同的，如果没对CSS初始化往往会出现浏览器之间的页面显示差异。

		- 当然，初始化样式会对SEO有一定的影响，但鱼和熊掌不可兼得，但力求影响最小的情况下初始化。

		最简单的初始化方法： * {padding: 0; margin: 0;} （强烈不建议）

		淘宝的样式初始化代码：
		body, h1, h2, h3, h4, h5, h6, hr, p, blockquote, dl, dt, dd, ul, ol, li, pre, form, fieldset, legend, button, input, textarea, th, td { margin:0; padding:0; }
		body, button, input, select, textarea { font:12px/1.5tahoma, arial, \5b8b\4f53; }
		h1, h2, h3, h4, h5, h6{ font-size:100%; }
		address, cite, dfn, em, var { font-style:normal; }
		code, kbd, pre, samp { font-family:couriernew, courier, monospace; }
		small{ font-size:12px; }
		ul, ol { list-style:none; }
		a { text-decoration:none; }
		a:hover { text-decoration:underline; }
		sup { vertical-align:text-top; }
		sub{ vertical-align:text-bottom; }
		legend { color:#000; }
		fieldset, img { border:0; }
		button, input, select, textarea { font-size:100%; }
		table { border-collapse:collapse; border-spacing:0; }



- CSS里的visibility属性有个collapse属性值是干嘛用的？在不同浏览器下以后什么区别？

	对于普通元素visibility:collapse;会将元素完全隐藏,不占据页面布局空间,与display:none;表现相同.
	如果目标元素为table,visibility:collapse;将table隐藏,但是会占据页面布局空间.
	仅在Firefox下起作用,IE会显示元素,Chrome会将元素隐藏,但是占据空间.

- position跟display、margin collapse、overflow、float这些特性相互叠加后会怎么样？

	如果元素的display为none,那么元素不被渲染,position,float不起作用,如果元素拥有position:absolute;或者position:fixed;属性那么元素将为绝对定位,float不起作用.如果元素float属性不是none,元素会脱离文档流,根据float属性值来显示.有浮动,绝对定位,inline-block属性的元素,margin不会和垂直方向上的其他元素margin折叠.（翻译：外边距用来指定非浮动元素与其周围盒子边缘的最小距离。两个或两个以上的相邻的垂直外边距会被折叠并使用它们之间最大的那个外边距值。多数情况下，折叠垂直外边距可以在视觉上显得更美观，也更贴近设计师的预期。）
	


- css定义的权重

		以下是权重的规则：标签的权重为1，class的权重为10，id的权重为100，以下例子是演示各种定义的权重值：

		/*权重为1*/
		div{
		}
		/*权重为10*/
		.class1{
		}
		/*权重为100*/
		#id1{
		}
		/*权重为100+1=101*/
		#id1 div{
		}
		/*权重为10+1=11*/
		.class1 div{
		}
		/*权重为10+10+1=21*/
		.class1 .class2 div{
		}

		如果权重相同，则最后定义的样式会起作用，但是应该避免这种情况出现


- 请解释一下为什么需要清除浮动？清除浮动的方式

	清除浮动是为了清除使用浮动元素产生的影响。浮动的元素，高度会塌陷，而高度的塌陷使我们页面后面的布局不能正常显示。

		1、父级div定义height；
		2、父级div 也一起浮动；
		3、常规的使用一个class；
			.clearfix::before, .clearfix::after {
			    content: " ";
			    display: table;
			}
			.clearfix::after {
			    clear: both;
			}
			.clearfix {
			    *zoom: 1;
			}

		4、SASS编译的时候，浮动元素的父级div定义伪类:after
			&::after,&::before{
			    content: " ";
		        visibility: hidden;
		        display: block;
		        height: 0;
		        clear: both;
			}

		解析原理：
		1) display:block 使生成的元素以块级元素显示,占满剩余空间;
		2) height:0 避免生成内容破坏原有布局的高度。
		3) visibility:hidden 使生成的内容不可见，并允许可能被生成内容盖住的内容可以进行点击和交互;
		4）通过 content:"."生成内容作为最后一个元素，至于content里面是点还是其他都是可以的，例如oocss里面就有经典的 content:".",有些版本可能content 里面内容为空,一丝冰凉是不推荐这样做的,firefox直到7.0 content:”" 仍然会产生额外的空隙；
		5）zoom：1 触发IE hasLayout。

		通过分析发现，除了clear：both用来闭合浮动的，其他代码无非都是为了隐藏掉content生成的内容，这也就是其他版本的闭合浮动为什么会有font-size：0，line-height：0。

- 什么是外边距合并？

		外边距合并指的是，当两个垂直外边距相遇时，它们将形成一个外边距。
		合并后的外边距的高度等于两个发生合并的外边距的高度中的较大者。
		w3school介绍网址： http://www.w3school.com.cn/css/css_margin_collapsing.asp

- zoom:1的清除浮动原理?

		清除浮动，触发hasLayout；
		Zoom属性是IE浏览器的专有属性，它可以设置或检索对象的缩放比例。解决ie下比较奇葩的bug。
		譬如外边距（margin）的重叠，浮动清除，触发ie的haslayout属性等。

		来龙去脉大概如下：
		当设置了zoom的值之后，所设置的元素就会就会扩大或者缩小，高度宽度就会重新计算了，这里一旦改变zoom值时其实也会发生重新渲染，运用这个原理，也就解决了ie下子元素浮动时候父元素不随着自动扩大的问题。

		Zoom属是IE浏览器的专有属性，火狐和老版本的webkit核心的浏览器都不支持这个属性。然而，zoom现在已经被逐步标准化，出现在 CSS 3.0 规范草案中。

		目前非ie由于不支持这个属性，它们又是通过什么属性来实现元素的缩放呢？
		可以通过css3里面的动画属性scale进行缩放。

- 移动端的布局用过媒体查询吗？


	假设你现在正用一台显示设备来阅读这篇文章，同时你也想把它投影到屏幕上，或者打印出来，
	而显示设备、屏幕投影和打印等这些媒介都有自己的特点，CSS就是为文档提供在不同媒介上展示的适配方法

	<!-- link元素中的CSS媒体查询 -->
	当媒体查询为真时，相关的样式表或样式规则会按照正常的级联规被应用。
	当媒体查询返回假， <link> 标签上带有媒体查询的样式表 仍将被下载 （只不过不会被应用）。

	<link rel="stylesheet" media="(max-width: 800px)" href="example.css" />

	<!-- 样式表中的CSS媒体查询 -->
	包含了一个媒体类型和至少一个使用 宽度、高度和颜色等媒体属性来限制样式表范围的表达式。
	CSS3加入的媒体查询使得无需修改内容便可以使样式应用于某些特定的设备范围。

	<style>
		@media (min-width: 700px) and (orientation: landscape){
		  .sidebar {
		    display: none;
		  }
		}
	</style>



- 使用 CSS 预处理器吗？喜欢那个？

		SASS (SASS、LESS没有本质区别，只因为团队前端都是用的SASS)


- CSS优化、提高性能的方法有哪些？

		关键选择器（key selector）。选择器的最后面的部分为关键选择器（即用来匹配目标元素的部分）；
		如果规则拥有 ID 选择器作为其关键选择器，则不要为规则增加标签。过滤掉无关的规则（这样样式系统就不会浪费时间去匹配它们了）；
		提取项目的通用公有样式，增强可复用性，按模块编写组件；增强项目的协同开发性、可维护性和可扩展性;
		使用预处理工具或构建工具（gulp对css进行语法检查、自动补前缀、打包压缩、自动优雅降级）；


- 浏览器是怎样解析CSS选择器的？（http://www.cnblogs.com/zhaodongyu/p/3341080.html）

		样式系统从关键选择器开始匹配，然后左移查找规则选择器的祖先元素。
		只要选择器的子树一直在工作，样式系统就会持续左移，直到和规则匹配，或者是因为不匹配而放弃该规则。


- 在网页中的应该使用奇数还是偶数的字体？为什么呢？

- margin和padding分别适合什么场景使用？

		margin是用来隔开元素与元素的间距；padding是用来隔开元素与内容的间隔。
		margin用于布局分开元素使元素与元素互不相干；
		padding用于元素与内容之间的间隔，让内容（文字）与（包裹）元素之间有一段


- 抽离样式模块怎么写，说出思路，有无实践经验？[阿里航旅的面试题]

- 元素竖向的百分比设定是相对于容器的高度吗？(https://segmentfault.com/a/1190000012955996)

	height的百分比相对于父容器的高度 ， 而margin-top、 padding-top、margin-bottom 、 padding-bottom是相对于父容器的宽度

- 全屏滚动的原理是什么？用到了CSS的那些属性？

（1）原理：方法一是整体的元素一直排列下去，假设有5个需要展示的全屏页面，那么高度是500% ，只是展示100%，剩下的可以通过transform进行y轴定位，也可以通过margin-top实现

（2）overflow：hidden； transition：transform 1000ms ease；

 (3) 父元素绑定wheel事件（touchstart 、 touchmove事件）

- 什么是响应式设计？响应式设计的基本原理是什么？如何兼容低版本的IE？

（1）响应式网站设计(Responsive Web design)的理念是：集中创建页面的图片排版大小，可以智 
	能地根据用户行为以及使用的设备环境（系统平台、屏幕尺寸、屏幕定向等）进行相对应的布局。

（2）基本原理: 媒体查询 @media  (http://www.runoob.com/cssref/css3-pr-mediaquery.html  ,  https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Media_queries)

（3）兼容IE可以使用JS辅助一下来解决

- 视差滚动效果，如何给每页做不同的动画？（回到顶部，向下滑动要再次出现，和只出现一次分别怎么做？）
	https://juejin.im/entry/5975ede7f265da6c322e213f

- ::before 和 :after中双冒号和单冒号 有什么区别？解释一下这2个伪元素的作用 (https://blog.csdn.net/WinSolstice/article/details/78709323)。

		单冒号(:)用于CSS3伪类，双冒号(::)用于CSS3伪元素。（伪元素由双冒号和伪元素名称组成） , 这是在CSS3中引入的， 二低版本的浏览器不支持CSS3，所以不支持双冒号，这个时候尽量使用单冒号
		想让插入的内容出现在其它内容前，使用::before，否者，使用::after；
		在代码顺序上，::after生成的内容也比::before生成的内容靠后。
		如果按堆栈视角，::after生成的内容会在::before生成的内容之上

- 如何修改chrome记住密码后自动填充表单的黄色背景 ？

		input:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill {
		  background-color: rgb(250, 255, 189); /* #FAFFBD; */
		  background-image: none;
		  color: rgb(0, 0, 0);
		}


- 怎么让Chrome支持小于12px 的文字？

		1、用图片：如果是内容固定不变情况下，使用将小于12px文字内容切出做图片，这样不影响兼容也不影响美观。
		2、使用12px及12px以上字体大小：为了兼容各大主流浏览器，建议设计美工图时候设置大于或等于12px的字体大小，如果是接单的这个时候就需要给客户讲解小于12px浏览器不兼容等事宜。
		3、继续使用小于12px字体大小样式设置：如果不考虑chrome可以不用考虑兼容，同时在设置小于12px对象设置-webkit-text-size-adjust:none，做到最大兼容考虑。
		4、使用12px以上字体：为了兼容、为了代码更简单 从新考虑权重下兼容性。

- 让页面里的字体变清晰，变细用CSS怎么做？

		-webkit-font-smoothing: antialiased;

- font-style属性可以让它赋值为“oblique” oblique是什么意思？

		倾斜的字体样式

- position:fixed;在android下无效怎么处理？

		fixed的元素是相对整个页面固定位置的，你在屏幕上滑动只是在移动这个所谓的viewport，
		原来的网页还好好的在那，fixed的内容也没有变过位置，
		所以说并不是iOS不支持fixed，只是fixed的元素不是相对手机屏幕固定的。
		<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"/>

- 如果需要手动写动画，你认为最小时间间隔是多久，为什么？（阿里）

		多数显示器默认频率是60Hz，即1秒刷新60次，所以理论上最小间隔为1/60＊1000ms ＝ 16.7ms

- display:inline-block 什么时候会显示间隙？(携程)

		移除空格、使用margin负值、使用font-size:0、letter-spacing、word-spacing

- overflow: scroll时不能平滑滚动的问题怎么处理？

- 有一个高度自适应的div，里面有两个div，一个高度100px，希望另一个填满剩下的高度。
	
	1. height: calc(100%-100px);

	2. 外层box-sizing: border-box; 同时设置padding: 100px 0 0；
	
	   内层100像素高的元素向上移动100像素，这个移动可以使用负margin 或者 absolute定位 ， 具体参见 【test-高度自适应.html】
	
	   另一个元素直接height: 100%;

	3. 外层position: relative；	百分百自适应元素直接position: absolute; top: 100px; bottom: 0; left: 0



- png、jpg、gif 这些图片格式解释一下，分别什么时候用。有没有了解过webp？（https://www.zhihu.com/question/20028452）

	（1）PNG是无损的、使用索引色的、点阵图。 优点是：。压缩比高，色彩好大多数地方都可以用 (PNG-8用八位二进制数表示一个像素，所以可以有256种颜色，PNG-24用24位二进制表示一个像素，可以有1600万种颜色)
	
	（2）JPG是有损的、采用直接色的、点阵图。使用直接色，所以在色调及颜色平滑变化做的不错。 它采用压缩算法，会对图片上每8px*8px的像素进行处理，通过强制渐变的方法来减小文件尺寸
	
	（3）GIF是无损的、采用索引色的、点阵图。以8位色重现真色彩的图像。可以实现动画效果
	
	（4）WebP是同时支持有损和无损压缩的、使用直接色的、点阵图。 的英文歌谷2010在年推出的图片格式，压缩率只有JPG格式的2/3，大小比PNG小了45％，缺点是压缩的时间更久了 。兼容性不好，目前谷歌和歌剧支持。

	（5）SVG全称Scalable Vector Graphics，是无损的、矢量图。放大一个SVG图片的时候，你看到的还是线和曲线，而不会出现像素点。这意味着SVG图片在放大时，不会失真，所以它非常适合用来绘制企业Logo、Icon等。

	照片用 JPG。
	动画用 GIF。
	Logo、Icon 等小图用 PNG-8。
	企业logo等用SVG
	非特殊情况，尽量不要用 PNG-24 和 PNG-32。



- style标签写在body后与body前有什么区别？


- 什么是CSS 预处理器 / 后处理器？

		- 预处理器例如：LESS、Sass、Stylus，用来预编译Sass或less，增强了css代码的复用性，
		  还有层级、mixin、变量、循环、函数等，具有很方便的UI组件模块化开发能力，极大的提高工作效率。

		- 后处理器例如：PostCSS，通常被视为在完成的样式表中根据CSS规范处理CSS，让其更有效；目前最常做的
		  是给CSS属性添加浏览器私有前缀，实现跨浏览器兼容性的问题。


- rem布局的优缺点 , em 和 rem的区别？ (https://yanhaijing.com/css/2017/09/29/principle-of-rem-layout/ ，http://www.cnblogs.com/lyzg/p/4877277.html)
	
	1. em作为font-size的单位时 ， 表示父级字体的大小， 作用在其他属性的时候表示的是自身字体的大小

	2. rem作用于非根元素的时候， 相对的是根元素字体的大小 ； rem作用于根元素的时候 ，相对的是初始字体的大小（16px）

	设计图尺寸：width 640px , 某一个元素 210px高;
 	640/100 = 6.4;
	font-size = clientWidth/6.4 + 'px';
	body : width: 6.4rem;
	element ： height: 2.1rem;
	webapp开发原则： 文字流式，控件弹性，图片等比缩放。

- 三次握手 ， 四次挥手

	https://github.com/jawil/blog/issues/14

- 浏览器加载、渲染页面的过程？

	https://github.com/jawil/blog/issues/9


- 平时怎么解决跨域的。以及后续JSONP的原理和实现以及cors怎么设置。

  1、跨域发生的条件有三个： 浏览器发出的请求（不允许跨域是浏览器的限制）、请求的url跨域了（协议、域名、端口任意一个不同）、发出的ajax请求

  2、针对上面说的三个条件 ， 有不同的解决办法

	 1. 设置浏览器允许跨域， 比如chrome disable-web-secure

	 2. 避免出现跨域 ， 设置服务器允许跨域，比如spring可以给方法加上@crossorigin注解 ， 并且在方法中返回相应的响应头。

	 3. 
		这个和请求的类型有关 ，简单请求是先请求后判断， 即允许发送请求，带上	origin ， 如果服务器响应了并且在 access-control-allow-orgin/access-control-allow-method中表明允许跨域，则正常显示 ； 否则报错（虽然此时已经返回了数据 ，在控制台可以看到，但不会显示） 。

		复杂请求则是先发送一条options请求 ， 如果服务器返回允许， 则再发送正常请求 ， 否则报错。

  3、避免请求的type为xhr ， 即不用ajax ，而用script支持跨域的特性， 这就是jsonp技术
	
	<button id="btn">click</button>
	<script type="text/javascript">
		function $(str){
			return document.getElementById(str)
		}
		function CreateScript(src) {
			var Scrip=document.createElement('script');
			Scrip.src=src;
			document.body.appendChild(Scrip);
		}
		function jsonpcallback(json) {
				console.log(json);//Object { email="中国", email2="中国222"}
		}
		$('btn').onclick=function(){
			CreateScript("http://localhost:51335/somejson?callback=jsonpcallback")    
		}
	</script>
				

	备注：简单请求指的是 get、post请求 ， 并且无自定义头，并且content-type为text/plain 、 multipart/form-data 、application/x-www-from-urlencoded之一的ajax请求；

		  复杂请求指的是 delete、put请求 ， 或者有自定义头 ， 或者 content-type为 application/json的ajax请求



	





