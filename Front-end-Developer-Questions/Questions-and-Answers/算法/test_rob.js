/**
 * 一个街道有若干个房子，每个房子里面的价值不同，如何偷取才能获取最大价值？不能偷取相邻的房子
 */

//递归
function rob(arr, n){
    if(n >= arr.length){
        return 0
    }
    let res = -1 
    for(let i=n;i<arr.length-1;i++){
        res = max(res , arr[i] + rob(arr, i+2))
    }
    return res
}

function rob(arr){
    return rob(arr, 0)
}


//动态规划
//状态是： [x , ... ,n-1]
//状态转移方程是： f(0) = max(v(0)+f(2) , v(1)+f(3) ,v(2)+f(4) , .... , v(n-3)+f(n-1) , v(n-2) , v(n-1))
function rob2(arr , n){
    if(arr.length == 0 ){
        return 0
    }
    let memo = []
    memo[n-1] = arr[n-1]

    for(let i=n-2; i>=0 ;i--){
       for(let j=i;j<arr.length-1;j++){
           memo[i] = max(memo[i] , arr[j]+(j+2)<arr.length?rob2(arr, j+2):0)
       }
    }

    return memo[0]
}