const r = require("rethinkdbdash")({
  port: 28015,
  host: "localhost"
});

r.dbCreate("tesseract").run();
r.db("tesseract")
  .tableCreate("users")
  .run();
