var theThing = null; 

function replaceThing() {
    var orginalThing = theThing ;
    // Define a closure that references originalThing but doesn't ever actually get called.
    // But because this closure exists, originalThing will be in the lexical environment for all closures defined in replaceThing, instead of being optimized out of it.
    // If you remove this function, there is no leak.
    // 定义一个闭包引用originalThing，但并不执行这个闭包function。
    // 由于闭包的存在，originalThing会在挂到当前作用域下全部闭包的作用域中，而不是随着replaceThing退出而变得无引用
    // 去掉unused 或者 去掉unused中的originalThing，就不会有内存泄露了
    var unused = function(){
        if(orginalThing){}
    }

    theThing = {
        logStr : new Date().getTime().toString(),
        // While originalThing is theoretically accessible by this function, it obviously doesn't use it.
        // But because originalThing is part of the lexical environment,
        // someMethod will hold a reference to originalThing,
        // and so even though we are replacing theThing with something that has no effective way to reference the old value of theThing,
        // the old value will never get cleaned up!
        // 理论上someMethod可以访问originalThing，但他没有访问
        // 但因为originalThing已经被挂到了someMethod的作用域
        // 所以第n+1次setInterval的第3行，引用了第n次中的theTing，其中someMethod的作用域中有第n次的originalThing的引用
        // 好像蛇头吃蛇尾，引用链永远不断，gc无法回收，形成内存泄露
        someMethod : function(){}
    }

    try {
        global.gc();
      } catch (e) {
        console.log("You must run program with 'node --expose-gc index.js' or 'npm start'");
        process.exit();
    }
    
    var heapUsed = process.memoryUsage().heapUsed;
    console.log("Program is using " + heapUsed + " bytes of Heap.")

    // If you add `originalThing = null` here, there is no leak.
    //debugger
    //orginalThing = null
}

setInterval(replaceThing , 1000)    
