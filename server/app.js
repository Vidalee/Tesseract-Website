"use strict";

const Hapi = require("hapi");
const HapiSwagger = require("hapi-swagger");
const Inert = require("inert");
const Vision = require("vision");
const routes = require("./routes");

const r = require("rethinkdbdash")({
  port: 28015,
  host: "localhost"
});

exports.r = r;

const server = Hapi.server({
  port: 3001,
  host: "localhost"
});
server.route(routes);
console.log(`Server running at: ${server.info.uri}`);

const start = async function() {
  try {
    await server.register({
      plugin: require("hapi-cors"),
      options: {
        origins: ["http://localhost:3000"]
      }
    });

    await server.start();
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

start();
