const router = require('express').Router()


router.post('/a',(req,res)=>{
    //
    // const {url,query} = req 
    // console.log(url)
    // console.log(query)
    console.log(req.body)

    res.send({
        msg:req.body
    })

})


module.exports = router