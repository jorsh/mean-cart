var express = require('express');
var app = express();
var router = express.Router();
var mongoose = require('mongoose');

router.get('/', function (req, res, next) {
  res.render('index', {title: 'To Do API'});
});


// MongoDB connect using mongoose
TaskSchema = new mongoose.Schema({
  name: String
});

var Task = mongoose.model('Task', TaskSchema);

// API 
mongoose.connect('mongodb://localhost/todo');

app.get('/tasks', function (req, res, next) {
    Task.find(function(err, tasks){
      if(err){return next(err)}
        console.log(tasks);
      res.json(tasks);
    })
  });

app.post('/task', function (req, res, next) {
  var task = new Task(req.body);

    task.save(function(err, tasks){
      if(err){return next(err)}
        console.log(tasks);
      res.json(tasks);
    })
  });

app.put('/task/:id', function (req, res) {
  res.send('PUT _id task');
});

app.delete('/task/:id', function (req, res) {
  res.send('DELETE _id Taks');
});

app.listen(3000, function () {
  console.log('API on port 3000');
});
