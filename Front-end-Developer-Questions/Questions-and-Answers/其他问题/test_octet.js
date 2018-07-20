
/**
 * 这是应用程序文件的默认值。意思是 未知的应用程序文件 ，浏览器一般不会自动执行或询问执行。
 * 浏览器会像对待 设置了HTTP头Content-Disposition 值为“附件”的文件一样来对待这类文件 , 即下载下来，但是没有类型
 */

let fs = require('fs')

require('http').createServer(function(req , res){
    fs.readFile('./test.jpg' , function(err ,data){
        if(err){
            console.err(err)
        }else{
            res.setHeader('content-type' ,'application/octet-stream')
            //res.setHeader('X-Content-Type-Options', 'nosniff')
            res.write(data)
            res.end()
        }
    })

}).listen(9090, '127.0.0.1')