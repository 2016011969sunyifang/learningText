const user = require('./users');

console.log('我是mongouse');

user.insertMany({ username: '林冲2', sex: 'girl', age: 18 });

user.deleteOne({ username: '林冲2' }, (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data);
})

user.updateOne({ username: '林冲2' }, { $set: { username: '卢俊义2' } }, (err) => {
    if (err) {
        console.log(err)
    }
    console.log('修改成功')
})

user.find({ username: '林冲1' }, (err, data) => {
    if (err) {
        console.log(err)
    }
    console.log(data)
})