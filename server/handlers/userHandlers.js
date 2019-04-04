var main = require("../app");
var Boom = require("boom");

module.exports = {
  getUser: function(request, h) {
    return new Promise(resolve => {
      main.r
        .db("tesseract")
        .table("users")
        .filter({ username: request.params.username })
        .run()
        .then(function(response) {
          console.log(response);
          if (response.length != 0) {
            console.log("User successfully returned");
            resolve(response[0]);
          } else {
            resolve(Boom.notFound("User not found."));
          }
        });
    });
  },
  getUserList: function(request, h) {
    var L = [];
    return new Promise(resolve => {
      main.r
        .db("tesseract")
        .table("users")
        .run()
        .then(function(response) {
          console.log(response);
          response.forEach(user => {
            L.push(user.username);
          });
          resolve(L);
        });
    });
  }
};
