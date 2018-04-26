

require('dotenv').config();

global.fetch = require('node-fetch');
require('aws-sdk');

let AmazonCognitoIdentity = require('amazon-cognito-identity-js');


var poolData = { UserPoolId : process.env.AWS_POOL_ID,
    ClientId : process.env.AWS_POOL_CLIENT_ID
};
var userPool = new AmazonCognitoIdentity.CognitoUserPool(poolData);

console.log(userPool);

var attributeList = [];
    
    var dataEmail = {
        Name : 'email',
        Value : 'tvg2@cin.ufpe.br'
    };
    
    var attributeEmail = new AmazonCognitoIdentity.CognitoUserAttribute(dataEmail);
    //var attributePhoneNumber = new AmazonCognitoIdentity.CognitoUserAttribute(dataPhoneNumber);

    attributeList.push(attributeEmail);
    //attributeList.push(attributePhoneNumber);

    userPool.signUp('tvg2', "", attributeList, null, function(err, result){
        if (err) {
            console.log(err);
            return;
        }
        cognitoUser = result.user;
        console.log('user name is ' + cognitoUser.getUsername());
    });