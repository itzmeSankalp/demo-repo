const express = require("express");
const app = express();

app.post("/", function(req,res){
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    
    res.json({
        msg:"done"
    })
})

app.listen(3004);

