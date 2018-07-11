/**原型链继承 */
function Parent1(){
    this.name = 'as'
    this.getName = function(){
        return this.name
    }
}

function Child1(){

}

Child1.prototype = new Parent1()
Child1.prototype.constructor = Child1

var child1 = new Child1()

/**原型继承 */
var parent2 = {
    name: 'ca',
    hobbies: ['eat' , 'sleep']
}

function createObj(o){ //和Object.create 以及 Object.setPrototypeOf(obj , proptotype)一样
    var F = function(){}
    F.prototype = o
    return new F()
}

var child2_1 = createObj(parent2)
var child2_2 = createObj(parent2)

child2_1.name = '2_1'
child2_1.hobbies.push('play')
console.log(child2_2.name)
console.log(child2_2.hobbies)

/**构造函数继承 */
function Parent3(name){
    this.name = name
    this.getName = function(){
        return this.name
    }
}

function Child3(name){
    Parent3.call(this, name)
    this.age = 23
}

var child3 = new Child3('xiaohei')

/**组合继承 */
function Parent4(name , age){
    this.name = name
    this.age = age
    this.hobbies = ['eat' , 'sleep']
}

Parent4.prototype.getName = function(){
    return this.name
}

function Child4(name , age){
    Parent4.call(this , name , age)
}

Child4.prototype = new Parent4()
Child4.prototype.constructor = Child4

var child4_1 = new Child4('xiaohei' , 1)
var child4_2 = new Child4('feitan' , 2)
child4_1.hobbies.push('play')

console.log("*******************************")
console.log([child4_1.name , child4_1.age , child4_1.hobbies])
console.log([child4_2.name , child4_2.age , child4_2.hobbies])


/**寄生式继承 */
function createObj(o){
    var clone = Object.create(o)
    clone.getName = function(){
        return this.name
    }
    return clone
}


/**组合寄生式继承 */
function Parent5(name , age){
    this.name = name
    this.age = age
    this.hobbies = ['eat' , 'sleep']
}

Parent5.prototype.getName = function(){
    return this.name
}

function Child5(name , age){
    Parent5.call(this , name , age)
}

var F5 = function(){}
F5.prototype = Parent5.prototype
Child5.prototype = new F5()
Child5.prototype.constructor = Child5

var child5 = new Child5('xiaobai' , 1)

console.log("*******************************")
console.log([child5.name , child5.age , child5.hobbies])

