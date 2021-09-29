const req_body = require('./req_body_unique_share');
const loadtest = require('loadtest');

function statusCallback(error, result, latency) {
  console.log('Current latency %j, result %j, error %j', latency, result, error);
  console.log('----');
  console.log('Request elapsed milliseconds: ', result.requestElapsed);
  console.log('Request index: ', result.requestIndex);
  console.log('Request loadtest() instance index: ', result.instanceIndex);
}

const options = {
  url: 'http://post-action-service.staging.sharechat.internal/requestType28',
  maxRequests: 1000,
  concurrency: 10,
  requestsPerSecond: 30,
  // timeout: 1000,
  contentType: "application/json",
  method: 'POST',
  body: req_body,
  statusCallback: statusCallback
};

loadtest.loadTest(options, function (error) {
  if (error) {
    return console.error('Got an error: %s', error);
  }
  console.log('Tests run successfully');
});
