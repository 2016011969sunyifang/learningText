const db = require('./db');

// 在这个数据库里遵守这个格式
const userSchema = new db.mongoose.Schema({
    username: { type: String },
    sex: { type: String },
    age: { type: Number }
});
// 这个数据库里面的student要严格遵守以上规则然后再导出
module.exports = db.mongoose.model('users', userSchema);


