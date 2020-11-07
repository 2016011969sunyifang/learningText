const http = require('http');

//req request前端请求的东西
//response 记录回应的东西
const app = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': "text/html;charset=utf8" });
    console.log('服务器创建成功');
    res.write(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        我是模
    </body>
    </html>`);
    res.end();
});
// 尽量不要在1024下（系统软件）1024-65535 端口就是门牌号
app.listen(9001, 'localhost', () => {
    console.log('服务器启动成功');
})