const PostInfo = require('../models/post');
const unique = require('array-unique');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const PostRouter = (router) => {
  router.get('/posts', (req, res, next) => {
    PostInfo.find().exec((err, posts) => {
      res.status(200).json({
        posts,
      });
    });
  });

  router.get('/posts/:postId', (req, res, next) => {
    PostInfo.findOne({ '_id': req.params.postId }).exec((err, post) => {
      if (err) {
        res.json({
          err
        });
      } else {
        res.status(200).json({
          post,
        });
      }
    });
  });

  router.get('/posts/searchByUsername/:username', (req, res, next) => {
    PostInfo.findOne({ 'username': req.params.username }).exec((err, post) => {
      if (err) {
        res.json({
          err
        });
      } else {
        res.status(200).json({
          post,
        });
      }
    });
  });

  router.get('/posts/searchBySalary/:salary/:moneyUnit', (req, res, next) => {
    const salary = req.params.salary;
    const moneyUnit = req.params.moneyUnit;
    PostInfo.find({
      $and: [
        { 'startSalary': { $lte: salary } },
        { 'endSalary': { $gte: salary } },
        { 'moneyUnit': moneyUnit }
      ]
    }).exec((err, posts) => {
      if (err) {
        res.json({
          err
        });
      } else {
        res.status(200).json({
          posts,
        });
      }
    });
  });

  router.post('/posts', (req, res, next) => {
    PostInfo.create(req.body).then((post) => {
      res.send(post);
    });
  });

  router.put('/posts/:postId', (req, res, next) => {
    PostInfo.findByIdAndUpdate({ _id: req.params.postId }, req.body).then(
      (post) => res.send(post)
    );
  });

}

module.exports = PostRouter;
