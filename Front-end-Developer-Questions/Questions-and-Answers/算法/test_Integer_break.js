

/**
 * 将一个正整数分割成若干个正整数的和， 使得这若干个正整数的乘积最大
 */

//递归解法
function integerBreak(n){
    if(n === 1){
        return 1
    }
    let res = -1
    for(let i=1;i<=n-1;i++){
        // n = i + (n-i)
        res = ma3(res , i*(n-i) , i*integerBreak(n-i))
    }
    return res
}


//动态规划
function integerBreak2(n){
    let memo = []
    memo[1] = 1
    for(let i=2 ; i<=n ;i++){
       for(let j=1;j<=n-1;j++){
           // i + (n-i)
           memo[n] = max3(memo[n] , i*(n-i), i*memo[n-i])
       }
    }
    return memo[n]
}