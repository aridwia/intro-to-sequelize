'use strict'

const express = require('express');
const app = express();
var router = express.Router();
var model = require('../models')


router.get('/',function(req,res){
  model.Subjects.findAll().then(data => {
  // projects will be an array of all Project instances
    res.render('subjects',{sbjdata : data})
  })
})



module.exports = router
