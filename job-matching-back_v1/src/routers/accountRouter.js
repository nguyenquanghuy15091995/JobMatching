const AccountInfo = require('../models/account');

const AccountRouter = (router) => {
  router.get('/accounts', (req, res, next) => {
    AccountInfo.find().exec((err, accounts) => {
      console.log(accounts);
      res.status(200).json({
        accounts,
      });
    });

  });

  router.get('/accounts/:username', (req, res, next) => {
    AccountInfo.findOne({ 'username': req.params.username }).exec((err, account) => {
      if (err) {
        res.json({
          err
        });
      } else {
        res.status(200).json({
          account,
        });
      }
    });
  });


  // router.post('/students', (req, res, next) => {
  //   // const product = {
  //   //   name: req.body.name,
  //   //   price: req.body.price,
  //   // };
  //   const stu = new Student({
  //     name: req.body.name,
  //     age: req.body.age
  //   });
  //   Student.create(req.body).then((student) => {
  //     res.send(student);
  //   });
  //   // res.status(200).json({
  //   //   message: product,
  //   // });
  // });

  router.put('/accounts/:accountId', (req, res, next) => {
    AccountInfo.findByIdAndUpdate({ _id: req.params.accountId }, req.body).then(
      (account) => res.send(account)
    );
  });

  // router.delete('/students/:studentId', (req, res, next) => {
  //   Student.findByIdAndRemove({ _id: req.params.studentId }).then(
  //     (student) => res.send(student)
  //   );
  // });
}

module.exports = AccountRouter;
