var Joi = require("joi");
var handlers = require("../handlers/userHandlers");

/**
 * @api {get} /u/by-name/:username Request Player Information
 * @apiName Get Player
 * @apiGroup User
 *
 * @apiParam {string} username username of the player.
 *
 * @apiSuccess {JSON} User User object.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
        "authority": 7 ,
        "id":  "56fb5d71-4a98-4032-ab91-6f0de963168c" ,
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

//

/**
 * @api {post} /u/register Register a new user
 * @apiName Post Player Register
 * @apiGroup User
 *
 *
 *
 * @apiSuccess {Text} Success Success message.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     Success
 *
 * @apiSuccess {Text} Failure Failure message.
 * @apiSuccessExample {json} Failure-Response:
 *     HTTP/1.1 200 OK
 *     Username already taken
 */

const registerConfig = {
  validate: {
    payload: {
      username: Joi.string()
        .required()
        .description("Username of the player."),
      password: Joi.string()
        .required()
        .description("Password of the player.")
    }
  }
};

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
  },
  {
    method: "POST",
    path: "/u/register",
    handler: handlers.register
    //  config: registerConfig
  },
  {
    method: "Get",
    path: "/u/o/{username}/{authority}",
    handler: handlers.register
    //  config: registerConfig
  }
];
