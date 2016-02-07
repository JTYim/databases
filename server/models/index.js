var db = require('../db');
module.exports = {

  messages: {
    get: function (cb) {
      var qStr = "select messages.id, messages.txt, messages.roomID users.username from messages left outer join users on (messages.userID = user.id) order by messages.id desc";
      db.query( qStr, function(err, results){
        callback( results );
      });
    },
    post: function (parameters, cb) {
      var qStr = "insert into messages (message, userID, roomID) values(?, (select id from users where username = ? limit 1), ?)"; // items to insert
      db.query( qStr, parameters, function(err, results){
        cb(results);
      });
    }
  },

  users: {
    get: function (cb) {  // function that produces all the messages
      var qStr = "select * from users";  // select from users table
      db.query( qStr, function(err, results){
        cb(results);
      });
    }, 
    post: function (parameters,cb) {   // function used to insert a message into the database
      var qStr = "insert into users(username) values (?)";
      db.query( qStr, parameters, function(err, results){
        callback( results );
      });
    }
  },
};

