

require('dotenv').config();
global.fetch = require('node-fetch');
const AWS = require('aws-sdk');

var creds = new AWS.Config({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID, secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,  region: process.env.AWS_DEFAULT_REGION
  });

var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider(creds);



//var config = new AWS.Config(creds);

var params = {
    UserPoolId: process.env.AWS_POOL_ID ,/* required */
    Username: 'marco', /* required */
    DesiredDeliveryMediums: [
      "EMAIL"
      /* more items */
    ],
    //ForceAliasCreation: false,
    //MessageAction: 'SUPPRESS',
    //TemporaryPassword: 'STRING_VALUE',
    UserAttributes: [
      {
        Name: 'email', /* required */
        Value: 'pbls2@cin.ufpe.br'
      },
      {
        Name: 'email_verified', /* required */
        Value: 'True'
      },
      /* more items */
    ]
   /* ValidationData: [
      {
        Name: 'STRING_VALUE', /* required 
        Value: 'STRING_VALUE'
      },
      /* more items 
    ] */
  };
  cognitoidentityserviceprovider.adminCreateUser(params, function(err, data) {
    if (err) console.log(err, err.stack); // an error occurred
    else     console.log(data);           // successful response
  });


  
