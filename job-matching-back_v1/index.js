const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

//const Schema = mongoose.Schema;
const dataConfig = require('./databaseConfig');
const port = 8080;

// const studentSchema = new Schema({
//   name: String,
//   age: Number
// });

// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/student');

mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://localhost:27017/${dataConfig.DATABASE_NAME}`);
const AccountRouter = require('./src/routers/accountRouter');

AccountRouter(router);

// const Student = mongoose.model('stu_details', studentSchema);

// router.get('/students', (req, res, next) => {
//   Student.find().exec((err, students) => {
//     console.log(students);
//     res.status(200).json({
//       students,
//     });
//   });
  
// });

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

// router.put('/students/:studentId', (req, res, next) => {
//   Student.findByIdAndUpdate({_id: req.params.studentId}, req.body).then(
//     (student) => res.send(student)
//   );
// });

// router.delete('/students/:studentId', (req, res, next) => {
//   Student.findByIdAndRemove({_id: req.params.studentId}).then(
//     (student) => res.send(student)
//   );
// });

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api', router);
app.listen(port);