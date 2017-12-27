const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const accountSchema = new Schema({
  username: String,
  password: String,
  role: String,
  person: {
    personCode: String,
    name: String,
    phoneNumber: String,
    email: String,
    imageSource: String,
    dateOfBirth: String,
    address: String,
    companyName: String,
    companyPosition: String,
    faculty: String,
    websites: [
      String
    ],
    parentNotes: [
      {
        title: String,
        parentType: String,
        childNotes: [
          {
            title: String,
            startDate: String,
            endDate: String,
            value: String
          }
        ]
      }
    ]
  }
});

const AccountInfo = mongoose.model('account_infos', accountSchema);

module.exports = AccountInfo;