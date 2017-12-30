const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const autocompleteSchema = new Schema({
  name: String,
});

const AutocompleteInfo = mongoose.model('autocompletes', autocompleteSchema);

module.exports = AutocompleteInfo;
