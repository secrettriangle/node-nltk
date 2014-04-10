var path = require('path');
var child_process = require('child_process');
var zerorpc = require('zerorpc');

var cp = child_process.spawn(path.join(__dirname, 'server.py'));

var client = new zerorpc.Client();
client.connect('tcp://127.0.0.1:4242');

module.exports = client;