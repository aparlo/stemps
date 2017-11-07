const express = require('express')
const app = express()
const multer = require('multer');
const pug = require('pug')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/img')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)
  }
})

var upload_dir = multer({storage: storage})
var cpUpload = upload_dir.fields([{name:'files[]', maxCount:3}])

app.use(express.static('public'))

// view engine setup
app.set('views', './views')
app.set('view engine', 'pug')

app.get('/', function (req, res) {
  res.render('index', {fileNameis:'Tonny'})
})

app.get('/test-form', function(req, res){
  res.render('test-form')
})

app.post('/newpost', function(req, res){
  res.send('POST request')
})
app.post('/upload', cpUpload, function(req, res){
  console.log(req.files)
  res.status(200).send('Traaaaata')
  // res.end()
})

app.listen(3001, function () {
  console.log('Example app listening on port 3001!')
})
