var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;

var UserSchema = new Schema({
  nickname: { type: String},//昵称
  loginname: { type: String},//登录名字
  password: { type: String },
});

mongoose.model('User', UserSchema);


var mongoose = require('mongoose');
var config = {
	db: 'uozDROq0Vcg5QkT6:pbAMjWfdc8DgSomT6@10.10.72.139:27017/Ph17LyIrTEpl9xaz'
}

mongoose.connect(config.db, function (err) {
  if (err) {
    console.error('connect to %s error: ', config.db, err.message);
    process.exit(1);
  }
});

User  = mongoose.model('User');

exports.save_user = function() {
  var user         = new User();
  user.nickname    = "Johnny";
  user.loginname   = "Johnny";
  user.password   = "password";

  user.save(function (err, data){ });
};

exports.getUserByLoginName = function (loginName, callback) {
  User.findOne({'loginname': loginName}, callback);
};

exports.find_user = function (){
	exports.getUserByLoginName('johnny', function(err, user){
  	  	console.log(user);
  	});
}

exports.save_user();
exports.find_user();