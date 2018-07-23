/**归并排序
 * 将数组分隔成左右两份进行排序之后再归并， 递归进行这样的操作
 */
function mergeSort(arr){
    let len = arr.length,
        middle = Math.floor(len/2),
        left = arr.slice(0,middle),
        right = arr.slice(middle,len);
    if(len<2){
        return arr
    }
    return merge(mergeSort(left), mergeSort(right))
}

function merge(left , right){
    let result = []
    while(left.length && right.length){
        if(left[0] < right[0]){
            result.push(left.shift())
        }else{
            result.push(right.shift())
        }
    }
    while(left.length){
        result.push(left.shift())
    }
    while(right.length){
        result.push(right.shift())
    }
    return result
}

var arr=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(mergeSort(arr));
