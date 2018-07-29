

## <a name='other'>前端框架</a>

- React 使用场景？

			逻辑复杂单页应用，偏中后台管理系统，纯展示性的UI页面不合适、

- 描述一下React 生命周期

			渲染过程调用到的生命周期函数，主要几个要知道；

			创建和插入dom树的时候调用：

			* constructor 
			* getInitialState 
			* getDefaultProps 
			* componentWillMount  (装配发生前被立刻调用。其在render()之前被调用，因此在这方法里同步地设置状态将不会触发重渲。)
			* render 
			* componentDidMount  (被装配后立即调用。初始化使得DOM节点应该进行到这里。若你需要从远端加载数据，这是一个适合实现网络请求的地方。在该方法里设置状态将会触发重渲。
								  在这个方法中调用setState()将会触发一次额外的渲染，但是它将在浏览器刷新屏幕之前发生。这保证了即使render()将会调用两次，但用户不会看到中间状态。)

			更新过程

			* componentWillReceiveProps 
			* shouldComponentUpdate 
			* componentWillUpdate 
			* render 
			* componentDidUpdate 

			卸载过程

			componentWillUnmount


- 实现组件有哪些方式？ (https://doc.react-china.org/docs/introducing-jsx.html)

	1. React.createClass 使用API来定义组件

        https://doc.react-china.org/docs/react-without-es6.html

        ```
        var Mycompoent = React.createClasss({
            render: function(){
                return <h1>asdad</h1>
            }
        })
        ```
        这种方式不需要手动绑定方法的this  ；
         如果props需要默认值，必须写一个getDefaultProps()方法 ； 
         设置state默认值需要getInitialState()方法

	2. React ES6 class component 用 ES6 的class 来定义组件
	```
	class Welcome extends React.Component{
		constructor(){}

		render(){
			return (
				<h1>hello , {this.props.name}</h1>
			)
		}
	}
	```
	3. Functional stateless component 通过函数定义无状态组件
	```
	function Welcome(props){
		return <h1>hello , {props.name}</h1>
	}
	```


- 应该在React生命周期的什么阶段发出ajax请求，为什么？

				AJAX请求应在 componentDidMount函数 进行请求。

- shouldComponentUpdate函数有什么作用？

				shouldComponentUpdate是一个允许我们自行决定某些组件（以及他们的子组件）是否进行更新的生命周期函数，reconciliation的最终目的是尽可能以最有效的方式去根据新的state更新UI，
				如果你已经知道UI的哪些状态无需进行改变，就没必要去让React去判断它是否该改变。 让shouldComponentUpdate返回falss, React就会让当前的组件和其子组件保持不变。

- 当组件的setState函数被调用之后，发生了什么？

				React会做的第一件事就是把你传递给setState的参数对象合并到组件原先的state。 如果shouldComponentUpdate() 不是返回false，setState()永远都会导致重渲
				这个事件会导致一个“reconciliation”（调和）的过程。reconciliation的最终目标就是，
				尽可能以最高效的方法，去基于新的state来更新UI。为了达到这个目的，React会构建一个React元素树（你可以把这个想象成一个表示UI的一个对象）。一旦这个树构建完毕，
				React为了根据新的state去决定UI要怎么进行改变，它会找出这棵新树和旧树的不同之处。React能够相对精确地找出哪些位置发生了改变以及如何发生了什么变化，
				并且知道如何只通过必要的更新来最小化重渲染。

				setState的第一个参数可以是一个方法 ， 使用方法可以避免一个周期内多次调用setState导致状态被覆盖的情况发生 ，
				```
				setState((prestate , props))
				```

- 为什么循环产生的组件中要利用上key这个特殊的prop？

	1. Keys负责帮助React跟踪列表中哪些元素被改变/添加/移除。React利用子元素的key在比较两棵树的时候，快速得知一个元素是新的还是刚刚被移除。
	2. Keys应该是稳定的，可预测的，且唯一的。不稳定的key（类似由Math.random()生成的）将使得大量组件实例和DOM节点进行不必要的重建，使得性能下降并丢失子组件的状态 ； 
	   而传递他们在数组中的索引作为key。若元素没有重排，该方法效果不错，但重排会使得其变慢。
	当索引用作key时，组件状态在重新排序时就会有问题。组件实例基于key进行更新和重用。如果key是索引，则item的顺序变化会改变key值。或者内容不一样的节点拥有相同的key值，
	这将导致受控组件的状态可能会以意想不到的方式混淆和更新。

	默认时。当递归DOM节点的子节点，React同时递归两个子节点列表，并在有不同时产生一个变更。
	如果没有key ， 在列表后面追加元素的时候不会遇到什么问题，因为React会同时比较两棵树的<li>first</li>，没有变化不做变更； 同时比较两棵树的<li>second</li> 节点，没有变化不做变更；
	而当匹配到第三个元素的时候，发现原列表没有，新列表有，  所有就在新树后面追加一个元素
	```
	<ul>
		<li>first</li>
		<li>second</li>
	</ul>

	<ul>
		<li>first</li>
		<li>second</li>
		<li>third</li>
	</ul>
	```

	若原生实现，在开始插入元素会使得性能更棘手。例如，两棵树的转换效果则比较糟糕：

	```
		<ul>
			<li>Duke</li>
			<li>Villanova</li>
		</ul>

		<ul>
			<li>Connecticut</li>
			<li>Duke</li>
			<li>Villanova</li>
		</ul>
	```
	React匹配两个列表的第一个元素时发现不一样 ， 就在树中丢弃原节点，创建新节点 ； 之后的每个元素也是一样 ， React会调整每个子节点，而非意识到可以完整保留<li>Duke</li> 和 <li>Villanova</li>子树。低效成了一个问题。

	而有了key之后就不一样了：
	```
	<ul>
		<li key="2015">Duke</li>
		<li key="2016">Villanova</li>
	</ul>

	<ul>
		<li key="2014">Connecticut</li>
		<li key="2015">Duke</li>
		<li key="2016">Villanova</li>
	</ul>
	```
	现在React知道带有'2014'的key的元素是新的，并仅移动带有'2015'和'2016'的key的元素。

- 如何实现条件渲？
  
  首先 ，if 语句和 for 循环在 JavaScript 中不是表达式，因此它们不能直接在 JSX 中使用

  1. 三目运算符
  2. &&与运算符
  3. 组件的render函数返回null，阻止组件渲染 ， 组件的 render 方法返回 null 并不会影响该组件生命周期方法的回调。例如，componentWillUpdate 和 componentDidUpdate 依然可以被调用。
  4. 在函数中可以使用if语句、switch控制 ， 返回不同的组件


- 受控组件(Controlled Component)与非受控组件(Uncontrolled Component)的区别?

    input、select这类元素会维持自己的状态 ， 受控组件是指将这些状态交由react管理，对用户输入的相应也交由react ； 非受控组件则是状态又input等元素自己管理， 然后通过ref的方式获取值 。 <input type='file'/>始终是一个非受控组件，因为他没有用户输入

- refs 是什么?(https://doc.react-china.org/docs/refs-and-the-dom.html)

	Refs是能访问DOM元素或组件实例的一个函数；有三种方式使用ref

    1. 字面量设置 ， 然后通过this.refs访问
    ```
    <input type='text' ref='myinput'>

    this.refs.myinput.value
    ```

    2. 通过React.createRef()设置ref属性，然后将ref属性传递给dom元素或者组件节点 , 访问的时候dom节点或组件是存储在ref属性的current属性中
    ```
    constructor（props){
        this.myinput = React.createRef()
    }

    <input type='text' ref={this.myinput}>

    this.myinput.current.value
    ```

    3. 通过ref回调 , 这种情况没有current的存在
    ```
    <input type='text' ref={(input) => this.myinput=input}>

    this.myinput.value
    ```

    可以通过传递回调函数形式的ref向父组件暴露自己的dom节点
    ```
    function CustomTextInput(props) {
  
        return (
            <div>
            <input ref={props.inputRef} />
            </div>
        );
    }

    class Parent extends React.Component {
    
        handle(){
            alert(this.inputElement.value)
        }
        
        render() {
            return (
                <div>
                    <CustomTextInput
                    inputRef={el => this.inputElement = el}
                    />
                    <button onClick={e => this.handle()}>ceshi</button>
                </div>
                );
        }
    }
    ```

- React为什么自己定义一套事件体系呢，与浏览器原生事件体系有什么关系？

- 什么时候应该选择用class实现一个组件，什么时候用一个函数实现一个组件？

			组件用到了state或者用了生命周期函数，那么就该使用Class component。其他情况下，应使用Functional component。

- 什么是HoC（Higher-Order Component）？适用于什么场景？（https://doc.react-china.org/docs/higher-order-components.html）

	高阶组件就是一个函数，且该函数接受一个组件作为参数，并返回一个新的组件，即一个组件包裹着另外一个 React 组件 。


- 并不是父子关系的组件，如何实现相互的数据通信？（http://www.alloyteam.com/2016/01/some-methods-of-reactjs-communication-between-components/）

	1. 如果有相同的父级，则将数据托管给父级，子组件通过回调改变数据

    2. 通过绑定全局事件，实现订阅或者监听

    3. 通过context（上下文） ， 父组件通过 childContexttTypes属性制定传递给子组件的属性类型（必须有），然后通过getChildContext()方法设置需要传递的属性   ；  下游的组件通过 contextTypes属性设置接受的上游的数据类型（必须有），然后就可以通过this.context访问数据了

    4. 使用redux\dva


- 用过 React 技术栈中哪些数据流管理库？（http://www.alloyteam.com/2015/09/react-redux/）

			Redux\Dva

- Redux是如何做到可预测呢？ （https://www.mtyun.com/library/redux-design-code）

    随着组件的复杂度上升（包括交互逻辑和业务逻辑），数据来源逐渐混乱，导致组件内部数据调用十分复杂，Store 的基本思想是将所有的数据集中管理，数据通过 Store 分类处理更新，不再在组件内放养式生长。单向数据流保证了数据的变化是有迹可循且受控制的。
    通过绑定 Store 可以确定唯一数据来源。
    actionCreator 通过 dispatch 触发，使组件内事件调用逻辑清晰，具体的事件处理逻辑不用放在组件写，保持 view 层的纯净。
    Reducer 通过判断不同的 actionType 处理不同数据更新，保证数据有秩序更新。


- Redux将React组件划分为哪两种？

    1、容器组件(智能组件)：容器组件负责做数据交互，容器组件是使用 store.subscribe() 从 Redux state 树中读取部分数据，并通过 props 来把这些数据提供给要渲染的组件。使用connect函数生成
    1. 负责管理数据和业务逻辑，不负责 UI 的呈现
    2. 带有内部状态
    3. 使用 Redux 的 API

    ```
    import { connect } from 'react-redux'

    const VisibleTodoList = connect(
        [mapStateToProps], //参数1将 store 中的数据作为 props 绑定到组件上 

        [mapDispatchToProps], //参数2将 action 作为 props 绑定到组件上。

        [mergeProps], //参数3用于自定义merge流程，将stateProps 和 dispatchProps merge 到parentProps之后赋给组件。通常情况下，你可以不传这个参数，connect会使用 Object.assign。

        [options] //如果指定这个参数，可以定制 connector 的行为。一般不用。
    )(TodoList)

    export default VisibleTodoList
    ```

    上面例子中TodoList就是展示组件，VisibleTodoList是容器组件

    2、展示组件(木偶组件)：在 redux 中，没有与 redux 有直接关联的组件称为木偶组件， 展示组件嵌套在容器组件里,只负责使用数据来显示数据
    1. 只负责 UI 的呈现，不带有任何业务逻辑
    2. 所有数据都由参数（this.props）提供
    3. 不使用任何 Redux 的 API

- Redux是如何将state注入到React组件上的？ 

- 请描述一次完整的 Redux 数据流（https://www.mtyun.com/library/redux-design-code）

    用户在view上操作触发action ， store的dispatch触发这个action， 并且在dispatch之后以及到达reducer之前可以增加过滤器，也就是middleWare，每个过滤器处理完之后调用next到下一个过滤器，最后到reducer，传入当前state和action作为参数，reducer根据actionType判断执行什么操作，返回新的状态，然后store会判断状态是否变化，如果变化就调用监听函数，触发组件的更新。这样所有的数据流动都是从组件到store再到组件的单向。

- React的批量更新机制 BatchUpdates？

- React与Vue，各自的组件更新进行对比，它们有哪些区别？

- React-router 路由的实现原理？

- 说说React Native,Weex框架的实现原理？

- Angular的缺点？ https://www.zhihu.com/question/22284218
 
    优点双向数据绑定,明显的分层,丰富的内置指令和工具函数适合一些小型的交互不是那么复杂的单页应用的开发缺点也很明显,react,vue这些库的优点就是他的缺点.首先双向数据绑定,在交互比较复杂的大型项目,数据流向就会很让人迷惑.然后是自身是一个重量级的框架,用户要受到框架的很多制约灵活性不够.没有react或者vue这样的单文件组件,写一个组件,往往要在html,js,css三个文件中切换.一些小型项目还好,可到了大型项目简直就是灾难.每增加一个组件就要增加三个文件,文件非常琐碎丑陋的依赖注入,自身没有模块打包的能力也没有提供相关的打包的工具,却实现了一个很奇葩的靠依赖注入的模块系统.还不能用来隔离命名空间.完全是鸡肋,为了这个奇葩的依赖注入系统你就不得不写冗长没用的语法,尽管有构建工具帮忙.自身的事件系统不够完整.声称自己是用来做单页应用的可是最基本的触摸事件都没有,拖拽这些也得自己定义.复杂的api,蛋疼的学习难度.ui-router的嵌套路由很不灵活.总的来说angular1.x已经不适合当前的开发了.


- webpack的作用 ？

	webpack是一个集成打包工具 ， 可以进行代码分割，实现延迟加载资源 ； 各种loader可以进行代码转换，无论是AMD、commonJS、还是ES6的模块写的代码都可以转换，React的jsx、Vue的模板写法、 less、sass写法也可以进行转换

	常用插件：
	1. html-webpack-plugin 用于将打包文件插入html文件中

- 为何使用Vuex 、 Redux这类全局状态管理的类库？
   
   举例来说， 比如一个商品销售的下拉框 ，封装成一个组件 <SaleForCountry></SaleForCountry> , 并且这个国家数据是组件内部从后台获取的 ，, 这就存在两个问题

   1. 如果这类组件在同一个界面中出现多次，就可能存在请求的浪费，因为有一个组件实例就会产生一个请求。
   2. 如果国家信息的配置界面与这个组件同时存在，当我们在配置界面中新增一个国家了，下拉框组件中的数据并不会实时刷新。
   
	第一个问题只是资源的浪费，第二个就是数据的不一致了。曾经在很多系统中，大家都是手动刷新当前页面来解决这问题的，但到了这个时代，人们都是追求体验的，在一个全组件化的解决方案中，不应再出现此类问题。
	所以需要引入一层Store，每个组件不直接去到服务端请求数据，而是到对应的前端数据缓存中去获取数据，让这个缓存自己去跟服务端保持同步。
