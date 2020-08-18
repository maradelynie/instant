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
    type: Date,
    required: true
},
  goneLunch: {
    type: Date,
    required: true
},
  backLunch: {
    type: Date,
    required: true
},
  gotOut: {
    type: Date,
    required: true
},
  yearMonth: {
    type: String,
    required: true
}
});

const recordsModel = mongoose.model('records', schema);

module.exports = recordsModel;
