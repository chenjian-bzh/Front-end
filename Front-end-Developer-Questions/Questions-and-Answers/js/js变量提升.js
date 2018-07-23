function testOrder(arg) {
    console.log(arg); // arg是形参，不会被重新定义
    console.log(a); // 因为函数声明比变量声明优先级高，所以这里a是函数
    var arg = 'hello'; // var arg;变量声明被忽略， arg = 'hello'被执行
    var a = 10; // var a;被忽视; a = 10被执行，a变成number
    function a() {
        console.log('fun');
    } // 被提升到作用域顶部
    console.log(a); // 输出10
    console.log(arg); // 输出hello
}; 
testOrder('hi');