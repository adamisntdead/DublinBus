'use strict';

var request = require('request');
var BASE_URL = 'https://data.dublinked.ie/cgi-bin/rtpi';

var getRealtimeData = function getRealtimeData(stopId, callback) {
    var requestUrl = BASE_URL + '/realtimebusinformation?stopid=' + stopId + '&format=json';

    request(requestUrl, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var returnedData = JSON.parse(body);
            var results = returnedData.results;

            callback(error, results);
        } else {
            // There was an error
            callback(error);
        }
    });
};

module.exports = getRealtimeData;