const express = require('express')
const testRouer = require('./route/test')
const app = express()
app.use(testRouer)
app.listen(8081, () => {
    console.log('running at port 8081 !!!')
})
