//使用 HTTP Header 的 Content-Disposition: attachment 可以实现下载时强制弹出下载对话框。

require('net').createServer(function(sock){
    sock.write('HTTP/1.1 200 OK\r\n')
    sock.write('content-disposition: attachment ; filename=测试.txt\r\n')
    sock.write('content-length: 5\r\n')
    sock.write('\r\n')

    sock.write('12345\r\n')
}).listen(9090, '127.0.0.1')