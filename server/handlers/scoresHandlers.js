var main = require("../app");
var Boom = require("boom");

module.exports = {
  getScores: function(request, h) {
    return new Promise(resolve => {
      var username = request.params.username;
      main.r
        .db("tesseract")
        .table("scores")
        .filter(
          main.r
            .row("u1")
            .match(username)
            .or(
              main.r
                .row("u2")
                .match(username)
                .or(
                  main.r
                    .row("u3")
                    .match(username)
                    .or(main.r.row("u4").match(username))
                )
            )
        )
        .run()
        .then(function(response) {
          resolve(response);
        });
    });
  }
};
