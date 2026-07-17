const express = require("express");
const app = express()

let requestCount=0;

app.use(function(req,res,next){
    requestCount = requestCount +1;
    next();
    console.log(`${requestCount} requests have been processed`);
})

app.get("/sum/:a/:b", function(req,res){
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.json({
        ans: a+b
    })
})

app.get("/subtract/:a/:b", function(req,res){
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.json({
        ans: a-b
    })
})

app.get("/multiply/:a/:b", function(req,res){
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.json({
        ans: a*b
    })
})

app.get("/divide/:a/:b", function(req,res){
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.json({
        ans: a/b
    })
})

app.listen(3003)