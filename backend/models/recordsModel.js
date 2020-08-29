const mongoose = require('mongoose');
const { Timestamp } = require('mongodb');

let schema = mongoose.Schema({
  user: {
    type: String,
    required: true
},
  date: {
    type: String,
    required: true
},
  gotIn: {
    type: String,
    required: true
},
  goneLunch: {
    type: String,
    required: true
},
  backLunch: {
    type: String,
    required: true
},
  gotOut: {
    type: String,
    required: true
},
  yearMonth: {
    type: String,
    required: true
}
});

const recordsModel = mongoose.model('records', schema);

module.exports = recordsModel;
