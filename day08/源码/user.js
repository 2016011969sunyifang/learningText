const db = require('./db')

// user modu这个数据库里面mongodb://localhost:27017/modu  要遵守这个格式 多出来的不要 
const userSchema = new db.mongoose.Schema({
   username :{type:String},
    pass:{type:String},
    age:{type:Number}
})

// mongodb://localhost:27017/modu 里面的users  严格遵守userSchema的规范
module.exports = db.mongoose.model('users',userSchema)





