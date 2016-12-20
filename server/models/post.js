var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const postSchema = new Schema(
  {
    title: { type: String },
    content: { type: String }
  }
);
module.exports = mongoose.model('Post', postSchema);
