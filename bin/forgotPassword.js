require('dotenv').config();
global.fetch = require('node-fetch');
const AWS = require('aws-sdk');

var creds = new AWS.Config({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID, secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,  region: process.env.AWS_DEFAULT_REGION, 
    apiVersion:process.env.AWS_COGNITO_API_VERSION
  });

var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider(creds);
var params = {
    ClientId: process.env.AWS_POOL_CLIENT_ID, /* required */
    Username: 'marco', /* required */
    
  };
  cognitoidentityserviceprovider.forgotPassword(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  });