const r = require("rethinkdbdash")({
  port: 28015,
  host: "localhost"
});

r.dbCreate("tesseract").run();
r.db("tesseract")
  .tableCreate("users")
  .tableCreate("scores")
  .run();

var obj = [
  {
    id: "66f5dc57-52d0-4c8c-a1e4-10c1cea50f41",
    seed: 777,
    time: 2,
    u1: "Kira",
    u2: "Neo",
    u3: "",
    u4: "",
    when: 1559509324
  },
  {
    id: "6658b7df-de2e-4387-b62e-68011ae3d7c8",
    seed: 777,
    time: 128,
    u1: "Kira",
    u2: "Neo",
    u3: "Bouh",
    u4: "Tricheur",
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
