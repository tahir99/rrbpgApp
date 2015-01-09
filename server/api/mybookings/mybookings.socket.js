/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var Mybookings = require('./mybookings.model');

exports.register = function(socket) {
  Mybookings.schema.post('save', function (doc) {
    onSave(socket, doc);
  });
  Mybookings.schema.post('remove', function (doc) {
    onRemove(socket, doc);
  });
}

function onSave(socket, doc, cb) {
  socket.emit('mybookings:save', doc);
}

function onRemove(socket, doc, cb) {
  socket.emit('mybookings:remove', doc);
}