var mongojs = require('mongojs');
var databaseUrl = 'user-database';
var collections = ['users'];

var db = mongojs(databaseUrl, collections);
db.on("error", function(error) {
  console.log('Database Error:', error);
});

module.exports = db
