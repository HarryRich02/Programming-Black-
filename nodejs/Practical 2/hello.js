const express = require('express');
const app = express();

app.get('/', function(req, resp){
   resp.send('Hello world');
});
app.get("/b*b", function(req, resp){
    resp.send("aaaaaaaaaaaaa");
});
app.get("/params/:verb/:noun", function(req, resp){
    resp.send(req.params.verb + " to " + req.params.noun);
});
app.get("/w", function(req, resp){
    resp.send(req.query.person);
});

app.listen(8090);