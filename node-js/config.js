
var config = {
	db: 'uozDROq0Vcg5QkT6:pbAMjWfdc8DgSomT6@10.10.72.139:27017/Ph17LyIrTEpl9xaz'
};

var mongo_address = process.env['MONGO_PORT_27017_TCP_ADDR'];
var mongo_port = process.env['MONGO_PORT_27017_TCP_PORT'];
var mongo_name = "/test";
var db_connect_string = mongo_address + ":" +  mongo_port + mongo_name;
config.db = db_connect_string;

module.exports = config;
