const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const Post = require('./models/post');

// app.use(express.static('public'));
app.use(bodyParser.json());

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/sleep-write');

// cats
var db = mongoose.connection;

db.on('error', function (err) {
  console.log(err);
});

db.once('open', function() {
  console.log('success');
});

app.get('/', function(req, res){
  res.send('hello world')
})

app.post('/posts', function (req,res) {
  let content = req.body.content;
  let title = req.body.title;
  const post = new Post({title: title, content: content});
  console.log(req.body);
  post.save(function(){
    console.log('post saved!');
  });
})



app.get('/posts', function(req, res) {
  Post.find().exec(function(err, posts) {
    res.json({ posts: posts })
  });
});

app.get('/posts/:id', function(req, res){
  res.send('read one post');
})

app.put('/posts/:id', function(req, res){
  res.send('update a post!');
})

app.delete('/posts/:id', function(req, res){
  res.send('delete a post!');
})

app.listen(3000 , function(){
  console.log('running on port 3000....');
});



















// const express = require('express')
// const app = express()
// const cors = require('cors')
// app.use(cors())
// const bodyParser = require('body-parser')
// app.use(bodyParser.json())
// const Post = require('./models/post')
// const mongoose = require('mongoose')
// const routes = require('routes')
//
//
//
//
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/sleep-write');
//
//
//
// var db = mongoose.connection;
// db.on('error', console.log);
// db.once('open', function() {
//     console.log('success')
// });
//
// app.get('/',function(req,res){
//   res.send('hello,word\n')
// })
// app.post('/posts',function(req,res){
//   let title = req.body.title
//   let content = req.body.content
//   const post = new Post({title:title,content:content})
//   post.save()
//   res.json(req.body)
// })
// app.listen(3000,function(){
//   console.log('hello.word')
// })
