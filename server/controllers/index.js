var models = require('../models');
var bluebird = require('bluebird');

// var userFields = ['username'];
// var messageFields = ['message', 'username', 'roomname'];

module.exports = {
  messages: {
    // handles get request for all messages
    get: function (req, res) {
      models.messages.get(function(err,results){
        // if(err){ throw err; };
        res.json(results);
      });
    },
    // handles posting a message to the database 
    post: function (req, res) {
      var params = [ req.body[text], req.body[username], req.body[roomname] ];
      models.messages.post(params, function(err,results){
        // if(err){ throw err; };
        res.json(results);
      });
    } 
  },

  users: {
    get: function (req, res) {
      models.users.get(function(err,results){
        // if(err){ throw err; };
        res.json(results);
      });
    },
    post: function (req, res) {
      var params = [ req.body[username] ];
      models.users.post(params, function(err,results){
        // if(err){ throw err; };
        res.json(results);
      });
    }
  }
};

