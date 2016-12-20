// const Post= require('./models/post')
//
//
//
// module.exports = function(app){
//   app.get('/', function(req, res){
//     res.send('hello world')
//   })
//
//   app.post('/posts', function (req,res) {
//     let content = req.body.content;
//     let title = req.body.title;
//     const post = new Post({title: title, content: content});
//     console.log(req.body);
//     post.save(function(){
//       console.log('post saved!');
//     });
//   })
//
//   app.get('/posts', function(req, res) {
//     Post.find().exec(function(err, posts) {
//       res.json({ posts: posts })
//     });
//   });
//
//   app.get('/posts/:id', function(req, res){
//     res.send('read one post');
//   })
//
//   app.put('/posts/:id', function(req, res){
//     res.send('update a post!');
//   })
//
//   app.delete('/posts/:id', function(req, res){
//     res.send('delete a post!');
//   })
// }
