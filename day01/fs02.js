const { fstat } = require("fs");

const fs = require('fs');
// fs.appendFile('./data1.txt', 'hello\n', (err) => {
//     if (err) console.log(err);
//     console.log('写入成功');
// })
fs.readdir('./node_modules', (err, data) => {
    if (err) return console.log(err);
    console.log('读取文件夹成功');
    console.log(data);
})
