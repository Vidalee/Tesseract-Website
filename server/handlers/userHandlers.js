var main = require("../app");
var Boom = require("boom");
var crypto = require("crypto");

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
            //:^)
            delete response[0].password;
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
          response.forEach(user => {
            L.push(user.username);
          });
          resolve(L);
        });
    });
  },
  register: function(request, h) {
    console.log(request.payload);
    if (
      request.payload.username === undefined ||
      request.payload.password === undefined
    )
      resolve(Boom.notFound("Bad payload"));
    return new Promise(resolve => {
      main.r
        .db("tesseract")
        .table("users")
        .filter({ l_username: request.payload.username.toLowerCase() })
        .run()
        .then(function(response) {
          if (response.length != 0) {
            resolve("Username already taken");
          } else {
            main.r
              .db("tesseract")
              .table("users")
              .insert({
                l_username: request.payload.username.toLowerCase(),
                username: request.payload.username,
                password: crypto
                  .createHash("sha256")
                  .update(request.payload.password + "nyancat")
                  .digest("hex")
                  .toUpperCase(),
                authority: 0,
                online: false,
                icon: Math.random() * (1000 - 3) + 3
              })
              .then(function(response) {
                resolve("Success");
              });
          }
        });
    });
  }
};
