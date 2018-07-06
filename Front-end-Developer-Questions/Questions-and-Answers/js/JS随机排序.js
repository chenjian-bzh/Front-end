function randomSort1(arr){
    
    let len = arr.length
    
    for(let i=0;i<len;i++){
        let random = parseInt(Math.random() * len)
        let temp = arr[random]
        arr[random] = arr[i]
        arr[i] = temp
    }

    return arr
}

function randomSort2(arr){

    let newArr = []

    while(arr.length>0){
        let random = parseInt(Math.random() * arr.length)
        newArr.push(arr[random])
        arr.splice(random , 1)
    }

    return newArr
}

function randomSort3(arr){
    arr.sort(() => {
        return Math.random() - 0.5
    })

    return arr
}

let arr = [1, 2 ,3 ,4, 5, 6, 7, 8, 9]
let newArr = randomSort3(arr)
console.log('arr : ', arr)
console.log('newArr : ', newArr)