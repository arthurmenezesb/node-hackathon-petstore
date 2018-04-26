require('dotenv').config();
global.fetch = require('node-fetch');
const AWS = require('aws-sdk');

var creds = new AWS.Config({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID, secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,  region: process.env.AWS_DEFAULT_REGION
  });

var cognitoidentityserviceprovider = new AWS.CognitoIdentityServiceProvider(creds);

/*
    https://docs.aws.amazon.com/cognito-user-identity-pools/latest/APIReference/API_InitiateAuth.html
*/
   var authenticationParam = {
    AuthFlow: "USER_PASSWORD_AUTH",
    ClientId: process.env.AWS_POOL_CLIENT_ID, /* required */
    AnalyticsMetadata: {
      AnalyticsEndpointId: 'STRING_VALUE'
    },
    AuthParameters: {
      'USERNAME': 'marco',
      'PASSWORD': 'Ut9:hZRt'
    }
  };
  cognitoidentityserviceprovider.initiateAuth(authenticationParam, function(err, data) {
    if (err) console.log("ERROR: "  + err, err.stack); // an error occurred
    else {
        // successful response
        console.log(data);

        /**
         * https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/CognitoIdentityServiceProvider.html
         */
        var changeUserPasswordParams = {
            ChallengeName: data.ChallengeName,
            ClientId: process.env.AWS_POOL_CLIENT_ID, /* required */
            
            ChallengeResponses: {
                'USERNAME': data.ChallengeParameters.USER_ID_FOR_SRP,
                'NEW_PASSWORD': 'S@msung1'
            },
            Session: data.Session
        };

        cognitoidentityserviceprovider.respondToAuthChallenge(changeUserPasswordParams, function(err, data){
            if (err) console.log(err, err.stack); // an error occurred
            else {
                console.log('Senha alterada');
                console.log(data);           // successful response
            }     
        });
    }                  
  });