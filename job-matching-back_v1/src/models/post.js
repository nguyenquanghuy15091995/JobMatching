const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  username: String,
  postTitle: String,
  postCreateDate: String,
  postValue: String,
  startSalary: Number,
  endSalary: Number,
  moneyUnit: String
});

const PostInfo = mongoose.model('post_infos', postSchema);

module.exports = PostInfo;
