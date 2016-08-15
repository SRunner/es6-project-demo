const User = require('./user.js');
let userName = "";

exports.login = function (req, res) {
    let name = req.body.name;
    let password = req.body.password;
    User.findOne({name: name}, function (err, user) {
        if (err) res.send(err.message);
        if (user == null) {
            // let f = new User({name:name,password:password});
            // f.save(function (err) {
            //     console.log('save status:', err ? 'failed' : 'success');
            // });
            res.status(500).send('NO INFO');
        } else {
            if (user.password != password) {
                res.status(500).send('passwordError');
            } else {
                userName = name;
                console.log(user.tel+user.email);
                if (user.tel && user.email) {
                    res.send('SUCCESS');
                } else {
                    res.send('personalInfo');
                }
            }
        }
    });
};

exports.modify = function (req,res,next) {
    let email = req.body.email;
    let tel = req.body.tel;
    User.update({name:userName},{email:email,tel:tel},function (err) {
        if(err){
            return next(err);
        }else{
            res.send("SUCCESS");
        }
    })
};
// exports.insert = function (req,res,next) {
//     let name = req.body.name;
//     let password = req.body.password;
//     db.connect();
//     User.findOne({name:name},function (err,user) {
//         if(err) return next(err);     res.send(err.message);
//         if(user == null){
//             res.status(500).send('NO INFO');
//         }else{
//             if(user.password != password){
//                 res.status(500).send('passwordError');
//             }else{
//                 if(user.tel||user.email){
//                     res.send('SUCCESS');
//                 }else{
//                     res.send('personalInfo');
//                 }
//             }
//         }
//         db.close();
//     });
// };


// class operate {
//     Remove(id) {
//         User.remove({ID:id}, function (err, user) {
//             if (err) console.log("err");
//             else console.log("remove: " + user);
//         });
//     }
//
//     Update() {
//         User.update({ID: "1234"}, {ID: '1'},
//             function (err, user) {
//                 if (err) console.log("err");
//                 else console.log("update:" + user);
//             })
//     }
//
//     // find(callback) {
//     //     User.find({}, callback);
//     // }
//
//     FindOne(id) {
//         User.findOne({ID:id}, function (err, user) {
//             if (err) console.log("err");
//             else  console.log("findOne: " + user);
//         });
//     }
//
//     Save(saveinformation) {
//         saveinformation.save(function (err, user) {
//             if (err)  {return false;}
//             else  {console.log(user);}
//             db.close();
//         });
//     }
// /*    Save(saveinf)
//     {
//         saveinf.save(callback);
//     }*/
// }
// module.exports = operate;
