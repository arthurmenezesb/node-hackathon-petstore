import express from 'express';
import bodyParser from 'body-parser';
import errorhandler from 'strong-error-handler';
import {petController} from '../server/controllers/petController';
import { orderController } from '../server/controllers/orderController';

export const app = express();

app.use(express.static(__dirname + '/../client/app'));

// middleware for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended: true}));

// middleware for json body parsing
app.use(bodyParser.json({limit: '5mb'}));

// enable corse for all origins
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Expose-Headers", "x-total-count");
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH");
  res.header("Access-Control-Allow-Headers", "Content-Type,authorization");

  next();
});

app.use('/pet', petController); 
app.use('/order', orderController); 


/*app.get('*', function(req, res){
    //res.sendFile('../client/app/index.html');
    res.sendFile('C:/Projetos/GitHub/node-hackathon-petstore/client/app/index.html');
});*/

app.get('*', function (req, res) {
    res.sendFile('index.html', {root: "./client/app"});
});

app.use(errorhandler({
    debug: process.env.ENV !== 'prod',
    log: true,
  }));