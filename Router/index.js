'use strict'


const express = require('express');
const app = express();
var router = express.Router();


router.get('/',function(req,res){
  res.send('main')
})



module.exports = router
