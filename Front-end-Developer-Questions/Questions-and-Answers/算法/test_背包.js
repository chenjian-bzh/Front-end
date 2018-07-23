/**
 * F(i,C) = max(F(i-1 , C) , v(i) + F(i-1 , C-w(i)))
 * v 表示价值数组
 * w 表示重量数组
 * C 表示背包容量
 */

//递归方式
//用[0，1 ，... , index]的物品填充容量为C的背包
 function bestValue(v, w, index, C){
    if(index<0 || C<=0){
        return 0
    }
    let res = bestValue(v, w ,index-1 , C)
    if(C > w[index]){
        res = max(res , bestValue(v, w, index-1, C-w[i]))
    }
    return res
 }

 function bag(v, w, C){
    if(v.length!=w.length || v.length ==0){
        return 0
    }
    return bestValue(v, w, v.length-1, C)
 }


 //动态规划方式
 function bag2(v , w , C){
    if(v.length!=w.length || v.length ==0 ||C==0){
        return 0
    }
    let len = v.length
    let memo = get2Array(len , C+1)

    for(let i=0;i<C+1;i++){
        memo[0][i] = w[i]<C?v[i]:0
    }

    for(let i=1;i<len;i++){
        for(let j=0;j<C+1;j++){
            memo[i][j] = memo[i-1][j]
            if(w[i]<j){
                memo[i][j] = max( memo[i][j] , v[i] + memo[i-1][j-w[i]])
            }
        }
    }
    return memo[len-1][C]
 }