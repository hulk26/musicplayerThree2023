const express = require('express');

const fs = require('fs')
require('dotenv').config();

const app = express();
app.set("view engine","ejs");
app.use(express.static('public'));


app.listen(3000,(req,res)=>{
console.log("server running on port 3000 ");
})


