/**工厂方法 */
var Cat = {

    sound : 'miaomiao' ,

    makeSound : function(){
        return Cat.sound
    },

    createCat: function(name , age){
        var obj = {}
        obj.name = name
        obj.age = age
        obj.makeSound = Cat.makeSound
        return obj
    }
}
var cat1 = Cat.createCat('a', 12)
var cat2 = Cat.createCat('b', 14)
console.log(cat1.name ,cat1.age , cat1.makeSound())
console.log(cat2.name ,cat2.age , cat2.makeSound())

/**构造函数方式 */
function Person(name , age){
    //安全模式，防止用户忘了写new
    if(this instanceof Person){
        this.name = name 
        this.age = age
        this.sayName = function(){
            console.log(this.name);
        };
    }else{
        return new Person(name , age)
    }
}
var p1 = Person("ys", 12);
var p2 = Person("ys", 12);
console.log(p1);                        // { name: 'ys', age: 12, sayName: [Function] } ， 如果不用安全模式这里返回 undefined
console.log(p2);                        // { name: 'ys', age: 12, sayName: [Function] } ， 如果不用安全模式这里返回 undefined
console.log(this.name);                 // undefined ， 如果不用安全模式这里返回 name的值
console.log(this.age);                  // undefined ， 如果不用安全模式这里返回 age的值


/**原型方式 */
//实例属性写在构造函数里
function Animal(name){
    this.name = name
}
//共享属性和方法放在原型上
Animal.prototype.age = 12 
Animal.prototype.sayHello = function(){}


/**Object.create方法 */
var Father = function(name){
    this.name = name
}
var son = null
if(!Object.create){
    Object.create = function(o){
        var F = function(){}
        F.prototype = o
        return new F()
    }
}
son = Object.create(Father)
