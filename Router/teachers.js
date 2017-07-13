'use strict'

const express = require('express');
const app = express();
var router = express.Router();
var model = require('../models')


router.get('/',function(req,res){
  model.Teachers.findAll().then(data => {
  // projects will be an array of all Project instances
    res.render('teachers',{objdata : data})
  })
})



module.exports = router
