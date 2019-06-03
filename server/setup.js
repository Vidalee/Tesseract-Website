const r = require("rethinkdbdash")({
  port: 28015,
  host: "localhost"
});

//r.dbCreate("tesseract").run();
/*r.db("tesseract")
//  .tableCreate("users")
  .tableCreate("scores")
  .run();
*/
/*var obj = [
  {
    seed: 42,
    time: 1234,
    u1: "Vivi",
    u2: "TurtleSmoke",
    u3: "Framboise",
    u4: "",
    when: 1559509324
  },
  {
    seed: 777,
    time: 7,
    u1: "DreamExe",
    u2: "e-Niem",
    u3: "TurtleSmoke",
    u4: "Vivi",
    when: 1559509518
  }
];
r.db("tesseract")
  .table("scores")
  .insert(obj[0])
  .run();
r.db("tesseract")
  .table("scores")
  .insert(obj[1])
  .run();
*/
r.db("tesseract").table("users").update({"icon": 548}).run()
