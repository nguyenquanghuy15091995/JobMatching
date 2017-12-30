const AccountInfo = require('../models/account');
const unique = require('array-unique');

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const AccountRouter = (router) => {
  router.get('/accounts', (req, res, next) => {
    AccountInfo.find().exec((err, accounts) => {
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

  router.get('/accounts/searchdata/:string_query', (req, res, next) => {

    //get string query from request and convert to array.
    let lowerStringQuery = req.params.string_query.toLowerCase();
    let queriesTemp = req.params.string_query.split('|');

    //init variable.
    let queries = [];
    let accIdByTitles = [];
    let accIdByValues = [];
    let accIdResults = [];
    let finalResults = [];

    //convert string to regular expression.
    queriesTemp.map(
      (queryTemp, i) => {
        queries.push(new RegExp(`.*${queryTemp}.*`));
      }
    );
    //search in child note's title.
    AccountInfo.find({
      'person.parentNotes.childNotes.title': { $in: queries }
    }).exec((err, accounts) => {
      if (err) {
        res.json({
          err
        });
      } else {
        accounts.map(
          (account, i) => {
            accIdByTitles.push(account._id);
          }
        );
      }
    });

    //search in child note's value.
    AccountInfo.find({
      'person.parentNotes.childNotes.value': { $in: queries }
    }).exec((err, accounts) => {
      if (err) {
        res.json({
          err
        });
      } else {
        accounts.map(
          (account, i) => {
            accIdByValues.push(account._id);
          }
        );
      }
    });

    //merge 2 search array value without duplicate.
    //get full data from database.
    //send response status.
    sleep(500).then(
      () => {
        //merge 2 search array value.
        accIdResults = unique(accIdByTitles.concat(accIdByValues));

        //get full data from database.
        AccountInfo.find({
          '_id': { $in: accIdResults }
        }).exec((err, accounts) => {
          if (err) {
            res.json({
              err
            });
          } else {
            accounts.map(
              (account, i) => {
                finalResults.push(account);
              }
            );
          }
        });

        //send response status.
        sleep(500).then(
          () => {
            res.status(200).json({
              finalResults,
            });
          }
        );
      }
    );
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
