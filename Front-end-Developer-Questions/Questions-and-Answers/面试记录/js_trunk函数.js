//正常调用
fs.readFile(filename , callback)

//thunk
let readFileThunk = Thunk(filename)

readFileThunk(callback)

function Thunk(filename){
    return function(callback){
        return fs.readFile(filename , callback)
    }
}

//thunk转换器
function Thunk(fn){
    
    return function(){
        let args = Array.prototype.slice.call(null , arguments)
        return function(callback){
            args.push(callback)
            fn.call(this, args)
        }
    }
}
var readFileThunk = Thunk(fs.readFile)
readFileThunk('../test.js')(function(){})

//Generator对象的使用
function