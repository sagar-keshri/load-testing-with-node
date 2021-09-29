const postIds = require('./data/postIds.json');
const userIds = require('./data/userIds.json');

module.exports = function() {
  // this object will be serialized to JSON and sent in the body of the request
  const userIdx = Math.floor(Math.random() * 472);
  const postIdx = new Date().getSeconds();
  return {
    "bn": "broker1",
    "deviceId": "4b61c5f13b52889c",
    "message": {
      "attributed": false,
      "isRepost": false,
      "m": "whatsapp",
      "mt": "{}",
      "p": postIds.postIds[postIdx].toString(),
      "radio": "wifi",
      "r": "TrendingFeed",
      "t": 1566803253601,
      "toolTip": 0
    },
    "passCode": "67fd23877073a619b4b9",
    "resTopic": "response/user_647_67fd23877073a619b4b9",
    "userId": userIds.userIds[userIdx].toString()
  };
};
