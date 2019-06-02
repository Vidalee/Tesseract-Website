var Joi = require("joi");
var handlers = require("../handlers/scoresHandlers");

/**
 * @api {get} /scores/:username Request Scores of a player
 * @apiName Get Player
 * @apiGroup Scores
 *
 * @apiParam {string} username Username of the player.
 *
 * @apiSuccess {JSON} List List of Score objects.
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [{
          "time": 2 ,
          "u1":  "Joueur_A" ,
          "u2":  "Neo" ,
          "u3":  "" ,
          "u4":  "" ,
          "when": 1559509324
        }]
 */

const getScoresConfig = {
  validate: {
    params: {
      username: Joi.string()
        .required()
        .description("Username of the player.")
    }
  }
};

module.exports = [
  {
    method: "GET",
    path: "/scores/{username}",
    handler: handlers.getScores,
    config: getScoresConfig
  }
];
