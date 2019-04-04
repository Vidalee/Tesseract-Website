var Joi = require("joi");
var handlers = require("../handlers/userHandlers");

/**
 * @api {get} /u/by-name/:username Request Player Information
 * @apiName Get Player
 * @apiGroup User
 *
 * @apiParam {string} username username of the player.
 *
 * @apiSuccess {JSON} User object.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
        "authority": 7 ,
        "id":  "56fb5d71-4a98-4032-ab91-6f0de963168c" ,
        "password":  "password" ,
        "username":  "username"
 *     }
 */

const userConfig = {
  validate: {
    params: {
      username: Joi.string()
        .required()
        .description("Username of the player.")
    }
  }
};

/**
 * @api {get} /u/list Request User List
 * @apiName Get Player List
 * @apiGroup User
 *
 *
 *
 * @apiSuccess {JSON} List of usernames.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     ['username1', 'username2', 'username3']
 */

module.exports = [
  {
    method: "GET",
    path: "/u/by-name/{username}",
    handler: handlers.getUser,
    config: userConfig
  },
  {
    method: "GET",
    path: "/u/list",
    handler: handlers.getUserList
  }
];
