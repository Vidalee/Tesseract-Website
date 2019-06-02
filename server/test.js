const r = require("rethinkdbdash")({
  port: 28015,
  host: "localhost"
});

var username = "Neo";
r.db("tesseract")
  .table("scores")
  .filter(
    r
      .row("u1")
      .match(username)
      .or(
        r
          .row("u2")
          .match(username)
          .or(
            r
              .row("u3")
              .match(username)
              .or(r.row("u4").match(username))
          )
      )
  )
  .run()
  .then(function(response) {
    console.log(response);
  });
