const user = require('./user')


console.log('我是mongouse.js')


// user.insertMany([{
//     username:'宋江',
//     pass:123456,
//     age:11,
   
// },{
//     username:'卢俊义',
//     pass:123456,
//     age:2,
   
// },{
//     username:'吴用',
//     pass:123456,
//     age:111,
    
// },{
//     username:'公孙胜',
//     pass:123456,
//     age:19,
   
// },{
//     username:'关胜',
//     pass:123456,
//     age:19,
   
// },{
//     username:'林冲',
//     pass:123456,
//     age:19,
  
// },{
//     username:'秦明',
//     pass:123456,
//     age:15,
   
// },{
//     username:'呼延灼',
//     pass:123456,
//     age:40,
    
// },{
//     username:'花荣',
//     pass:123456,
//     age:66,
    
// },{
//     username:'柴进',
//     pass:123456,
//     age:55,
   
// },{
//     username:'李应',
//     pass:123456,
//     age:88,
   
// }],(err,data)=>{
//     if(err) {
//         console.log(err)
//     }
//     console.log('成功写入数据')
//     console.log(data)
// })



// user.deleteOne({username:'宋江2'},(err,data)=>{
//     if(err) {
//         console.log(err)
//     }
//     console.log(data)
// })

//修改 
// user.updateOne({username:'卢俊义'},{$set:{username:'卢俊义2'}},(err)=>{
//     if(err) {
//         console.log(err)
//     }
//     console.log('修改成功')
// })



// user.find({username:'关胜'},(err,data)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log(data)
// })





