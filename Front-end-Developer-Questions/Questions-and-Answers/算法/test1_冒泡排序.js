
/**冒泡排序 */
function bubbleSort(arr){
      let len = arr.length

      for(let i=0;i<len;i++){
          for(let j=0;j<(len-i);j++){
              if(arr[j] > arr[j+1]){
                  let temp = arr[j]
                  arr[j] = arr[j+1]
                  arr[j+1] = temp
              }
          }
      }
}

let arr = [3,6,9,1,2,0,4,2]
bubbleSort(arr)
console.log(arr)

/**改进 */
function bubbleSort2(arr){
    let len = arr.length

    for(let i=0;i<len;i++){
        let lastIndex = len 
        while(lastIndex > 0){
            for(let j=0;j<lastIndex;j++){
                if(arr[j] > arr[j+1]){
                    let temp = arr[j]
                    arr[j] = arr[j+1]
                    arr[j+1] = temp
                    lastIndex = j
                }
            }
        }
    }
}
let arr2 = [3,6,9,1,2,0,4,2]
bubbleSort(arr2)
console.log(arr2)