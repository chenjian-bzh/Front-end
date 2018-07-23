/**堆排序 */

function sort(arr){
    let N = arr.length
    for(let i=N/2 ; i>=1 ;i--){
        sink(arr, i , N)
    }

    while(N>1){
        swap(arr, 1 ,N--)
        sink(arr, 1, N)
    }
}

function swap(arr , x , y){
    let temp = arr[x-1]
    arr[x-1] = arr[y-1]
    arr[y-1] = temp
}


function sink(arr, i , N){
    while(i*2 < N){
        let j = 2*i

        if(j<N && (arr[j]<arr[j+1])){
            swap(arr , j , j+1)
        }
        if(arr[i] >= arr[j]){
            break
        }
        swap(arr , i ,j)
        i = j
    }
}

let arr = [6,3,8,5,9,7,1,2,0,4]
sort(arr)
console.log(arr)