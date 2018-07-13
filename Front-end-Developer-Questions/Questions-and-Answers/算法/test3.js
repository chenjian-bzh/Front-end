/*插入排序*/
function insertSort(arr) {
    let len = arr.length
    for(let i=1;i<len;i++) {
        let j = i-1
        let key = arr[i]
        while(j>=0 && arr[j] > key) {
            arr[j+1] = arr[j]
            j--
        }
        arr[j+1] = key
    }
}

let arr = [3,6,9,1,2,0,4,2]
insertSort(arr)
console.log(arr)

/**二分查找改进插入排序 */
function insertSort2(arr){
    let len = arr.length
    for(let i=1;i<len;i++){
        let left = 0,
            right = i-1
            key = arr[i]
        while(right < left){
            let middle = (right+left)/2
            if(key < arr[middle]){
                right = middle - 1
            }else{
                left = middle + 1
            }
        }
        for(let j=i-1; j>=left; j--){
            arr[j+1] = arr[j]
        }
        arr[left] = key
    }
}
let arr2 = [3,6,9,1,2,0,4,2]
insertSort(arr2)
console.log(arr2)