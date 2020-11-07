const router = require('express').Router()

const fs = require('fs')

router.get('/index.html', (req, res) => {
  fs.readFile('./view/index.html', 'utf8', (err, data) => {
    if (err) return console.log(err)
    res.send(data)
  })
})



module.exports = router