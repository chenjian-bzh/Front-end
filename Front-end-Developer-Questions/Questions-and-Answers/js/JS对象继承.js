function Animal(){
    this.species = "动物";
}

function Cat(name,color){
    this.name = name;
    this.color = color;
}

Cat.prototype = Animal 
var cat = new Cat('cj' , 'blue')
console.log(cat.species) // 打印 'undifined' 
console.log(cat.name)  // 打印 'Animal'  ，因为构造函数有个默认属性name， 值就是构造函数的名字
console.log(cat.color) // 打印 'blue'

Cat.prototype = new Animal ()
var cat = new Cat('cj' , 'blue')
console.log(cat.species) // 
console.log(cat.name)  // 
console.log(cat.color) // 