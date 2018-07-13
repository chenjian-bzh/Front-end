/*方法说明：快速排序
@param  array 待排序数组*/
//方法一
function quickSort1(arr , lo , hi){
    if(Object.prototype.toString.call(arr).slice(8,-1) === 'Array' && typeof lo === 'number' && typeof hi === 'number'){
        if(lo>=hi){
            return 
        }
        let p = arr[lo]
            i = lo,
            j = hi+1;
        while(true){
            while(arr[++i] < p){
                if(i==hi){
                    break
                }
            }
    
            while(arr[--j] > p){
                if(j==lo){
                    break
                }
            }
            if(i>=j){
                break
            }
            swap(arr , i ,j)
        }
        swap(arr , lo , j)
        quickSort3(arr , lo , j-1)
        quickSort3(arr , j+1 , hi)
    }else{
        throw new Error()
    }
}

function swap(arr, i , j){
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

var arr1=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
quickSort1(arr1)
console.log(arr1);//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]

//方法二
var quickSort2 = function(arr) {
    console.time('2.快速排序耗时');
    　　if(arr.length < 2){
        return arr
    }
    let len = arr.length,
        middle = Math.floor(len/2),
        pivot = arr.splice(middle , 1)[0],
        left = [],
        right = [];
    for(let i=0;i<arr.length;i++){
        if(arr[i] >= pivot){
            right.push(arr[i])
        }else{
            left.push(arr[i])
        }
    }
    console.timeEnd('2.快速排序耗时');
　　return quickSort2(left).concat([pivot], quickSort2(right));
};
var arr2=[3,44,38,5,47,15,36,26,27,2,46,4,19,50,48];
console.log(quickSort(arr2,0,arr2.length-1));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]
console.log(quickSort2(arr2));//[2, 3, 4, 5, 15, 19, 26, 27, 36, 38, 44, 46, 47, 48, 50]


