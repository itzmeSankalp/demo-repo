const express = require("express");

const app = express();

app.listen(443);

app.get("/posts" , function(req,res){
    res.send({
        title:"Sankalp Jaiswal",
        body:"this is a test message to check if i am able to send the request using the GET method",
        content:"kuch aur likhne ko bachna nahi hai aur dimaag me bhi kuch nahi aa raha hai",
        userId:7192
    })
})
,
