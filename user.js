var mongoose  = require('mongoose');
var Schema    = mongoose.Schema;
var config    = require('./config');

var UserSchema = new Schema({
  nickname: { type: String},//昵称
  loginname: { type: String},//登录名字
  password: { type: String },
});

mongoose.model('User', UserSchema);


var mongoose = require('mongoose');

mongoose.connect(config.db, function (err) {
  if (err) {
    console.error('connect to %s error: ', config.db, err.message);
    process.exit(1);
  }
});

User  = mongoose.model('User');

exports.saveUser = function(nickname, loginname, password, callback) {
  var user         = new User();
  user.nickname    = nickname;
  user.loginname   = loginname;
  user.password   = password;

  user.save(callback);
};

exports.getUserByLoginName = function (loginName, callback) {
  User.findOne({'loginname': loginName}, callback);
};