https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions

/** test()测试当前匹配规则是否能匹配参考字符串 ， 返回布尔类型*/
let ret = /cat/.test("dog and cat .")
console.log('test() 方法：', ret)

/** 
 * exec() 方法输出匹配到的字符串数组 ，
 * 该数组有index ， input两个属性，index表示当前匹配结果的下标， input表示输入字符串
 * 没有g参数的情况下， 从index开始匹配 ， 匹配到第一个就返回 
 * 有g参数的情况下， exec可以多次匹配，下一次匹配从上一次匹配结果的index位置开始往后
 * */
let regx = /a/g
let str = 'abc_abc_abc'

let r1 = regx.exec(str)
let idx1 = r1.index

let r2 = regx.exec(str)
let idx2 = r2.index

let r3 = regx.exec(str)
let idx3 = r3.index

let r4 = regx.exec(str)


console.log('exec()方法：', [r1, idx1] , [r2 , idx2] , [r3 , idx3], [r4 ])


/**
 * 字符串的 match() 方法
 * 规则没有g参数的时候 ， 和 exec() 方法表现相同 ，匹配成功返回一个数组， 失败则返回null
 * 有g参数的时候  ，和exec()不同 ，是一次性返回所有匹配结果
 */
let regx2 = /x/
let str2 = '_xy_yzx'
let ret2 = str2.match(regx2)
console.log('match()方法无g参数 ： ' , ret2)

let regx3 = /x/g
let ret3 = str2.match(regx3)
console.log('match()方法带g参数 ： ' , ret3)

/**
 * 字符串的 search() 方法
 * 返回第一个匹配结果的位置 ，如果没有匹配成功则返回 -1 
 */
let reg4 = /a/
let reg5 = /y/
let str3 = '_bac'
let ret4 = str3.search(reg4)
let ret5 = str3.search(reg5)
console.log('search()方法 ： ' , ret4)
console.log('search()方法 ： ' , ret5)



/**
 * 字符串的split()方法 ，按照指定规则分隔字符串 ， 并返回分隔后的数组
 */
//非正则分隔
let ret6 = 'a,b,c'.split(',')
console.log('split()方法 非正则分割: ', ret6)

//正则分割， 去除逗号后的空格并分割
let ret7 = 'a,   b,      c, d'.split(/,\s*/)
console.log('split()方法 正则分割: ', ret7)


/**
 * 字符串的replace() 方法按照制定规则进行替换 ， 返回的是替换后的字符串
 * 该方法有两个参数 ， 第一个参数是匹配规则 ， 可以是字符串或者正则表达式 ，没有g参数则只替换第一个匹配结果， 有g参数则替换所有匹配结果
 * 第二个参数是替换的内容字符串或者函数
 * 1、第二个参数采用内容字符串
    * 第二个参数可以使用美元符代指不同的变量
    * $& 匹配到的子字符串 
    * $` 匹配结果前面的所有文本
    * $' 匹配结果后面的所有文本
    * $n 匹配结果的第n个结果（有组匹配的时候） ，n从1开始
 * 
 * 2、第二个参数采用函数：
 * 这个函数有若干个参数 ，第一个是匹配到的字符串 ，如果有组匹配， 有几个组匹配结果，之后就有几个参数 ，然后倒数第二个参数是匹配结果的位置 ，最后一个参数是原字符串
 * 
 */
console.log('字符串做匹配规则 ： ' , 'abc_abc'.replace('a' , 'x'))
console.log('正则表达式 无g参数： ' , 'abc_abc'.replace(/a/, 'x'))
console.log('正则表达式 带g参数： ' , 'abc_abc'.replace(/a/g, 'x'))


console.log('第二个参数使用$&： ' , 'abc_abc'.replace(/a/g, '$&ooo'))
console.log('第二个参数使用$`： ' , 'abc_abc'.replace(/a/g, '$`'))
console.log("第二个参数使用$'： " , 'abc_abc'.replace(/a/g, "$'"))
console.log('组匹配测试 $n： ' , 'hello world'.replace(/(\w*)\s(\w*)/ , '$2 $1'))

//replace相处首尾两端的空格
console.log('消除空格:' , '  helloworld  '.replace(/^\s+|$\s+/ , ''))
console.log('消除空格:' , '  helloworld  '.replace(/(\s*)(\w*)(\s*)/ , function(match , $1 , $2){
    return $2
}))
//字符串的replace 实现 数字添加逗号分隔
function commmay(num){
    return num && num
            .toString()
            .replace(/(\d)(?=(\d{3})+\.)/g, function($1){ // x(?=y)这种格式称为先行断言（Positive look-ahead），x只有在y前面才匹配，y不会被计入返回结果
                return $1+","
            })
}
console.log(commmay(987654321.123))

//网页模板填充数据的例子
var prices = {
    'p1': '$1.99',
    'p2': '$9.99',
    'p3': '$5.00'
  };
  
var template = '<span id="p1"></span>'
    + '<span id="p2"></span>'
    + '<span id="p3"></span>';
  
let HTML = template.replace(/(<span id=")(.*?)(">)(<\/span>)/g , function(match , $1, $2, $3, $4, $5, $6){
    console.log("match: " , match)
    console.log("$1 : " , $1)
    console.log("$2 : " , $2)  //在 .* 后面必须加？，表示非贪婪匹配，尽可能少的匹配
    console.log("$3 : " , $3)
    console.log("$4 : " , $4)
    console.log("$5 : " , $5)  //匹配结果的index
    console.log("$6 : " , $6)  //原字符串
    return $1 + $2 + $3 + prices[$2] + $4
})

console.log(HTML)
