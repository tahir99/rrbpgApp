'use strict';

var _ = require('lodash');
var Mybookings = require('./mybookings.model');

// Get list of mybookingss
exports.index = function(req, res) {
  Mybookings.find(function (err, mybookingss) {
    if(err) { return handleError(res, err); }
    return res.json(200, mybookingss);
  });
};

// Get a single mybookings
exports.show = function(req, res) {
  Mybookings.findById(req.params.id, function (err, mybookings) {
    if(err) { return handleError(res, err); }
    if(!mybookings) { return res.send(404); }
    return res.json(mybookings);
  });
};

// Creates a new mybookings in the DB.
exports.create = function(req, res) {
  Mybookings.create(req.body, function(err, mybookings) {
    if(err) { return handleError(res, err); }
    return res.json(201, mybookings);
  });
};

// Updates an existing mybookings in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Mybookings.findById(req.params.id, function (err, mybookings) {
    if (err) { return handleError(res, err); }
    if(!mybookings) { return res.send(404); }
    var updated = _.merge(mybookings, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.json(200, mybookings);
    });
  });
};

// Deletes a mybookings from the DB.
exports.destroy = function(req, res) {
  Mybookings.findById(req.params.id, function (err, mybookings) {
    if(err) { return handleError(res, err); }
    if(!mybookings) { return res.send(404); }
    mybookings.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.send(204);
    });
  });
};

function handleError(res, err) {
  return res.send(500, err);
}