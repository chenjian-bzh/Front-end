
/**返回this实现链式调用 */
function A(){
    
}

A.prototype = {
    a: function (){
        this.name1 = 'a'
        return this 
    },
     
    b: function (){
         this.name2 = 'b'
         return this
    },
     
    c: function (){
         this.name3 = 'c'
         console.log(Object.values(this))
    }
}

var obj = new A()
obj.a().b().c()




/**返回函数对象实现链式调用 */
function show(str){
    console.log(str)
    return show
}

show(123)(234)(456)



/**实现函数add ， 使得
 * add(1)(4)(5).valueOf()  //10
 * add(1,2,3)(4).valueOf() //10
 * add(1,2,3)(4)(5).valueOf() //15 
 * */
function add () {
    var args = Array.prototype.slice.call(arguments);
 
    var fn = function () {
        var arg_fn = Array.prototype.slice.call(arguments);
        return add.apply(null, args.concat(arg_fn));
    }
 
    fn.valueOf = function () {
        return args.reduce(function(a, b) {
            return a + b;
        })
    }
 
    return fn;
}

console.log(add(1,2,3)(5))
