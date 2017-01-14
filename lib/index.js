'use strict';

var getStopData = require('./controllers/stopdata');
var getRealtimeData = require('./controllers/realtimedata');

module.exports = {
  getStopData: getStopData,
  getRealtimeData: getRealtimeData
};