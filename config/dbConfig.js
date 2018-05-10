'use strict'

let dbName = "polydb";
let dbHost = "mongodb://user:polyhome@60.205.151.71:57017/";
let mongoose = require("mongoose");

exports.connect = function (request, response) {
  // useMongoClient防止报错
  mongoose.connect(dbHost + dbName, {
    useMongoClient: true
  });
  let db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function (callback) {
    console.log('connet success!');
  });
}