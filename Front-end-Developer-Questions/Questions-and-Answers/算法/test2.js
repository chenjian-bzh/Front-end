/**选择排序
 * 首先在未排序序列中找到最小（大）元素，存放到排序序列的起始位置，然后，再从剩余未排序元素中继续寻找最小（大）元素，然后放到已排序序列的末尾。
 */
function selectSort(arr){
    let len = arr.length,
        minIndex = 0,
        temp = 0;
    for(let i=0;i<len;i++){
        minIndex = i
        for(let j=i+1;j<len;j++){
            if(arr[j] < arr[minIndex]){
                minIndex = j
            }
        }
        if(i != minIndex){
            temp = arr[i]
            arr[i] = arr[minIndex]
            arr[minIndex] = temp
        }
    }
}

let arr = [3,6,9,1,2,0,4,2]
selectSort(arr)
console.log(arr)