const path = require('path')

const express = require("express")

const rootDir = require('./root-path')

const router = express.Router()

router.get("/",(req,res,next) =>{
    console.log("Hello Welcome to my shop");
    res.sendFile(path.join(rootDir, "views", "shop.html"));
});

module.exports = router;