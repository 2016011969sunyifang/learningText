const router = require('express').Router()

router.get('/a',(req,res)=>{
    const {url,query} = req
    console.log(url)
    console.log(query)
    res.send({
        msg:query
    })
})





module.exports = router
