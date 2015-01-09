'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var RoomSchema = new Schema({
  name: String,
  number: String,
  description: String,
  location: String,
  capacity: String,
  picture: String
});

module.exports = mongoose.model('Room', RoomSchema);