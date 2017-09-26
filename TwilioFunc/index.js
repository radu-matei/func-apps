const qs = require("querystring");
const MessagingResponse = require('twilio').twiml.MessagingResponse;

module.exports = function (context, req) {
  context.log('JavaScript HTTP trigger function processed a request.');

  const formValues = qs.parse(req.body);

  const twiml = new MessagingResponse();
  twiml.message('Welcome to Cloud Application Development workshop! ' + formValues.Body);

  context.res = {
    status: 200,
    body: twiml.toString(),
    headers: { 'Content-Type': 'application/xml' },
    isRaw: true
  };

  context.done();
};




// module.exports = function (context, req) {
//     context.log('JavaScript HTTP trigger function processed a request.');

//     if (req.query.name || (req.body && req.body.name)) {
//         context.res = {
//             // status: 200, /* Defaults to 200 */
//             body: "Hello " + (req.query.name || req.body.name)
//         };
//     }
//     else {
//         context.res = {
//             status: 400,
//             body: "Please pass a name on the query string or in the request body"
//         };
//     }
//     context.done();
// };