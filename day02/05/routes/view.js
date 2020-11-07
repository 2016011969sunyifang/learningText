const router = require('express').Router()

const fs = require('fs')

router.get('/index.html', (req, res) => {
    fs.readFile('./view/index.html', 'utf8', (err, data) => {
        if (err) return console.log(err)

        // res.send() 方法如果返回的 buffer 的数据格式, 会自动下载
        res.send(data)
    })
})



module.exports = router