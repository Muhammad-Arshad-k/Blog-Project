const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const BlogSchema = new Schema({
    title: String,
    body: String,
  
  });

  const Blog = mongoose.model('blog', BlogSchema);

  module.exports = Blog