'use strict'


const express = require('express');
const app = express();
var router = express.Router();


router.get('/',function(req,res){
  res.render('main',{})
})



module.exports = router
