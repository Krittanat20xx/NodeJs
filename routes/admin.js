const path = require('path')
const fs = require("fs")
const express = require('express');
const rootDir = require('./root-path')
const router = express.Router()

router.get("/add-product",(req,res,next) =>{
    console.log("add-product page")
    res.sendFile(path.join(rootDir,"views","add-product.html"))
});

router.post("/add-product",(req,res,naxt) =>{
    console.log(typeof req.body);
    const msg = JSON.parse(JSON.stringify(req.body));
    const txtMsg = msg["title"];

    fs.appendFile(
        path.join(rootDir,"data","pro-title.txt"), txtMsg, err =>{
        if(err) throw err;
        console.log("Finished");
    }
    );

    res.redirect("/");
});

module.exports = router