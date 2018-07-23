
let newArr = []

//递归方式
function flatten(arr){
    if(arr.length==0){
        return 
    }

    for(let i=0;i<arr.length;i++){
        if(typeof arr[i] === 'number'){
            newArr.push(arr[i])
        }else{
            flatten(arr[i])
        }
    }
}
let arr = [3,[4,7,[1,0,1],7],4,[1,2]]
flatten(arr)
console.log(newArr)

//tostring方式
function flatten2(arr){
    return arr.toString().split(',')
}
let arr2 = [3,[4,7,[1,0,1],7],4,[1,2]]
console.log(flatten2(arr2))

//es6的扩展运算符... ， 不过只能扁平一层 ，需要做一个循环检测
function flatten3(arr){
    while(arr.some(item => item.constructor === 'Array')){
        arr = [].concat(...arr)
    }
    return arr
}
let arr3 = [3,[4,7,[1,0,1],7],4,[1,2]]
console.log(flatten2(arr3))


//对数据进行处理，最后得到一个结果，可以用reduce()方法
function flatten4(arr){
    let newArr  = arr.reduce((accumulator, current) => {
        return accumulator.concat(Array.isArray(current)?flatten4(current):current)
    } , [])

    return newArr
}
let arr4 = [3,[4,7,[1,0,1],7],4,[1,2]]
console.log(flatten4(arr4))

