
/**
 * 类的定义相当于下面代码：
 *  var Foo = function(name){
        this.name = name
    }
    Foo.prototype.getName = function(){console.log('asdasd')}
 */
class Foo{

    constructor(name , age){
        this.name = name
        this.age = age
    }
    //静态方法只能类直接调用，实例不能调用
    static sayHello(){console.log('this is static method')}

    getName(){
        console.log('asdasd')
    }
}
//类的新方法可以定义在prototype上
Object.assign(Foo.prototype , {
    getAge: function(){
        console.log(20)
    }
})

var foo = new Foo('cc' , 20)
foo.getName()
foo.getAge()
Foo.sayHello()  
console.log(foo.address)
console.log(Foo.prototype)
console.log(Object.keys(Foo.prototype)) //类的内部定义的方法是不可枚举的
console.log(Object.getOwnPropertyNames(Foo.prototype)) 


//实例的属性除非显式定义在其本身（即定义在this对象上），否则都是定义在原型上（即定义在class上）。
console.log(foo.hasOwnProperty('name'))
console.log(foo.hasOwnProperty('age'))
console.log(foo.hasOwnProperty('getName'))
console.log(foo.hasOwnProperty('getAge'))


//因为实例的原型指向了类的原型 ， 所以可以通过实例的原型给类添加方法，  这样所有实例都可以共享
var foo2 = new Foo('asdas', 30)
var proto = Object.getPrototypeOf(foo) //或者 foo._proto_
proto.sayHello = function(){console.log('hello')}
foo2.sayHello()


/**
 * 类实现私有方法
 */

 //1. 利用闭包
var Bar = function(){
    // _bar作为类的私有方法 , 外部无法访问
    function _bar(){console.log('this is private bar')}

    var BarClass = new class{
        constructor(){}
        
        foo(){console.log('this is foo')}

        bar(){
            _bar()
        }
    }()

    return BarClass
}

var obj = new Bar()
console.log(obj)
obj.foo()
obj.bar()

//2、利用 Symbol 的唯一性
var bar = Symbol('bar')

class Bar2{
    constructor(){}

    foo(){
        this[bar]()
    }

    [bar](){
        console.log('this is private method')
    }
}

var obj2 = new Bar2()
obj2.foo()

/**
 * 类的静态属性
 * 
 */
class Foo2 {
    name = 43
}

Foo2.prop = 1; //只能通过这种方式实现静态属性， 因为static只能定义静态方法
Foo2.prop // 1
