'use strict'

const express = require('express');
const app = express();
var bodyParser = require('body-parser');
var index = require('./Router/index');
var teachers = require('./Router/teachers')
var subjects = require('./Router/subject')
var students = require('./Router/students')

app.use('/',index);
app.use('/teachers',teachers);
app.use('/subject',subjects);
app.use('/students',students);
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.set( "view engine", 'ejs')


// router.get('/',function(req,res){
//   res.send('main')
// })

app.listen(3000)
